import { useState, useEffect } from "react"
const UseWindowSize = () => {
    const [height, setHeight] = useState(window.innerHeight) ;
    const [width, setWidth] = useState(window.innerWidth) ;

 
    useEffect(() => {
        const updateSize = () => {
            setHeight(window.innerHeight) ;
            setWidth(window.innerWidth) ;
        }
        
    }, []) ;
    
    return [height, width] ;

}
export default UseWindowSize ;