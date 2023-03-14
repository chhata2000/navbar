import { BsBell } from "react-icons/bs";
import './notification.css'

function Notification(){
    return(
        <div className="notification">
            <BsBell className="icon-notifcation"/>
            <div className="counter">
                
            </div>

        </div>
    )
}

export default Notification