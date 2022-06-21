import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY

function App() {
  useEffect(()=>{
    client.query()
  }, [])

  return (
    <h1 className="text-5xl font-bold text-violet-500">Hello World</h1>
  )
}

export default App
