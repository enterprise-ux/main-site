import { h } from '../corporate-ui.core.js';

class List {
    constructor() {
        this.items = [];
        this._items = [];
    }
    componentWillLoad() {
        this._items = Array.isArray(this.items)
            ? this.items
            : JSON.parse(this.items);
    }
    componentWillUpdate() {
        this._items = Array.isArray(this.items)
            ? this.items
            : JSON.parse(this.items);
    }
    render() {
        return (h("ul", null, this._items.map(item => (h("li", null,
            h("span", null, item['text']))))));
    }
    static get is() { return "c-list"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "items": {
            "type": "Any",
            "attr": "items"
        }
    }; }
    static get style() { return ""; }
}

class UserRepos {
    constructor() {
        this.repos = [];
    }
    componentWillLoad() {
    }
    render() {
        return h("c-list", { items: this.repos });
    }
    static get is() { return "user-repos"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "repos": {
            "state": true
        },
        "userId": {
            "type": String,
            "attr": "user-id"
        }
    }; }
    static get style() { return ""; }
}

export { List as CList, UserRepos };
