import { defineStore } from 'pinia'

export const useAuth = defineStore('authStore',{
    state: () =>{
        return {
            userID: '123123'
        }
    },
    getters: {},
    actions: {}
})