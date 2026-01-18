import {logs} from "../data/log"
const Log = () => {
    const filtered = logs.filter((ele) => {
                    return ele.carbon >=4 
                }) ;
    return (
        <div>
            <h2 style = {{backgroundColor : "red" , font : "1rem"}}>Activites with carbon value greater than 4</h2>
            <ul>
               {logs.filter((ele => ele.carbon >= 4)).map((ele) => {
                    return (<li key = {ele.id}>
                        {ele.activity} = {ele.carbon} Kg
                    </li>)
                }) }
            </ul>
        </div>
    )
}
export default Log ;