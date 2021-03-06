import { h } from '../corporate-ui.core.js';

import { a as store } from './chunk-d9969fbb.js';

const scania = `:host {
  display: flex;
  flex-direction: column;
  background-color: #fff; }
`;

var themes = /*#__PURE__*/Object.freeze({
  scania: scania
});

class Content {
    constructor() {
        this.currentTheme = this.theme || store.getState().theme.name;
    }
    updateTheme(name) {
        this.currentTheme = name;
    }
    componentWillLoad() {
        store.subscribe(() => this.currentTheme = store.getState().theme.name);
    }
    render() {
        return [
            this.currentTheme ? h("style", null, themes[this.currentTheme]) : '',
            h("slot", null)
        ];
    }
    static get is() { return "c-content"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "currentTheme": {
            "state": true
        },
        "router": {
            "type": "Any",
            "attr": "router"
        },
        "theme": {
            "type": String,
            "attr": "theme",
            "watchCallbacks": ["updateTheme"]
        }
    }; }
    static get style() { return ".sc-c-content-h{display:block;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}"; }
}

export { Content as CContent };
