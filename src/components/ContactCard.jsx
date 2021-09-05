import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
const Li = styled.li`
	color: #fff;
	margin: 1.5rem;
	width: 35rem;
	display: flex;
	@media screen and (max-width: 300px) and (min-width: 0) {
		display: block;
		width: 300px;
	}
	justify-content: space-between;
	box-shadow: 2px 2px 20px 5px #2929292b;
`
const H2 = styled.h2`
	font-size: 3vw;
	margin-bottom: .8rem;
	width: 100%;
	
`
const Img = styled.img`
	width: 10rem;
	height: auto;
	@media screen and (max-width: 300px) and (min-width: 0) {
		display: none;
	}
`
const Div = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
`
const P = styled.p`
	font-size: 2vw;
`
export default function ContactCard({ role, username, imageUrl, discord }) {
	return (
		<Li className="shadow-bg">
			<Div>
				<H2>{role}</H2>
				{username && <P>{username}</P>}
				{discord && <P>{discord}</P>}
			</Div>
			<Img src={imageUrl} alt={role + " picture"} />
		</Li>
	)
}
ContactCard.propTypes = {
	role: PropTypes.string.isRequired,
	username: PropTypes.string,
	imageUrl: PropTypes.string.isRequired,
	discord: PropTypes.string,
}

