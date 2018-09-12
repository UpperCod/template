import { h, Element } from "atomico";
import style from "cssthis-tag";
import css from "./style.this.css";

export const TAG_NAME = "atomico-starter-component";

export default class Tag extends Element {
    render() {
        return <span>🤓</span>;
    }
}

customElements.define(TAG_NAME, Tag);

style(TAG_NAME)(css);
