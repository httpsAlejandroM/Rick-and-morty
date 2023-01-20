import { ADD_FAVORITES, DELETE_FAVORITES } from "./actions-type";

initialState = {
    myFavorites:[]
}

const rooReducer = (state = initialState, action) => {
    switch(action.type){
        case  ADD_FAVORITES:
        return {
            ...state,
            myFavorites: [...state.myFavorites, state.payload]
        }

        case DELETE_FAVORITES:
            return {
                ...state,
                myFavorites: state.myFavorites.map((character)=>character !== state.payload)
            }

        default:
            return {
            ...state
        }
    }
} 

export default rooReducer;