export default {
    addNote(state, payload) {
        state.note.push(payload)
    },
    removeNote(state, payload) {
        let newState = state.notes;
        const deletingIndex = state.notes.indexOf(payload)
        if(deletingIndex > -1) {
            newState.pslice(deletingIndex, 1)
        }
        state.notes = newState;
    },
    setNote(state, payload) {
        console.log(payload)
    },
}