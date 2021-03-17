import { combineReducers } from 'redux'
import ActionType from './actionType'


// Initial State
const initialState = {
    authData:""
}
const initialReducer = (state = initialState, action) => {
    if(action.type === ActionType.SET_INITIAL){
        return{
            ...state,
            authData : action.value
        }
    }
    return state
}


// Login Reducer
const loginState = {
    form : {
        user_number : "",
        password : "",
    }
}
const loginReducer = (state = loginState, action) => {
    if(action.type === ActionType.SET_FORM){
        return {
            ...state,
            form: {
                ...state.form,
                [action.inputType] : action.inputValue
            }
        }
    }
  return state
}

// Books Reducer
const bookState = {
    books:undefined,
    page:1,
    pageSearch:1,
    booksTmp:undefined,
}
const bookReducer = (state = bookState, action) => {
    if(action.type === ActionType.SET_BOOK){
        let array = state.books ?? []
        action.inputValue.data.map(item => {
            array.push(item)
        })
        return{
            ...state,
            books: array,
            page:action.inputValue.page
        }
    }
    if(action.type === ActionType.SET_LOOK_BOOK){
        let tmp = state.books
        let array = state.booksTmp ?? []
        action.inputValue.data.map(item => {
            array.push(item)
        })
        return{
            ...state,
            books: array,
            pageSearch:action.inputValue.page,
            booksTmp:tmp
        }
    }
    if(action.type === ActionType.SET_ROLLBACK_BOOK){
        return{
            ...state,
            books:state.booksTmp,
            booksTmp:undefined,
            pageSearch:1
        }
    }
    return state
}

// History Reducer
const historyState = {
    books:undefined,
    page:1,
    lastPage:0,
}
const historyReducer = (state = historyState, action) => {
    if(action.type === ActionType.SET_HISTORY){
        let array = state.books ?? []
        action.value.data.data.map(item => {
            array.push(item)
        })
        return{
            ...state,
            books: array,
            page:action.value.page,
            lastPage:action.value.data.last_page
        }
    }
    return state
}


// PupularStudent Reducer
const pupularStudent = {
    dataSMK : null,
    dataSMA : null,
    dataSMP : null,
    dataSD : null
}
const popularStudentReducer = (state = pupularStudent, action ) => {
    if(action.type === ActionType.SET_POPULAR_STUDENT_SMK){
        return {
            ...state,
            dataSMK : action.value
        }
    }
    if(action.type === ActionType.SET_POPULAR_STUDENT_SMA){
        return {
            ...state,
            dataSMA : action.value
        }
    }
    if(action.type === ActionType.SET_POPULAR_STUDENT_SMP){
        return {
            ...state,
            dataSMP : action.value
        }
    }
    if(action.type === ActionType.SET_POPULAR_STUDENT_SD){
        return {
            ...state,
            dataSD : action.value
        }
    }
    return state
}


// Banner Reducer
const banner = {
    data: []
}
const bannerReducer = (state = banner, action) => {
    if(action.type === ActionType.SET_BANNER){
        return {
            ...state,
            data : action.value
        }
    }
    return state
}



export default combineReducers({
    initialReducer,
    loginReducer,
    bookReducer,
    historyReducer,
    popularStudentReducer,
    bannerReducer
})