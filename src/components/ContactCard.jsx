import React from 'react'
import PropTypes from "prop-types"

export default function ContactCard(props) {
    const {
        role,
        username,
        imageUrl,
        discord,
    } = props
    return (
        <div className="shadow-bg">
            <h2>{role}</h2>
            {username &&
                <p>{username}</p>
            }
            {discord &&
                <p>{discord}</p>
            }
            <img src={imageUrl} alt={role+" picture"} />
        </div>
    )
    
}
ContactCard.propTypes = {
    role: PropTypes.string.isRequired,
    username: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    discord: PropTypes.string,
}