import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { settingNotification, removingNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {

    const anecdotes = useSelector(({ filter, anecdotes }) => {
        filter = filter.toLowerCase()
        return anecdotes.filter(anecdote => {
            const content = anecdote.content.toLowerCase()
            return content.includes(filter)
        })
    })

    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteAnecdote(id))
        dispatch(settingNotification(`you voted '${anecdotes.find(anecdote => anecdote.id === id).content}'`))
        setTimeout(() => {
            dispatch(removingNotification())
        }, 5000)
    }

    const sorted_anecdotes = anecdotes.sort((a, b) => b.votes - a.votes)
    return (
        <>
            {sorted_anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default AnecdoteList