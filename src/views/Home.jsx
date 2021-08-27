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
        {
            "id": 3,
            "title":"test3",
            "text":"brrrrr3",
        },
        {
            "id": 4,
            "title":"test3",
            "text":"brrrrr3",
        },
        {
            "id": 5,
            "title":"test3",
            "text":"brrrrr3",
        },
        // {
        //     "id": 6,
        //     "title":"test3",
        //     "text":"brrrrr3",
        // },
    ]
    return (
        <div className='container-home-con'>

        <div className='container-home'>
            <img className='elita-logo shadow-bg' src={elita} alt="majitelka serveru" title="Profilovka majitelky server" />
            <div className='container-child'>
                    <h1 className='shadow-bg'>DreamStar</h1>
                <div className='news shadow-bg'>
                        <h2>Novinky</h2>
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
            </div>
        </div>
    )
}