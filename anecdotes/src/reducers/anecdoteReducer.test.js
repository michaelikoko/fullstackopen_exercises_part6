import reducer from "./anecdoteReducer"
import deepFreeze from "deep-freeze"

describe('anecdoteReducer', () => {
    const initialState = [
        {
            content: 'If it hurts, do it more often',
            id: 1,
            votes: 0
        },
        {
            content: 'Adding manpower to a late software project makes it later!',
            id: 2,
            votes: 0
        },
        {
            content: 'Premature optimization is the root of all evil.',
            id: 3,
            votes: 0
        }
    ]

    test('VOTE is implemented', () => {
        const state = initialState
        const action = {
            type: 'anecdotes/voteAnecdote',
            payload: 2 
        }

        deepFreeze(state)
        const newState = reducer(state, action)

        expect(newState).toHaveLength(3)
        expect(newState[1]).toEqual({
            ...state[1],
            votes: 1         
        })
    })

    test('NEW ANECDOTE is implemented', () => {
        const state = initialState
        const action = {
            type: 'anecdotes/createAnecdote',
            payload: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        }

        deepFreeze(state)
        const newState = reducer(state, action)
        expect(newState).toHaveLength(4)
        expect(newState).toContainEqual(action.payload)
    })
})