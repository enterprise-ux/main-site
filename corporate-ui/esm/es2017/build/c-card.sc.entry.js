import { h } from '../corporate-ui.core.js';

import { a as store } from './chunk-d9969fbb.js';

const scania = `:host {
  display: block; }

.card-body {
  background-color: #e8e8e8; }

.card-footer {
  background-color: transparent;
  border-top: 0; }
`;

var themes = /*#__PURE__*/Object.freeze({
  scania: scania
});

class Card {
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
    static get style() { return ".card.sc-c-card, .card.sc-c-card-h, .sc-c-card-h{position:relative;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box;border:1px solid rgba(0,0,0,.125);border-radius:.25rem}.card.sc-c-card > hr.sc-c-card, .card.sc-c-card-h > hr.sc-c-card, .sc-c-card-h > hr.sc-c-card{margin-right:0;margin-left:0}.card.sc-c-card > .list-group.sc-c-card:first-child   .list-group-item.sc-c-card:first-child, .card.sc-c-card-h > .list-group.sc-c-card:first-child   .list-group-item.sc-c-card:first-child, .sc-c-card-h > .list-group.sc-c-card:first-child   .list-group-item.sc-c-card:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card.sc-c-card > .list-group.sc-c-card:last-child   .list-group-item.sc-c-card:last-child, .card.sc-c-card-h > .list-group.sc-c-card:last-child   .list-group-item.sc-c-card:last-child, .sc-c-card-h > .list-group.sc-c-card:last-child   .list-group-item.sc-c-card:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body.sc-c-card{-ms-flex:1 1 auto;flex:1 1 auto;padding:1.25rem}.card-title.sc-c-card{margin-bottom:.75rem}.card-subtitle.sc-c-card{margin-top:-.375rem}.card-subtitle.sc-c-card, .card-text.sc-c-card:last-child{margin-bottom:0}.card-link.sc-c-card:hover{text-decoration:none}.card-link.sc-c-card + .card-link.sc-c-card{margin-left:1.25rem}.card-header.sc-c-card{padding:.75rem 1.25rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header.sc-c-card:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header.sc-c-card + .list-group.sc-c-card   .list-group-item.sc-c-card:first-child{border-top:0}.card-footer.sc-c-card{padding:.75rem 1.25rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer.sc-c-card:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs.sc-c-card{margin-bottom:-.75rem;border-bottom:0}.card-header-pills.sc-c-card, .card-header-tabs.sc-c-card{margin-right:-.625rem;margin-left:-.625rem}.card-img-overlay.sc-c-card{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img.sc-c-card{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top.sc-c-card{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom.sc-c-card{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck.sc-c-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-deck.sc-c-card   .card.sc-c-card, .card-deck   .card.sc-c-card-h, .sc-c-card-h{margin-bottom:15px}\@media (min-width:576px){.card-deck.sc-c-card{-ms-flex-flow:row wrap;flex-flow:row wrap;margin-right:-15px;margin-left:-15px}.card-deck.sc-c-card   .card.sc-c-card, .card-deck   .card.sc-c-card-h, .sc-c-card-h{display:-ms-flexbox;display:flex;-ms-flex:1 0 0%;flex:1 0 0%;-ms-flex-direction:column;flex-direction:column;margin-right:15px;margin-bottom:0;margin-left:15px}}.card-group.sc-c-card{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column}.card-group.sc-c-card > .card.sc-c-card, .card-group > .card.sc-c-card-h, .sc-c-card-h{margin-bottom:15px}\@media (min-width:576px){.card-group.sc-c-card{-ms-flex-flow:row wrap;flex-flow:row wrap}.card-group.sc-c-card > .card.sc-c-card, .card-group > .card.sc-c-card-h, .sc-c-card-h{-ms-flex:1 0 0%;flex:1 0 0%;margin-bottom:0}.card-group.sc-c-card > .card.sc-c-card + .card.sc-c-card, .card-group > .card + .card.sc-c-card-h, .sc-c-card-h, .card-group > .card.sc-c-card-h + .card.sc-c-card, .sc-c-card-h + .card.sc-c-card, .card-group > .card.sc-c-card-h + (.card.sc-c-card, .sc-c-card-h + (.card.sc-c-card, ).sc-c-card-h{margin-left:0;border-left:0}.card-group.sc-c-card > .card.sc-c-card:not(:last-child), .card-group > :not(:last-child).card.sc-c-card-h, .sc-c-card-h{border-top-right-radius:0;border-bottom-right-radius:0}.card-group.sc-c-card > .card.sc-c-card:not(:last-child)   .card-header.sc-c-card, .card-group.sc-c-card > .card.sc-c-card:not(:last-child)   .card-img-top.sc-c-card, .card-group > :not(:last-child).card.sc-c-card-h   .card-header.sc-c-card, .sc-c-card-h   .card-header.sc-c-card, .card-group > :not(:last-child).card.sc-c-card-h   .card-img-top.sc-c-card, .sc-c-card-h   .card-img-top.sc-c-card{border-top-right-radius:0}.card-group.sc-c-card > .card.sc-c-card:not(:last-child)   .card-footer.sc-c-card, .card-group.sc-c-card > .card.sc-c-card:not(:last-child)   .card-img-bottom.sc-c-card, .card-group > :not(:last-child).card.sc-c-card-h   .card-footer.sc-c-card, .sc-c-card-h   .card-footer.sc-c-card, .card-group > :not(:last-child).card.sc-c-card-h   .card-img-bottom.sc-c-card, .sc-c-card-h   .card-img-bottom.sc-c-card{border-bottom-right-radius:0}.card-group.sc-c-card > .card.sc-c-card:not(:first-child), .card-group > :not(:first-child).card.sc-c-card-h, .sc-c-card-h{border-top-left-radius:0;border-bottom-left-radius:0}.card-group.sc-c-card > .card.sc-c-card:not(:first-child)   .card-header.sc-c-card, .card-group.sc-c-card > .card.sc-c-card:not(:first-child)   .card-img-top.sc-c-card, .card-group > :not(:first-child).card.sc-c-card-h   .card-header.sc-c-card, .sc-c-card-h   .card-header.sc-c-card, .card-group > :not(:first-child).card.sc-c-card-h   .card-img-top.sc-c-card, .sc-c-card-h   .card-img-top.sc-c-card{border-top-left-radius:0}.card-group.sc-c-card > .card.sc-c-card:not(:first-child)   .card-footer.sc-c-card, .card-group.sc-c-card > .card.sc-c-card:not(:first-child)   .card-img-bottom.sc-c-card, .card-group > :not(:first-child).card.sc-c-card-h   .card-footer.sc-c-card, .sc-c-card-h   .card-footer.sc-c-card, .card-group > :not(:first-child).card.sc-c-card-h   .card-img-bottom.sc-c-card, .sc-c-card-h   .card-img-bottom.sc-c-card{border-bottom-left-radius:0}}.card-columns.sc-c-card   .card.sc-c-card, .card-columns   .card.sc-c-card-h, .sc-c-card-h{margin-bottom:.75rem}\@media (min-width:576px){.card-columns.sc-c-card{-webkit-column-count:3;column-count:3;-webkit-column-gap:1.25rem;column-gap:1.25rem;orphans:1;widows:1}.card-columns.sc-c-card   .card.sc-c-card, .card-columns   .card.sc-c-card-h, .sc-c-card-h{display:inline-block;width:100%}}.accordion.sc-c-card > .card.sc-c-card, .accordion > .card.sc-c-card-h, .sc-c-card-h{overflow:hidden}.accordion.sc-c-card > .card.sc-c-card:not(:first-of-type)   .card-header.sc-c-card:first-child, .accordion > :not(:first-of-type).card.sc-c-card-h   .card-header.sc-c-card:first-child, .sc-c-card-h   .card-header.sc-c-card:first-child{border-radius:0}.accordion.sc-c-card > .card.sc-c-card:not(:first-of-type):not(:last-of-type), .accordion > :not(:first-of-type):not(:last-of-type).card.sc-c-card-h, .sc-c-card-h{border-bottom:0;border-radius:0}.accordion.sc-c-card > .card.sc-c-card:first-of-type, .accordion > :first-of-type.card.sc-c-card-h, .sc-c-card-h{border-bottom:0;border-bottom-right-radius:0;border-bottom-left-radius:0}.accordion.sc-c-card > .card.sc-c-card:last-of-type, .accordion > :last-of-type.card.sc-c-card-h, .sc-c-card-h{border-top-left-radius:0;border-top-right-radius:0}.accordion.sc-c-card > .card.sc-c-card   .card-header.sc-c-card, .accordion > .card.sc-c-card-h   .card-header.sc-c-card, .sc-c-card-h   .card-header.sc-c-card{margin-bottom:-1px}.sc-c-card-h, .sc-c-card-h   *.sc-c-card, .sc-c-card-h   .sc-c-card:after, .sc-c-card-h   .sc-c-card:before{-webkit-box-sizing:border-box;box-sizing:border-box}a.sc-c-card{text-decoration:none}a.sc-c-card:hover{text-decoration:underline}.sc-c-card-h, slot.sc-c-card{display:block}"; }
}

export { Card as CCard };
