import React from "react"
import "tachyons"

import Nav from "../components/Nav.js";

let output;

const prevButton = () => {
	return(		
		<p class="f5 no-underline pointer br-100 black bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4">
			<svg class="w1 hover" data-icon="chevronLeft" viewBox="0 0 32 32">
				<title>chevronLeft icon</title>
				<path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
			</svg>
			<span class="pl1"></span>
		</p>
	)
}

const nextButton = () => {
	return(
		  <p class="f5 no-underline pointer black bg-animate pointer hover-bg-green br-100 hover-white inline-flex items-center pa3 ba border-box">
		    <span class="pr1"></span>
		    <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32">
		      <title>chevronRight icon</title>
		      <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
		    </svg>
		  </p>
	)
}

class Calendar extends React.Component {
	constructor() {
		super();
		this.state = {
			route: "current",
		}
	}

	onRouteChange = (route) => {
		this.setState({route: route})
	}

	render() {
		if (this.state.route == "current") {
			output = (
				<div class="flex items-center justify-center pa4">
					<p onClick = {() => this.onRouteChange("old")} class="f5 no-underline pointer br-100 black bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4">
						<svg class="w1 hover" data-icon="chevronLeft" viewBox="0 0 32 32">
							<title>chevronLeft icon</title>
							<path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
						</svg>
						<span class="pl1"></span>
					</p>
					<p class="pa2 mr4 f2 avenir green">Events this Month</p>
					<p onClick = {() => this.onRouteChange("new")} class="f5 no-underline pointer black bg-animate pointer hover-bg-green br-100 hover-white inline-flex items-center pa3 ba border-box">
					    <span class="pr1"></span>
					    <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32">
					      <title>chevronRight icon</title>
					      <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
					    </svg>
					</p>
				</div>
			)
		} else if (this.state.route == "new") {
			output = (
				<div class="flex items-center justify-center pa4">
					<p onClick = {() => this.onRouteChange("current")} class="f5 no-underline pointer br-100 black bg-animate hover-bg-green hover-white inline-flex items-center pa3 ba border-box mr4">
						<svg class="w1 hover" data-icon="chevronLeft" viewBox="0 0 32 32">
							<title>chevronLeft icon</title>
							<path d="M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"></path>
						</svg>
						<span class="pl1"></span>
					</p>
					<p class="pa2 mr4 f2 avenir green">Upcoming Events</p>
				</div>
			)
		} else if (this.state.route == "old") {
			output = (
				<div class="flex items-center justify-center pa4">
					<p class="pa2 mr4 f2 avenir green">Past Events</p>
					<p onClick = {() => this.onRouteChange("current")} class="f5 no-underline pointer black bg-animate pointer hover-bg-green br-100 hover-white inline-flex items-center pa3 ba border-box">
					    <span class="pr1"></span>
					    <svg class="w1" data-icon="chevronRight" viewBox="0 0 32 32">
					      <title>chevronRight icon</title>
					      <path d="M12 1 L26 16 L12 31 L8 27 L18 16 L8 5 z"></path>
					    </svg>
					</p>
				</div>
			)
		}

		return(
			<div>
				<Nav/>
				<div class="flex items-center justify-center pa4 pt0 mt0">
					{output}
				</div>
			</div>
		)
	}
}

export default Calendar