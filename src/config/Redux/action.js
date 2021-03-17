import ActionType from "./actionType"


export const SET_FORM_LOGIN = (input, value) => {
    return {
        type: ActionType.SET_FORM,
        inputType: input,
        inputValue: value,
    }
}

export const SET_BOOK_DATA = (value) => {
    return {
        type: ActionType.SET_BOOK,
        inputValue : value
    }
}

export const SET_SEARCH_BOOK = (value) => {
    return {
        type: ActionType.SET_LOOK_BOOK,
        inputValue : value
    }
}

export const SET_REMOVE_BOOK = () => {
    return {
        type : ActionType.SET_ROLLBACK_BOOK
    }
}

export const SET_HISTORY_DATA = (value) => {
    return {
        type: ActionType.SET_HISTORY,
        inputValue : value
    }
}