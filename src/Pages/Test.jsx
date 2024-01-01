import React from 'react'
import { useState } from 'react'
const Test = () => {
    const [first, setfirst] = useState("1");
    const [second, setsecond] = useState("string");
    const [third, setthird] = useState([1,2,3,4,5]);
    const [fourth, setfourth] = useState({head:"5",
                                         para: "lorem",
    });


  return (
   
   <div>
    {first}
    {second}

    {third.map((item) => (<p>{item}</p>))}
    {fourth.head}
    {fourth.para}
  </div>
  )
}

export default Test