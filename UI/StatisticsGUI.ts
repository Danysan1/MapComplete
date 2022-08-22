/**
 * The statistics-gui shows statistics from previous MapComplete-edits
 */
import {UIEventSource} from "../Logic/UIEventSource";
import {VariableUiElement} from "./Base/VariableUIElement";
import Loading from "./Base/Loading";
import {Utils} from "../Utils";
import Combine from "./Base/Combine";
import {StackedRenderingChart} from "./BigComponents/TagRenderingChart";
import {LayerFilterPanel} from "./BigComponents/FilterView";
import {AllKnownLayouts} from "../Customizations/AllKnownLayouts";
import MapState from "../Logic/State/MapState";
import BaseUIElement from "./BaseUIElement";
import Title from "./Base/Title";

class StatisticsForOverviewFile extends Combine{
    constructor(homeUrl: string, paths: string[]) {
        const layer = AllKnownLayouts.allKnownLayouts.get("mapcomplete-changes").layers[0]
        const filteredLayer = MapState.InitializeFilteredLayers({id: "statistics-view", layers: [layer]}, undefined)[0]
       const filterPanel = new LayerFilterPanel(undefined, filteredLayer)
        const appliedFilters = filteredLayer.appliedFilters

        const downloaded = new UIEventSource<{ features: ChangeSetData[] }[]>([])

        for (const filepath of paths) {
            Utils.downloadJson(homeUrl + filepath).then(data => {
                data?.features?.forEach(item => {
                    item.properties = {...item.properties, ...item.properties.metadata}
                    delete item.properties.metadata
                })
                downloaded.data.push(data)
                downloaded.ping()
            })
        }

        const loading = new Loading( new VariableUiElement(
            downloaded.map(dl => "Downloaded " + dl.length + " items out of "+paths.length))
        );
        
        super([
            filterPanel,
            new VariableUiElement(downloaded.map(downloaded => {
                if(downloaded.length !== paths.length){
                    return loading
                }
                
                let overview = ChangesetsOverview.fromDirtyData([].concat(...downloaded.map(d => d.features)))
                if (appliedFilters.data.size > 0) {
                    appliedFilters.data.forEach((filterSpec) => {
                        const tf = filterSpec?.currentFilter
                        if (tf === undefined) {
                            return
                        }
                        overview = overview.filter(cs => tf.matchesProperties(cs.properties))
                    })
                }

                if (downloaded.length === 0) {
                    return "No data matched the filter"
                }
                
                const trs =layer.tagRenderings
                    .filter(tr => tr.mappings?.length > 0 || tr.freeform?.key !== undefined);
                const elements : BaseUIElement[] = []
                for (const tr of trs) {
                    let total = undefined
                    if(tr.freeform?.key !== undefined) {
                     total =  new Set(  overview._meta.map(f => f.properties[tr.freeform.key])).size
                    }
                    
                    
                    elements.push(new Combine([
                        new Title(tr.question ?? tr.id).SetClass("p-2") ,
                        total > 1 ? total + " unique value"  : undefined,
                        new StackedRenderingChart(tr, <any>overview._meta,  {
                            period: "month",
                            groupToOtherCutoff: total > 50 ? 25 : (total > 10 ? 3 : 0)
                        
                        }).SetStyle("width: 100%; height: 600px")
                    ]).SetClass("block border-2 border-subtle p-2 m-2 rounded-xl" ))
                }
                
                return new Combine(elements)
            }, [appliedFilters])).SetClass("block w-full h-full")
        ])
            this.SetClass("block w-full h-full")
    }
}

export default class StatisticsGUI extends VariableUiElement{

    private static readonly homeUrl = "https://raw.githubusercontent.com/pietervdvn/MapComplete/develop/Docs/Tools/stats/"
    private static readonly stats_files = "file-overview.json"

constructor() {
   const index = UIEventSource.FromPromise(Utils.downloadJson(StatisticsGUI.homeUrl + StatisticsGUI.stats_files))
        super(index.map(paths => {
            if (paths === undefined) {
                return new Loading("Loading overview...")
            }
            
            return new StatisticsForOverviewFile(StatisticsGUI.homeUrl, paths)

        }))
            this.SetClass("block w-full h-full").AttachTo("maindiv")

      
    }
}

class ChangesetsOverview {

    private static readonly theme_remappings = {
        "metamap": "maps",
        "groen": "buurtnatuur",
        "updaten van metadata met mapcomplete": "buurtnatuur",
        "Toevoegen of dit natuurreservaat toegangkelijk is": "buurtnatuur",
        "wiki:mapcomplete/fritures": "fritures",
        "wiki:MapComplete/Fritures": "fritures",
        "lits": "lit",
        "pomp": "cyclofix",
        "wiki:user:joost_schouppe/campersite": "campersite",
        "wiki-user-joost_schouppe-geveltuintjes": "geveltuintjes",
        "wiki-user-joost_schouppe-campersite": "campersite",
        "wiki-User-joost_schouppe-campersite": "campersite",
        "wiki-User-joost_schouppe-geveltuintjes": "geveltuintjes",
        "wiki:User:joost_schouppe/campersite": "campersite",
        "arbres": "arbres_llefia",
        "aed_brugge": "aed",
        "https://llefia.org/arbres/mapcomplete.json": "arbres_llefia",
        "https://llefia.org/arbres/mapcomplete1.json": "arbres_llefia",
        "toevoegen of dit natuurreservaat toegangkelijk is": "buurtnatuur",
        "testing mapcomplete 0.0.0": "buurtnatuur",
        "entrances": "indoor",
        "https://raw.githubusercontent.com/osmbe/play/master/mapcomplete/geveltuinen/geveltuinen.json": "geveltuintjes"
    }
    public readonly _meta: ChangeSetData[];

    public static fromDirtyData(meta: ChangeSetData[]) {
        return new ChangesetsOverview(meta?.map(cs => ChangesetsOverview.cleanChangesetData(cs)))
    }

    private constructor(meta: ChangeSetData[]) {
        this._meta = Utils.NoNull(meta);
    }

    public filter(predicate: (cs: ChangeSetData) => boolean) {
        return new ChangesetsOverview(this._meta.filter(predicate))
    }

    private static cleanChangesetData(cs: ChangeSetData): ChangeSetData {
        if(cs === undefined){
            return undefined
        }
        if(cs.properties.editor?.startsWith("iD")){
            // We also fetch based on hashtag, so some edits with iD show up as well    
            return undefined
        }
        if (cs.properties.theme === undefined) {
            cs.properties.theme = cs.properties.comment.substr(cs.properties.comment.lastIndexOf("#") + 1)
        }
        cs.properties.theme = cs.properties.theme.toLowerCase()
        const remapped = ChangesetsOverview.theme_remappings[cs.properties.theme]
        cs.properties.theme = remapped ?? cs.properties.theme
        if (cs.properties.theme.startsWith("https://raw.githubusercontent.com/")) {
            cs.properties.theme = "gh://" + cs.properties.theme.substr("https://raw.githubusercontent.com/".length)
        }
        if (cs.properties.modify + cs.properties.delete + cs.properties.create == 0) {
            cs.properties.theme = "EMPTY CS"
        }
        try {
            cs.properties.host = new URL(cs.properties.host).host
        } catch (e) {

        }
        return cs
    }

}

interface ChangeSetData {
    "id": number,
    "type": "Feature",
    "geometry": {
        "type": "Polygon",
        "coordinates": [number, number][][]
    },
    "properties": {
        "check_user": null,
        "reasons": [],
        "tags": [],
        "features": [],
        "user": string,
        "uid": string,
        "editor": string,
        "comment": string,
        "comments_count": number,
        "source": string,
        "imagery_used": string,
        "date": string,
        "reviewed_features": [],
        "create": number,
        "modify": number,
        "delete": number,
        "area": number,
        "is_suspect": boolean,
        "harmful": any,
        "checked": boolean,
        "check_date": any,
        "host": string,
        "theme": string,
        "imagery": string,
        "language": string
    }
}