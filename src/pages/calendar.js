import React from "react"
import "tachyons"

import Nav from "../components/Nav.js";

class Calendar extends React.Component {
	constructor() {
		super();
		this.state = {
			route: "current",
		}
	}

	render() {
		return(
			<div>
				<Nav/>
			</div>
		)
	}
}

export default Calendar