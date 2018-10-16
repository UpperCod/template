import { h, Element } from "atomico";
import style from "./style.css";

export class Tag extends Element {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    static get props() {
        return ["hello"];
    }
    render() {
        return (
            <host>
                <style>{style}</style>
                <div class="emoji">👋</div>
                <div class="text">{this.props.hello || "😎"}</div>
                <div class="beer">🍺</div>
            </host>
        );
    }
}

customElements.define("{{__name__}}", Tag);
