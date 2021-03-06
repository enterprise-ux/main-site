import { store } from '../../global';
import * as themes from '../../tmp/c-card';
export class Card {
    constructor() {
        this.currentTheme = this.theme || store.getState().theme.name;
    }
    updateTheme(name) {
        this.currentTheme = name;
    }
    hostData() {
        return {
            class: { card: true }
        };
    }
    componentWillLoad() {
        store.subscribe(() => this.currentTheme = store.getState().theme.name);
    }
    componentDidLoad() {
        const slots = this.el.shadowRoot.querySelectorAll('slot');
        slots.forEach(elem => {
            this.toggleHide(elem);
            elem.addEventListener('slotchange', e => this.toggleHide(e.target));
        });
    }
    toggleHide(node) {
        const nodes = node.assignedNodes().length || node.children.length;
        node.style.display = nodes ? '' : 'none';
    }
    render() {
        return [
            this.currentTheme ? h("style", null, themes[this.currentTheme]) : '',
            h("slot", Object.assign({ name: 'card-header' }, { class: 'card-header' })),
            h("slot", Object.assign({ name: 'card-body' }, { class: 'card-body' })),
            h("slot", Object.assign({ name: 'card-footer' }, { class: 'card-footer' }))
        ];
    }
    static get is() { return "c-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "currentTheme": {
            "state": true
        },
        "el": {
            "elementRef": true
        },
        "theme": {
            "type": String,
            "attr": "theme",
            "watchCallbacks": ["updateTheme"]
        }
    }; }
    static get style() { return "/**style-placeholder:c-card:**/"; }
}
