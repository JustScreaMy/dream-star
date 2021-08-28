import React from 'react'
import PropTypes from "prop-types"

export default function DiscordMember(props) {
    const {
        username,
        status,
        game,
        avatar_url
    } = props;

    return (
        <>
            <div className={status + " discord-avatar"}>
                <img src={avatar_url} alt={username + " avatar"} />
            </div >
            <div className='title'>
                <h2>{username}</h2>
                {game &&
                <p>{game.name}</p>}
            </div>
        </>
    )
}

DiscordMember.propTypes = {
    username: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    game: PropTypes.object,
    avatar_url: PropTypes.string.isRequired,
}