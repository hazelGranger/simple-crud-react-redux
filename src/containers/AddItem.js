import React from 'react'
import { connect } from 'react-redux'
import { addItem } from '../actions'

const AddItem = ({ dispatch }) =>{
  let input

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.value.trim()){
      return
    }
    dispatch(addItem(input.value))
    input.value=''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={ node => input = node} />
        <button type="submit" style={{ marginLeft: '10px' }}>Add Item</button>
      </form>
    </div>
  )
}

export default connect()(AddItem)
