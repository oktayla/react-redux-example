import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loginAction } from './redux/auth'

function Navbar() {

    const username = useSelector(state => state.auth)

    const dispatch = useDispatch()

    return (
        <div className="navbar" style={{marginBottom: 10}}>
            <h1 style={{color: '#cc8e35', marginBottom: 10}}>Hi, {username}</h1>
            <button onClick={() => {
                dispatch(loginAction())
            }}>Login</button>
        </div>
    )
}

export default Navbar