import {Img} from "../../UI/Img";
import {RegexTag, Tag} from "../../Logic/Tags";
import {TagRenderingOptions} from "../TagRenderingOptions";


export class OsmLink extends TagRenderingOptions {

  

    static options = {
        freeform: {
            key: "id",
            template: "$$$",
            renderTemplate:
                "<span class='osmlink'><a href='https://osm.org/{id}' target='_blank'>" +
                Img.osmAbstractLogo +
                "</a></span>",
            placeholder: "",
        },
        mappings: [
            {k: new RegexTag("id", /node\/-.+/), txt: "<span class='alert'>Uploading</span>"}
        ]

    }

    constructor() {
        super(OsmLink.options);
    }


}