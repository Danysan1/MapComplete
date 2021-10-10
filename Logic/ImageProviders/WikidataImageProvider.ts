import {Utils} from "../../Utils";
import ImageProvider, {ProvidedImage} from "./ImageProvider";
import BaseUIElement from "../../UI/BaseUIElement";
import Svg from "../../Svg";
import {WikimediaImageProvider} from "./WikimediaImageProvider";
import Wikidata from "../Web/Wikidata";

export class WikidataImageProvider extends ImageProvider {

    public SourceIcon(backlinkSource?: string): BaseUIElement {
        throw Svg.wikidata_svg();
    }

    public static readonly singleton = new WikidataImageProvider()
    public readonly defaultKeyPrefixes = ["wikidata"]

    private constructor() {
        super()
    }

    protected DownloadAttribution(url: string): Promise<any> {
        throw new Error("Method not implemented; shouldn't be needed!");
    }

    public async ExtractUrls(key: string, value: string): Promise<Promise<ProvidedImage>[]> {
        const entity = await Wikidata.LoadWikidataEntryAsync(value)
        if(entity === undefined){
            return []
        }
       
        const allImages : Promise<ProvidedImage>[] = []
        // P18 is the claim 'depicted in this image'
        for (const img of Array.from(entity.claims.get("P18") ?? [])) {
            const promises = await WikimediaImageProvider.singleton.ExtractUrls(undefined, img)
            allImages.push(...promises)
        }
        
        const commons = entity.commons
        if (commons !== undefined) {
            const promises = await WikimediaImageProvider.singleton.ExtractUrls(undefined , commons)
            allImages.push(...promises)
        }
        return allImages
    }

}