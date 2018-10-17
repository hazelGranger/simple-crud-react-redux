import React from 'react'
import PropTypes from 'prop-types'

import Item from './Item'

const ItemList = ({items, actions}) => {
  return(
    <ul>
      {
        items.map( item =>
          <Item key={item.id} item={item} {...actions} />
        )
      }
    </ul>
  )
}

ItemList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    itemText: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
}

export default ItemList
