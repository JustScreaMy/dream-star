import { useEffect, useState } from "react"
import PropTypes from "prop-types"
import DiscordMember from "./DiscordMember.jsx"

export default function DiscordWidget(props) {
    const url = props.apiUrl
    const [data, setData] = useState({
        name: "",
        instant_invite: "",
        members: [],
    })
    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(dat => {
                setData(dat)
            })
            .catch(err => console.error(err))       
    }, [])
    return (
        <>
            <a href={data.instant_invite}><button>Join Now!</button></a>
            <ul className='discord-nember-container'>
            {data.members.map(mbr => {
                    return (<li key={mbr.id} className="discord-member">
                        <DiscordMember
                            username={mbr.username}
                            status={mbr.status}
                            game={mbr.game}
                            avatar_url={mbr.avatar_url}
                        />
                    </li>)
                })}
            </ul>
        </>
    )
}

DiscordWidget.propTypes = {
    apiUrl: PropTypes.string.isRequired,
}