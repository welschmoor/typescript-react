
import React, {useState} from "react"
import { server } from '../utils/api/server'
import { ListingsData, DeleteListingData, DeleteListingVariables, Listing } from "../utils/types"
import AnzeigenSkeleton from './AnzeigenSkeleton'

//style
import List from "antd/es/list"
import Avatar from "antd/es/avatar"
import Button from "antd/es/button"
import "./anzeigen.css"

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
  const [anzeigen, setAnzeigen] = useState<Listing[] >([])

  const fetchDataHandler = async () => {
    const { data } = await server.fetch<ListingsData>({ query: FIRST_QUERY })
    console.log("listings", data?.listings)
    setAnzeigen(data?.listings)
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
    <div className="listings">
      {title}
      <button onClick={fetchDataHandler}>
        get data
      </button>
      <button onClick={deleteHandler}>
        delete
      </button>
      {!anzeigen?.length && <AnzeigenSkeleton title={"kek"}/>}


      <List 
        itemLayout="horizontal"
        dataSource={anzeigen}
        renderItem={(listing) => (
          <List.Item actions={[<Button type="primary" onClick={deleteHandler}>Delete</Button>]}>
            <List.Item.Meta 
            title={listing.title} 
            description={listing.price}
            avatar={<Avatar src={listing.image} shape="square" size={48} />}
            
            />
          </List.Item>
        )}
      />
    </div>
  )
}



export default Anzeigen