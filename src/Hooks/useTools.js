import { useEffect, useState } from "react"

const useTools=()=>{
    const [tools,setTools]= useState([])
    useEffect(()=>{
        const url = "http://localhost:3000/tools.json"
      fetch(url)
      .then(res=> res.json())
      .then(data => setTools(data))
    },[])

    return [tools,setTools];

}
export default useTools