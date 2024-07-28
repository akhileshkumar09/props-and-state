import { useEffect, useState } from "react";


const Time = ()=>{
    
    const [Time, setTime] = useState(new Date())
    

    useEffect(()=>{
        const timeId = setInterval(()=>{
            setTime(new Date())
        })
        return ()=> clearInterval(timeId);
    },[])

    return (
      <>
        <h1>Time</h1>
        <h1>{Time.toLocaleTimeString()}</h1>
      </>
    )
}
export default Time;