const keyword = (state = [], action) => {
  switch (action.type) {
    case "SEARCH_KEYWORD":
      return action.keywordText
    default:
      return state
  }
}

export default keyword
