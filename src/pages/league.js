import React from "react"
import { graphql } from 'gatsby'
import "tachyons"


import Nav from "../components/Nav.js"
import Standings from "../components/standings.js"
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
  		<Standings title="League"/>
  		<Standings title="Individual"/>
		
		
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