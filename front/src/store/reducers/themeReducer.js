const CHANGE_THEME = 'CHANGE_THEME'

export const changeThemeAction = () => ({type: CHANGE_THEME})

const initialState = {
    value: 'light'
}

export const themeReducer = (state=initialState, action) => {
    if(action.type === CHANGE_THEME){
        return {
            value: state.value === 'light' ? 'dark' : 'light'
        }
    } else {
        return state
    }
}