import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ItemList from '../components/ItemList'
//import { VisibilityFilters } from '../actions'

import * as itemActions from '../actions'
import { getVisibleItems, getVisibleItemsFilteredByKeyword } from '../selectors'

const mapStateToProps = state => ({
  items: state.keyword? getVisibleItemsFilteredByKeyword(state) : getVisibleItems(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(itemActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ItemList)
