import { h, Element } from "atomico";
import style from "./style.this.css";

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

style("{{__name__}}");
customElements.define("{{__name__}}", Tag);
