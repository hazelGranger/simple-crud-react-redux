import React, { Component } from 'react'
import PropTypes from 'prop-types'

import EditItemForm from './EditItemForm'

export default class Item extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    deleteItem: PropTypes.func.isRequired,
    saveEdit: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleEdit = () => {
    this.setState({editing: true})
  }

  cancelEdit = () => {
    this.setState({editing: false})
  }

  render() {
    const { item, deleteItem } = this.props
    let element
    if (this.state.editing) {
      element = (
        <EditItemForm item={item}
          cancelEdit={this.cancelEdit}
          saveEdit={this.props.saveEdit}
          deleteItem={this.props.deleteItem}
         />
      )
    } else {
      element = (
        <div>
          <span>{ item.itemText }</span>
          <button onClick={ this.handleEdit }
            style={{ marginLeft: '10px' }} >Edit</button>
          <button onClick={ () => deleteItem(item.id) }> Delete</button>
        </div>
      )
    }
    return(
      <li>
        { element }
      </li>
    )
  }
}
