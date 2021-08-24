import React from 'react'
import PropTypes from "prop-types"

export default function ContactCard() {
    return (
        <div>
            
        </div>
    )
    
}
ContactCard.propTypes = {
    role: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    discord: PropTypes.string,
}