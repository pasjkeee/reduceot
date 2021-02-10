const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}

const menuRequsted = () => {
    return {
        type: 'MENU_REQUSTED'
    }
}

const loadingError = () => {
    return {
        type: 'LOADING_ERROR'
    }
}

const chooseItem = (id) => {
    return {
        type: 'CHOOSE_ITEMS',
        payload: id
    }
}

export {
    menuLoaded,
    menuRequsted,
    loadingError,
    chooseItem
};