import React from 'react'
import { connect } from 'react-redux'

class NoteDelete extends React.Component {

  handleDelete() {
    console.log('deleting');
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

export default connect(mapStateToProps)(NoteDelete)
