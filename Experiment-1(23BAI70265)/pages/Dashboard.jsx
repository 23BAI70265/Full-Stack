import Header from "../components/Header"
import {logs} from "../data/log"
import UseWindowSize from "../Hooks/UseWindowSize";

const Dashboard = () => {
    const totalCarbon = logs.reduce((acc, ele) => {
        return acc + ele.carbon
    }, 0) ;
    // console.log(sum) ;
    const [currHeight, currWidth] = UseWindowSize() ;

    // const b = 
    // console.log(b) ;
    return (
        <div>
            <h2 style = {{backgroundColor : "green"}}>Dashboard</h2>
            <p>Total Carbon Footprint: {totalCarbon}</p>
            <ul>
                {logs.map((ele) => {
                    return (<li key = {ele.id}  style = {{color : ele.carbon >=4 ? "red" : "green"}}>
                        {ele.activity} = {ele.carbon} Kg
                    </li>)
                }) }
            </ul>
            <h1>height : {currHeight} </h1>
            <h1>Width : {currWidth}</h1>
        </div>
    )
}

export default Dashboard ;