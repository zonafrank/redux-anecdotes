import { useSelector } from "react-redux";

const Notification = () => {
  const message = useSelector(state => {
    return state.notification;
  });

  const style = {
    error: {
      border: '1px solid red',
      padding: 10
    },
    success: {
      border: '1px solid green',
      padding: 10
    }
  }

  if (message === null) {
    return
  }

  return (
    <div style={style[message.type]}>
      {message.text}
    </div>
  )
}

export default Notification