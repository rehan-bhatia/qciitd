import React from "react"
import { graphql } from 'gatsby'
import "tachyons"


import Nav from "../components/Nav.js"
import LeagueStandings from "../components/leaguestandings.js"
import IndivStandings from "../components/indivstandings.js"
import "../components/style.css"

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