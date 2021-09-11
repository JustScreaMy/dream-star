import React from "react"
import elita from "../img/elita.jpg"
import { Timeline } from "react-twitter-widgets"
export default function Home() {
	return (
		<div className="container-home-con">
			<div className="container-home">
				<img
					className="elita-logo shadow-bg"
					src={elita}
					alt="majitelka serveru"
					title="Profilovka majitelky server"
				/>
				<div className="container-child">
					<h1 className="shadow-bg">DreamStar</h1>
					<div className="news">
						<Timeline
							dataSource={{
								sourceType: "profile",
								screenName: "DreamStarReal",
							}}
							options={{
								height: "325",
								theme: "dark",
								dnt: "false",
							}}
						/>
						{/*<ul>
                        novinky.map(novinka => (
                            <li key={novinka.id}>
                                <h3>{novinka.title}</h3>
                                <p>{novinka.text}</p>
                            </li>
                        ))
                    </ul>*/}
					</div>
				</div>
			</div>
		</div>
	)
}
