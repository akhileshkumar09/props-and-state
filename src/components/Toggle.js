import { useState } from "react"


const Toggle = () => {
    const [isOn , setisOn] = useState(false)
    // const toggle = ()=>{
    // setisOn((prevValue)=>!prevValue)
    // }
  return (
    <div>
    <h2>Toggle</h2>
    <button onClick={()=>setisOn(prevValue=>!prevValue)}>{isOn ? 'ON' : 'OFF'}</button>
    </div>
  )
}

export default Toggle