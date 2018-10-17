import React from 'react'

import { connect } from 'react-redux'
import { editItem } from '../actions'

const EditItem = ( item ) => {

  const handleClick = (e) =>{
    e.preventDefault()
    item.dispatch(editItem(item.id))
  }
  return (
      <button style={{ marginLeft: '10px' }}
        onClick = {handleClick}
        >Edit Item</button>
  )
}



// const mapStateToProps = state => ({
//   items: editItem
// })

export default connect()(EditItem)
