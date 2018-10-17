import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class EditItemForm extends Component {

  static propTypes = {
    item: PropTypes.object.isRequired,
    cancelEdit: PropTypes.func.isRequired,
    saveEdit: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired
  }

  state = {
    text: this.props.item.itemText || ''
  }

  cancelEdit = () => {
    this.props.cancelEdit()
  }

  saveEdit = (e) => {
    e.preventDefault()

    const { item } = this.props,
    text = this.state.text.trim()
    if (text) {
      this.props.saveEdit(item.id, this.state.text)
    }else{
      this.props.deleteItem(item.id)
    }

    this.props.cancelEdit()
  }

  handleChange = (e) =>{
    this.setState({ text: e.target.value })
  }

  render() {
    const { item } = this.props
    return(
      <div>
        <form onSubmit={this.saveEdit}>
          <input type="text"
            value={this.state.text}
            onChange={this.handleChange} />
          <button type="submit"
            style={{ marginLeft: '10px' }}>save</button>
          <button type="button" onClick ={this.cancelEdit}>cancel</button>
        </form>
      </div>
    )
  }
}
