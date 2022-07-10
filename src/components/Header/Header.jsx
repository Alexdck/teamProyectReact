import React from 'react';
import "./Header.scss";
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { logOut, userData } from '../../containers/User/userSlice';


const Header = () => {

    const identification = useSelector(userData)

    let navigate = useNavigate()
    const dispatch = useDispatch()

    const travel = (destiny) => {
        navigate(destiny)
    }

    if (!identification?.token) {

        return (
            
            <div className='nav1'>
                <div className='netflixContainer'>
            <img
              src="/logo.sv../../../public/img/netflixpobre.jpeg"
              width="50"
              height="50"
              className="d-inline-block align-top logo"
              alt="Netflix Pobre"
            />
          </div>
                <div className="nav1First">
                    <div className="nav" onClick={() => travel("/")}>Home</div>
                    <div className="nav" onClick={() => travel("/films")}>Films</div>
                </div>
            
                <div className="nav1Second">
                    <div className="nav" onClick={() => travel("/users/login")}>Login</div>
                    <div className="nav" onClick={() => travel("/users/adduser")}>Register</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='nav2'>
                <div className='nav2First'>
                    <div className="nav" onClick={() => travel("/")}>Home</div>
                    <div className="nav" onClick={() => travel("/films")}>Films</div>
                    <div className="nav" onClick={() => travel("/films/addfilm")}>Add Film</div>
                </div>
                <div className='netflixContainer'>
                    <img className='netflix' src="../../../public/img/netflixpobre.jpeg"
                        width="50"
                        height="50"
                        alt="Netflix Pobre" />
                </div>
                <div className="nav2Second">
                    <div className="nav userName" to="/">{identification?.user.name}</div>
                    <div className="nav" onClick={() => dispatch(logOut())} >Logout</div>
                </div>
            </div>
        )
    }
}

export default Header
