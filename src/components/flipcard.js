import React from "react"
import './flipcard.css'

const FlipCard = ({name,data}) => {
	return(
		<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<h1>{name}</h1>
					</div>
					<div className="flip-card-back">
						<h3>{data} </h3>
					</div>
				</div>
		</div>

		)
}

export default FlipCard;