import { createSelector } from 'reselect'

import { SHOW_ALL } from '../constants/ItemFilters'

const getVisibilityFilter = state => state.visibilityFilter
const getItems = state => state.items
const getKeyword = state => state.keyword

export const getVisibleItems = createSelector(
  [getVisibilityFilter, getItems],
  (visibilityFilter, items) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return items
      default:
        throw new Error('Unknown filter: '+ visibilityFilter)
    }
  }
)

export const getVisibleItemsFilteredByKeyword = createSelector(
  [getItems, getKeyword],
  (items, keyword) => {
    console.log(keyword);
    return items.filter(
      item => item.itemText.indexOf(keyword) > -1
    )
  }
)
