import React, { useReducer } from 'react'
import { REMOVE_ITEM, CLEAR_LIST, RESET_LIST } from './actions'
import { data } from '../../../data'
import reducer from './reducer.js'

const defaultState = { peoples: data, isloading: false, isModelOPen: false }

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  }

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }
  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }

  return (
    <div>
      {state.peoples.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {state.peoples.length ? (
        <>
          <button
            className='btn'
            style={{ marginTop: '2rem' }}
            onClick={() => clearList()}
          >
            clear items
          </button>
        </>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={() => resetList()}
        >
          reset
        </button>
      )}
    </div>
  )
}

export default ReducerBasics
