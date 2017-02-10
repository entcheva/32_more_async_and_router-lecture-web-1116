import React from 'react'
import { connect } from 'react-redux'
import { deleteNote } from '../actions'

class NoteDelete extends React.Component {

  handleDelete() {
    console.log(`deleting ${this.props.note.id}`)
    this.props.deleteNote( this.props.note.id)

  }

  render () {
    return(
      <div>
        <h3>for delete</h3>
        <button onClick={ this.handleDelete.bind(this) }>Delete Note</button>
      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  const note = state.notes.find( note => note.id === state.currentNote )

  return {
    note: note
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteNote: function(noteId2delete) {
      let action = deleteNote(noteId2delete)
      dispatch ( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteDelete)
