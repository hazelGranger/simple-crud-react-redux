import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Keyword extends Component {

  static propTypes = {
    searchKeyword: PropTypes.func.isRequired
  }

  render(){
    let input

    const handleSubmit = (e) => {
      e.preventDefault()
      // if (!input.value.trim()) {
      //   return
      // }
      this.props.searchKeyword(input.value)
    }

    return(
      <form onSubmit={handleSubmit}>
        <input type="text" ref={node => input = node }/>
        <button type="submit" style={{ marginLeft: '10px' }}>Select Keyword</button>
      </form>
    )
  }
}
