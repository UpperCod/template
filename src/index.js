import { h, Element } from "atomico";
import style from "./style.this.css";

export const TAG_NAME = "atomico-starter-component";

export class Tag extends Element {
    static get props() {
        return ["hello"];
    }
    render() {
        return (
            <div class="box">
                <div class="emoji">👋</div>
                <div class="text">{this.props.hello || "😎"}</div>
                <div class="beer">🍺</div>
            </div>
        );
    }
}

style(TAG_NAME);
customElements.define(TAG_NAME, Tag);
