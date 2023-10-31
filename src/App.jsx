import { useState } from "react"
import data from './data'
import SingleQuestion from './Question'

function App() {
  // eslint-disable-next-line no-unused-vars
  const [question, setQuestion] = useState(data)
  return (
    <main>
      <div className="container">
        <h3>questions and answers</h3>
        <section className="info">
          {
            question.map((question)=> {
              return(
                <SingleQuestion key={question.id} {...question} />
              )
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App
