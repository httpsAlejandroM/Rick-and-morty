import { ADD_FAVORITES, DELETE_FAVORITES } from "./actions-type";

export const agregarFavoritos = (character) => {
    return { type:ADD_FAVORITES, payload:character }
}

export const borrarFavoritos = (id) => {
    return {type: DELETE_FAVORITES, payload: id}
}