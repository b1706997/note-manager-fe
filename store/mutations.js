export default {
    addNote(state, payload) {
        state.notes.push(payload)
    },
    removeNote(state, payload) {
        let newState = state.notes;
        const deletingIndex = state.notes.findIndex(e=>e.id == payload)
        if(deletingIndex > -1) {
            newState.splice(deletingIndex, 1)
        }
        state.notes = newState;
    },
    setNote(state, payload) {
        const newState = state.notes;
        const settingIndex = newState.findIndex(e=>e.id==payload.id)
        state.notes[settingIndex].contents = payload.contents
    },
    setNotes(state, payload) {
        state.notes = payload;
    }
}