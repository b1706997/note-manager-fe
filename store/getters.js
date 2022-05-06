export default {
    getNotes: (state) => {
        return state.notes;
    },
    getNote: (state) => (id) => {
        var a =  state.notes.find(e => e.id == id )
        return a
    }
}