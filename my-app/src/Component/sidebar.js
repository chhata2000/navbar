import React, { useState } from "react";
import { BsBank,BsBoombox,BsEnvelope,BsList } from "react-icons/bs";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const Sidebar = ({children}) =>{
    const [isopen, setIsopen] = useState(false)

    const toogle = () => setIsopen(!isopen)

    const menuItem =[
        {
            path: "/",
            name: "Dashboard",
            icon :<BsBank/>

        },

        {
            path: "/Message",
            name: "Message",
            icon :<BsEnvelope/>

        },
        {
            path: "/About",
            name: "About",
            icon :<BsBoombox/>

        }
    ]

    return(
        <div className="container">
        <div style={{width: isopen ? "300px" : "50px"}} className="sidebar">
        <div className="top_section">
            <h1 style={{display: isopen ? "block" : "none"}} className="logo">Logo</h1>
            <div style={{marginLeft: isopen ? "200px" : "10px"}} className="bars">
                <BsList onClick={toogle}/>

            </div>
        </div>

        {
            menuItem.map((item, index) =>(
                <NavLink to={item.path} key={index} className='link' activeclassName='active'>
                    <div className='icon'>{item.icon}</div>
                    <div style={{display: isopen ? "block" : "none"}} className='link_text'>{item.name}</div>


                </NavLink>

            ))
            }


        </div>

        <main>
        {children}

        </main>

        </div>
    )
}

export default Sidebar