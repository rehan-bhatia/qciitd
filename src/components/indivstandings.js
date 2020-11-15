import React from "react"
import { isBrowser, isMobile } from "react-device-detect";
import Leaderboard from "../components/leaderboard.js"



const IndivStandings = () => {
	let random_data = [
	    {
	      name: "Omi Baba",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 25,
	    },
	    {
	      name: "Rehan",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 20,
	    },
	    
	    {
	      name: "Rehan1",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 15,
	    },
	    {
	      name: "Omi Baba1",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 10,
	    },
	    {
	      name: "Rehan2",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 5,
	    },
	    {
	      name: "Omi Baba2",
	      url: "http://tachyons.io/img/logo.jpg",
	      points: 0,
	    },
]

	return(
	<div class={`ma3 mr4`} style={{width:"600px"}}>
		<h2 class="mt4 mb2 pa2 tc">Individual Standings</h2>
  		<div class="flex w-100">
  		  <div class="grow">
		  	<img src={random_data[1].url} class="grow br-100 ba b--gray mh2 mb2" style={{borderWidth: "5px", height:(isBrowser)?"150px":"100px", width:(isBrowser)?"150px":"100px", marginTop:"25px"}} alt="avatar"/>
		  	<p class="f5 tc mt0 pa0">{random_data[1].name}</p>
		  </div>
		  <div class="grow">
		  	<img src={random_data[0].url} class="grow br-100 ba b--gold mh2 mb2" style={{borderWidth: "5px", height:(isBrowser)?"180px":"120px", width:(isBrowser)?"180px":"120px"}} alt="avatar"/>
		  	<p class="f5 tc mt0 pa0">{random_data[0].name}</p>
		  </div>
		  <div class="grow">
		  	<img src={random_data[2].url} class="br-100 ba grow mh2 mb2" style={{borderWidth: "5px", borderColor: "#B1560F", height:(isBrowser)?"130px":"80px", width:(isBrowser)?"130px":"80px", marginTop:"35px"}} alt="avatar"/>
		  	<p class="f5 tc mt0 pa0">{random_data[2].name}</p>
		  </div>
		</div>
		<Leaderboard data={random_data}/>
	</div>
	)
}

export default IndivStandings;