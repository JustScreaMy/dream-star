import React from 'react'
import ContactCard from '../components/ContactCard.jsx'

export default function Contacts() {
    const kontakty = [
        {
            role: "Majitelka",
            nickname: "LittleElita15",
            discord: "Elita#2918",
            imageUrl: "https://media.discordapp.net/attachments/708314781228204062/879372899193061456/MENOW.png"
        },
        {
            role: "Sekretář",
            nickname: "Patko_",
            discord: "ahoj_Patko#6086",
            imageUrl: "https://media.discordapp.net/attachments/877576064581398578/879756564658008094/Yeay.png"
        },
        {
            role: "Web creator",
            nickname: "ScreaMyCZE",
            discord: "ScreaMyCZE#0016",
            imageUrl: "https://media.discordapp.net/attachments/877576064581398578/879756592478834728/7b27ca51274383507904ddf99befc8f4cf281cae_full.jpg"
        },
        {
            role: "Web creator",
            discord: "Werfmon#2390",
            imageUrl: "https://cdn.discordapp.com/avatars/440176386812936193/38a4228c64ada1bbb63c24c2e344d546.png"
        },
    ]
    return (
        <div>
            <h1>Kontakty</h1>
            {kontakty.map((kontakt, idx) => {
                return <ContactCard
                    key={idx}
                    username={kontakt.nickname}
                    role={kontakt.role}
                    discord={kontakt.discord}
                    imageUrl={kontakt.imageUrl}
                />
            })}
        </div>
    )
}
