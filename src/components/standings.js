import React from "react"

import Leaderboard from "../components/leaderboard.js"

const Standings = ({title}) => (
	<div>
		<h2 class="mt4 mb2 pa2 tc">{title} Standings</h2>
  		<div class="flex w-100">
		  <img src="http://tachyons.io/img/logo.jpg" class="grow br-100 ba b--gray mh2" style={{borderWidth: "5px", height:"150px", width:"150px"}} alt="avatar"/>
		  <img src="http://tachyons.io/img/logo.jpg" class="grow br-100 ba b--gold mh2 " style={{borderWidth: "5px", height:"180px", width:"180px"}} alt="avatar"/>
		  <img src="http://tachyons.io/img/logo.jpg" class="grow br-100 ba mh2" style={{borderWidth: "5px", borderColor: "#B1560F", height:"130px", width:"130px"}} alt="avatar"/>
		</div>
		<Leaderboard title = {title} />
	</div>

)

export default Standings;