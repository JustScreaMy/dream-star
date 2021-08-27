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
            <div className="discord-avatar">
                <img src={avatar_url} alt={username+" avatar"} />
                <span className={status} />
            </div>
            <p>{username}</p>
            {game &&
            <p>{game.name}</p>}
        </>
    )
}

DiscordMember.propTypes = {
    username: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    game: PropTypes.object,
    avatar_url: PropTypes.string.isRequired,
}