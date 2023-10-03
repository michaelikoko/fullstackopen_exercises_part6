import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../servies/anecdotes"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    replaceAnecdote(state, action) {
      return state.map(anecdote =>
        anecdote.id !== action.payload.id ? anecdote : action.payload.newObj
      )
    },

    setAnecdotes(state, action) {
      return action.payload
    },

    appendAnecdote(state, action) {
      return [
        ...state,
        action.payload
      ]
    }
  }
})


export const { replaceAnecdote, setAnecdotes, appendAnecdote } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createAnecdote(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (id) => {
  return async (dispatch, getState) => {
    const anecdotes = getState().anecdotes
    const anecdoteToChange = anecdotes.find(a => a.id === id)
    const changedAnecdote = {
      ...anecdoteToChange,
      votes: anecdoteToChange.votes + 1
    }
    const newObj = await anecdoteService.updateAnecdote(changedAnecdote, id)
    dispatch(replaceAnecdote({ id, newObj }))
  }
}


export default anecdoteSlice.reducer