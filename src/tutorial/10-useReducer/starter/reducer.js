import { data } from '../../../data'
import { REMOVE_ITEM, CLEAR_LIST, RESET_LIST } from './actions'

const reducer = (state, action) => {
  const { type, payload } = action
  if (type === REMOVE_ITEM) {
    let newPeoples = state.peoples.filter((person) => person.id !== payload.id)
    console.log('inside remo item', payload.id)
    return { ...state, peoples: newPeoples }
  }

  if (type === CLEAR_LIST) {
    return { ...state, peoples: [] }
  }

  if (type === RESET_LIST) {
    return { ...state, peoples: data }
  }

  throw new Error('not matching type')
}

export default reducer
