import React from 'react'

import NoteList from './NoteList'
import NoteCreate from './NoteCreate'
import NoteShow from './NoteShow'
import NoteDelete from './NoteShow'

export default function NoteApp(props){
  return(
    <div className='container'>
      <div className='col-md-4'>
        < NoteList />
        < NoteCreate />

      </div>
      <div className='col-md-8'>
        { props.children }
      </div>
    </div>
  )
}
