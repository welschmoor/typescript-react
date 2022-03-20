
import React from "react"
import { server } from '../utils/api/server'

interface Props {
  title: string;

}

const FIRST_QUERY = `
  query Listings {
    listings {
      title
      id
      price
    }
  }
`

const Anzeigen = ({ title }: Props) => { //or ({title}: Props)
  const fetchDataHandler = async () => {
    const data = await server.fetch({ query: FIRST_QUERY })
    console.log("data", data)
  }
  return (
    <div>
      {title}
      <button onClick={fetchDataHandler}> 
        get data
      </button>
    </div>
  )
}



export default Anzeigen