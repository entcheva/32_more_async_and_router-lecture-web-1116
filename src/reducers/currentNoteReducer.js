export default function currentNoteReducer(state="", action){
  switch (action.type) {
    case 'ADD_NOTE':
      return action.payload.id
    case 'UPDATE_CURRENT_NOTE':
      return action.payload
    case 'DELETE_CURRENT_NOTE':
    // delete specific note
      return state
    default:
      return state
  }
}
