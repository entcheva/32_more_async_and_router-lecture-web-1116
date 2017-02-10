export default function currentNoteReducer(state="", action){
  switch (action.type) {
    case 'ADD_NOTE':
      return action.payload.id
    case 'UPDATE_CURRENT_NOTE':
      return action.payload
    case 'DELETE_CURRENT_NOTE':
      return action.payload
    default:
      return state
  }
}

/**************************************************/

export function managePets(state = {pets: []}, action){
 switch (action.type){
   case 'ADD_PET':
     return Object.assign({}, state, {pets: state.pets.concat(action.payload)})
   case 'REMOVE_PET':
     var selectPet = state.pets.findIndex(pet => pet.id === action.payload)
     //findIndex finds where in the array the object is. In this example selectPet === 1. Pet is the object
     var newPetsArray = state.pets.slice(0, selectPet).concat(state.pets.slice(selectPet+1))
     return Object.assign({}, state, {pets: newPetsArray})
   default:
     return state
 }
}
