import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ReactComponent as Message } from '../../svg/nontrinkets/message-3.svg'
import { ReactComponent as Gesture } from '../../svg/nontrinkets/gesture.svg'

const Inspiration = ()  => {

    const notify = () => {
      fetch("https://type.fit/api/quotes")
        .then((r) => r.json())
        .then((data) => {
          let quote = data[Math.floor(Math.random() * data.length)]
          return toast.dark(`${quote.text} ~ ${quote.author}`)
        })
    }
    return (
      <div className="inspiration-div">
        <Message className="message-svg" onClick={notify} label="Inspiration" />
        <br/>
        <Gesture />
        <ToastContainer
          position="top-right"
          autoClose={10000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
        />
        <p>click</p>
      </div>
    )
}

export default Inspiration