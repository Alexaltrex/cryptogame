import {action, makeObservable, observable} from "mobx";

export class Store {
    burgerMenu = false
    activeLink = "About game"

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            activeLink: observable,
            setBurgerMenu: action.bound,
            setActiveLink: action.bound,
        })
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu
    }

    setActiveLink(activeLink: string) {
        this.activeLink = activeLink
    }
}
export const store = new Store()