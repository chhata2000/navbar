
import Drop from './dropdown/dropdown'
import './message.css'
import Button from './Button/button'
import Notification from './notification/notification'
import Image from './dropdown/image'
function Message(){
    return(
        <div  className='message'>
            <Drop/>
            <Button/>
            <Image/>
            <Notification/>
        </div>
    )
}

export default Message