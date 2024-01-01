import React, { useState } from 'react'
import { useEffect } from 'react'

const Catpage = () => {
const [data,setdata]= useState([])

useEffect(() => {
    fetch('https://65912fb88cbbf8afa96bf362.mockapi.io/cats')
    .then((res) => res.json())
    .then((res2) => {
        console.log(res2)
        setdata(res2)
    })
})


  return (
    <div>
        {data.map((items) => <div className='flex flex-col'><div>{items.name}</div>
        <div><img src={items.img}/></div></div>)}
    </div>
  )
}

export default Catpage