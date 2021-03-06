import React, { useState, useEffect } from 'react'
import ItemCount from "../Componentes/ItemCount"
import ItemList from './ItemList'
import Rutas from '../Routes/Rutas'


const ItemListContainer = () => {

const array = [
    {id:1,name:"Tomorrowland",stock:45,price:140,img:"",category:"Ticket"},
    {id:2,name:"EDC Las Vegas",stock:30,price:120,img:"",category:"Ticket"},
    {id:3,name:"Qdance",stock:20,price:115,img:"",category:"Ticket"},
    {id:4,name:"UMF",stock:12,price:175,img:"",category:"Ticket"}
]

const [data, setData] = useState(null)




let promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(array)
    }, 1000)

})

const resolveArray = async () => {
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
resolveArray()
}, [])

return (
        <div className="container-fluid" style={{minHeight:"100vh"}}>
            
           
           <ItemList items={data}/>
        </div>
    )
}



export default ItemListContainer