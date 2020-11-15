import React from "react"
import { graphql } from 'gatsby'
import "tachyons"



import Nav from "../components/Nav.js"
import LeagueStandings from "../components/leaguestandings.js"
import IndivStandings from "../components/indivstandings.js"
import "../components/league.css"

const LeaguePage = ({data}) => (
	<div>
  		<Nav/>
		
		{data.allGoogleSpreadsheetTeam.edges.map((item)=>(
			<div>
				{item.node.captain}
			</div>					
			)
		)}
		<div class = "w-100 flex">
			<img src = "https://i.ibb.co/L6Lq6dW/winner1.png" style={{width: "201.9px", height: "162.3px"}}/>
			<h1 class = "pa2 ml3 avenir navy f-subheadline">Leaderboard</h1>
		</div>
		<div class = "w-100 flex">
  			<LeagueStandings/>
  			<IndivStandings/>
  		</div>
		
		
  	</div>
)

export const query = graphql`
query HomePageQuery {
    allGoogleSpreadsheetTeam {
		edges {
		  node {
			id
			position
			team
			points
			captain
		  }
		}
	  }
  }
`

export default LeaguePage