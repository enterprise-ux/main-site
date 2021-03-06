import '../../stencil.core';
export declare class Card {
    theme: string;
    currentTheme: string;
    el: HTMLElement;
    updateTheme(name: any): void;
    hostData(): {
        class: {
            card: boolean;
        };
    };
    componentWillLoad(): void;
    componentDidLoad(): void;
    toggleHide(node: any): void;
    render(): JSX.Element[];
}
