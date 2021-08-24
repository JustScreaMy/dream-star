import React from 'react'
import elita from "../img/elita.jpg"

export default function Home() {
    const novinky = [
        {
            "id": 0,
            "title":"haha",
            "text":"brrrrr",
        },{
            "id": 1,
            "title":"test2",
            "text":"brrrrr2",
        },{
            "id": 2,
            "title":"test3",
            "text":"brrrrr3",
        },
    ]
    return (
        <div>
            <img className='elita-logo' src={elita} alt="majitelka serveru" title="Profilovka majitelky server" />
            <div>
                <h1>DreamStar</h1>
                <ul>
                    {novinky.map(novinka => (
                        <li key={novinka.id}>
                            <h3>{novinka.title}</h3>
                            <p>{novinka.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
