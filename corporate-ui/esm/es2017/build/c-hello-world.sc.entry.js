import { h } from '../corporate-ui.core.js';

class HelloWorld {
    constructor() {
        this.text = 'hello-World';
    }
    render() {
        return (h("div", null,
            h("h2", null,
                this.text,
                " component")));
    }
    static get is() { return "c-hello-world"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "text": {
            "type": "Any",
            "attr": "text"
        }
    }; }
    static get style() { return ".fade.sc-c-hello-world{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}\@media (prefers-reduced-motion:reduce){.fade.sc-c-hello-world{-webkit-transition:none;transition:none}}.fade.sc-c-hello-world:not(.show){opacity:0}.collapse.sc-c-hello-world:not(.show){display:none}.collapsing.sc-c-hello-world{position:relative;height:0;overflow:hidden;-webkit-transition:height .35s ease;transition:height .35s ease}\@media (prefers-reduced-motion:reduce){.collapsing.sc-c-hello-world{-webkit-transition:none;transition:none}}.sc-c-hello-world-h{display:block;color:red;font-size:20px;background-color:#000;overflow:hidden}"; }
}

export { HelloWorld as CHelloWorld };
