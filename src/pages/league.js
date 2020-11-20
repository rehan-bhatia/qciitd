import React from "react"
import { graphql } from 'gatsby'
import "tachyons"
import { isBrowser, isMobile, BrowserView, MobileView } from "react-device-detect";

import MobileBoard from "../components/mobileboard.js"
import Nav from "../components/Nav.js"
import LeagueStandings from "../components/leaguestandings.js"
import IndivStandings from "../components/indivstandings.js"
import "../components/league.css"

const LeaguePage = ({data}) => (
	<div>
  		<Nav/>
		
		{/* {data.allGoogleSpreadsheetTeam.edges.sort((a, b) => (a.node.position > b.node.position) ? 1 : -1)}
		
		{data.allGoogleSpreadsheetIndividual.edges.sort((a, b) => (a.node.position > b.node.position) ? 1 : -1)}
		
		{data.allGoogleSpreadsheetTeam.edges.map((item)=>(
			<div>
				{item.node.position} - {item.node.team} - {item.node.captain} , {item.node.points}
			</div>					
			)
		)}
		<br></br>
		{data.allGoogleSpreadsheetIndividual.edges.filter(item => item.node.position<7).map((item)=>(
			
			<div>
				{item.node.position} - {item.node.name} - {item.node.total}
			</div>					
			)
		)} */}
		
		{/* {console.log(data.allGoogleSpreadsheetTeam.edges.sort((a, b) => (a.node.position > b.node.position) ? 1 : -1))}

		{data.allGoogleSpreadsheetTeam.edges.map((item)=>(
			<div>
				{item.node.captain} - {item.node.position}
			</div>					
			)
		)} */}
		<div class = "w-100 flex">
			<img src = "https://i.ibb.co/L6Lq6dW/winner1.png" style={{width: "201.9px", height: "162.3px"}}/>
			<h1 class = {`pa2 ml3 avenir navy ${(isBrowser) ? "f-subheadline" : "f1"}`}>Leaderboard</h1>
		</div>
		<BrowserView>
			<div class = "w-100 flex">
	  			<LeagueStandings data={data.allGoogleSpreadsheetTeam.edges.sort((a, b) => (a.node.position > b.node.position) ? 1 : -1)} />
	  			<IndivStandings data={data.allGoogleSpreadsheetIndividual.edges.sort((a, b) => (a.node.position > b.node.position) ? 1 : -1).filter(item => item.node.position<=6)}/>
	  		</div>
  		</BrowserView>
  		<MobileView>
  			<MobileBoard data_league = {data.allGoogleSpreadsheetTeam.edges.sort((a, b) => (a.node.position > b.node.position) ? 1 : -1)} data_indiv = {data.allGoogleSpreadsheetIndividual.edges.sort((a, b) => (a.node.position > b.node.position) ? 1 : -1).filter(item => item.node.position<=6)} />
  		</MobileView>
		
		
  	</div>
)

export const query = graphql`
query HomePageQuery {
	allGoogleSpreadsheetTeam {
	  edges {
		node {
		  id
		  points
		  captain
		  position
		  name
		}
	  }
	}
	allGoogleSpreadsheetIndividual {
	  edges {
		node {
		  name
		  team
		  position
		  points
		}
	  }
	}
  }
  
`

export default LeaguePage