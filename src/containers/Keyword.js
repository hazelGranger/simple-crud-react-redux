import React from 'react'
import { connect } from 'react-redux'

import Keyword from '../components/Keyword'
import { searchKeyword } from '../actions'

const mapStateToProps = state => ({
  keyword: state.keyword
})

const mapDispatchToProps = dispatch => ({
  searchKeyword: keywordText => dispatch(searchKeyword(keywordText))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keyword)
