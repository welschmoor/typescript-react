
import React from "react"
import { server } from '../utils/api/server'
import { ListingsData, DeleteListingData, DeleteListingVariables } from "../utils/types"

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

const DELETE_ANZEIGE = `
  mutation DeleteListing($id: ID!) {
    deleteListing(id: $id) { 
      id
    }
  }
`

const Anzeigen = ({ title }: Props) => { //or ({title}: Props)
  const fetchDataHandler = async () => {
    const { data } = await server.fetch<ListingsData>({ query: FIRST_QUERY })
    console.log("listings", data.listings)
  }

  const deleteHandler = async () => {
    console.log("klacked")
    const { data } = await server.fetch<DeleteListingData,
      DeleteListingVariables>({
        query: DELETE_ANZEIGE,
        variables: { id: "62371e23a82f3fd69cef7db4" }
      })
    console.log("data", data)
  }

  return (
    <div>
      {title}
      <button onClick={fetchDataHandler}>
        get data
      </button>
      <button onClick={deleteHandler}>
        delete
      </button>
    </div>
  )
}



export default Anzeigen