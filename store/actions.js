import { createNote, getNotes, deleteNote, updateNote, searchNote } from '../service/service.js'
export default {
    create({ commit }, payload) {
        createNote(payload).then(response => {
            commit('addNote', response.data)
        })
    },

    getAll({ commit }) {
        getNotes().then(response => {
            commit('setNotes', response.data)
        })
    },

    delete({commit}, payload) {
        deleteNote(payload).then(response=>{
            commit("removeNote", payload)
        })
    },

    save({commit}, payload) {
        updateNote(payload.id,payload.contents).then(e=>{
            commit("setNote", payload)
        })
    },

    search({commit}, payload) {
        if(payload == "")
        {
            getNotes().then(response => {
                commit('setNotes', response.data)
            })
        }
        else {
            searchNote(payload).then(res=>{
                commit("setNotes",res.data)
            })
        }
    }


}