import React from "react"
import "tachyons"


import Nav from "../components/Nav.js"
import Standings from "../components/standings.js"
import "../components/style.css"

const LeaguePage = () => (
	<div>
  		<Nav/>
  		<Standings title="League"/>
  		<Standings title="Individual"/>
  	</div>
)

export default LeaguePage