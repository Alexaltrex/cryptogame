import {action, makeObservable, observable} from "mobx";

export class Store {
    burgerMenu = false
    activeLink = "About game"
    login = false
    connectWallet = false
    openLevel = false
    sentMessage = false

    constructor() {
        makeObservable(this, {
            burgerMenu: observable,
            activeLink: observable,
            login: observable,
            connectWallet: observable,
            openLevel: observable,
            sentMessage: observable,
            setBurgerMenu: action.bound,
            setActiveLink: action.bound,
            setLogin: action.bound,
            setConnectWallet: action.bound,
            setOpenLevel: action.bound,
            setSentMessage: action.bound,
        })
    }

    setBurgerMenu(burgerMenu: boolean) {
        this.burgerMenu = burgerMenu
    }

    setActiveLink(activeLink: string) {
        this.activeLink = activeLink
    }

    setLogin(login: boolean) {
        this.login = login
    }

    setConnectWallet(connectWallet: boolean) {
        this.connectWallet = connectWallet
    }

    setOpenLevel(openLevel: boolean) {
        this.openLevel = openLevel
    }


    setSentMessage(sentMessage: boolean) {
        this.sentMessage = sentMessage
    }
}
export const store = new Store()