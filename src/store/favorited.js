import { defineStore } from "pinia";

export const useFavoritedStore = defineStore('favoritedStore', {
    state: () =>{
        return {
            favorited: localStorage.getItem('favorited')
        }
    },
    getters: {},
    actions: {}
})