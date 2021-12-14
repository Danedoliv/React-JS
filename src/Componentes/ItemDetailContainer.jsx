import React, {useEffect, useState} from 'react'
import Item from './Item'
import ItemDetail from "./ItemDetail"
import ItemList from './ItemList'


function ItemDetailContainer() {

    const array = [
        {id:1,name:"Tomorrowland",stock:45,price:140,img:"",category:"Ticket"},
        {id:2,name:"EDC Las Vegas",stock:30,price:120,img:"",category:"Ticket"},
        {id:3,name:"Qdance",stock:20,price:115,img:"",category:"Ticket"},
        {id:4,name:"UMF",stock:12,price:175,img:"",category:"Ticket"}
    ]
    const [data, setData] = useState(null)

 let promise = new Promise ((resolve) => {
     setTimeout(() => {
         resolve(array)
     }, 2000);
 })

     const getItem = async () => {
        try {
            const data = await promise;
            setData(data)
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        finally{
            console.log("Termina");
        }
    }
    
    
    useEffect(()=> {
    getItem({})
    }, [])

 return (
     <ItemDetail item={array}/>
 )
}

export default ItemDetailContainer