let nextItemId = 0

export const addItem = itemText => ({
  type: "ADD_ITEM",
  id: nextItemId++,
  itemText
})

export const searchKeyword = keywordText => ({
  type: "SEARCH_KEYWORD",
  keywordText
})

export const selectItem = (keyword, filter) => ({
  type: "SELECT_ITEM",
  keyword,
  filter
})

export const deleteItem = (id) => ({
  type: "DELETE_ITEM",
  id
})

export const saveEdit = (id, itemText) => ({
  type: "SAVE_EDIT",
  id,
  itemText
})

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL'
// }

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})
