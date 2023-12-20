import React from 'react'
import "./NotFound.scss"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className='notfound'>
                <img src="https://i1.wp.com/cdn.dribbble.com/users/547471/screenshots/3063720/not_found.gif?ssl=1" alt="img" className='notfound__img' />
            </div>
            <div className="buttons">
                <button className="buttons__back" type="button" onClick={() => navigate(-1)}>Back</button>
                <button className="buttons__home" type="button" onClick={() => navigate("/")}>Home</button>
            </div>
        </>
    )
}

export default NotFound