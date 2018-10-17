import React from 'react'
import { connect } from 'react-redux'
import { selectItem } from '../actions'

const SelectItem = ({ dispatch }) => {
  let input

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.value.trim()) {
      return
    }

    input.value = ''
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={node => input = node }/>
        <button type="submit" style={{ marginLeft: '10px' }}>Select Keyword</button>
      </form>
    </div>
  )
}

export default connect()(SelectItem)
