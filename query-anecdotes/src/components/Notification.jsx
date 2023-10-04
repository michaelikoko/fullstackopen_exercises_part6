import { useContext } from "react"
import NotificationContext from "../NotificationContext"

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }

  const [notification, notificationDispatch] = useContext(NotificationContext)
  
  //if (true) return null
  if (notification === '') return <></>

  return (
    <div style={style}>
      {notification}
    </div>
  )
}

export default Notification
