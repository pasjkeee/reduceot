const initialState = {
    menu: [],
    loading: true,
    error: false,
    choosed: null
}

const reducer = (state = initialState, action) => {
    console.log(state, action);
    switch (action.type) {
        case 'CHOOSE_ITEM':
            console.log('Reduced');
            return { 
                menu: state.menu, //оставляем как было
                loading: state.loading,
                error: state.error,
                choosed: action.payload
            };
        case 'MENU_LOADED':
            return { 
                menu: action.payload,
                loading: state.error,
                error: false,
                choosed: state.choosed
            };
        case 'MENU_REQUSTED':
            return { 
                menu: state.menu, //оставляем как было
                error: state.error,
                loading: true,
                choosed: state.choosed
            };
        case 'LOADING_ERROR':
            return { 
                menu: state.menu, //оставляем как было
                loading: state.loading,
                error: true,
                choosed: state.choosed
            };
        
        default: 
            return state;
        
    }
}

export default reducer;
