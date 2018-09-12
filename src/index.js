import { h, Element } from "atomico";
import style from "cssthis-tag";
import css from "./style.this.css";

export const TAG_NAME = "atomico-starter-component";

export default class Tag extends Element {
    static get props() {
        return ["emoji"];
    }
    elementMount(event) {
        event.preventDefault();
        let handler = () => {
            let emoji = (this.props.emoji
                ? this.props.emoji
                : "🔥 🤷 🤔"
            ).split(" ");
            emoji = emoji[Math.floor(Math.random() * emoji.length)];
            this.setState({ emoji });
        };
        setInterval(handler, 1000);
        handler();
    }
    render() {
        return <span>{this.state.emoji}</span>;
    }
}

customElements.define(TAG_NAME, Tag);

style(TAG_NAME)(css);
