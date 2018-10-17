const items = (state=[], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [
        ...state,
        {
          id: action.id,
          itemText: action.itemText,
          editing: false
        }
      ]
    case "DELETE_ITEM":
      return state.filter(item =>
        item.id !== action.id
      )
    case "SAVE_EDIT":
      return state.map(item =>
        item.id === action.id ?
        { ...item, itemText: action.itemText } :
        item
      )
    // case "SELECT_ITEM":
    // return state.filter(item => (
    //    item.itemText === action.keywords
    // ))
    default:
      return state
  }
}

export default items
