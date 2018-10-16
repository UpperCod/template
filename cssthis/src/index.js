import { h, Element } from "atomico";
import style from "./style.this.css";

export class Tag extends Element {
    static get props() {
        return ["hello"];
    }
    render() {
        return (
            <host>
                <div class="emoji">👋</div>
                <div class="text">{this.props.hello || "😎"}</div>
                <div class="beer">🍺</div>
            </host>
        );
    }
}

style("{{__name__}}");
customElements.define("{{__name__}}", Tag);
