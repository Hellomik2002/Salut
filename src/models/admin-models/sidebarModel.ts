class SideBar {
    icon: string;
    value: string;

    htmlElements: HTMLElement[];
    constructor(icon: string, value: string, htmlElements: HTMLElement[]) {
        this.icon = icon;
        this.value = value;

        this.htmlElements = htmlElements;
    }
}
export { SideBar };
