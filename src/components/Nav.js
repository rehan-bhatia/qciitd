import React from "react"
import { navigate } from "gatsby"

const Nav = () => {
	const onClick = (route) => {
		navigate(route)
	}
	return(
		<nav style={{fontFamily: "garamond"}} class="navbar db dt-l w-100 border-box bg-black pa3 ph5-l pv0">
		  <p class="dib dtc-l v-mid white w-100 w-25-l tc tl-l  mb0-l mb2"><h3 class="nav mt0">QC IITD</h3></p>
		  <div class="db dtc-l pa2v-mid w-100 w-75-l tc tr-l mb0-l mt2 mb2 pt2">
		  	<p onClick={()=>onClick("/")} class="nav pointer mt link white dib mr3 mt3 mr4-l hover-green">Home</p>
		  	<p onClick={()=>onClick("/team")} class=" pointer nav mt link white dib mr3 mr4-l hover-green">Team</p>
		  	<p onClick={()=>onClick("/calendar")} class="nav pointer mt link white dib mr3 mr4-l hover-green">Calendar</p>
		  	<p onClick={()=>onClick("/archives")} class="nav mt pointer link white dib mr3 mr4-l hover-green">Archives</p>
		  	<p onClick={()=>onClick("/league")} class="nav mt pointer link white dib mr3 mr4-l hover-green">League</p>
		  	<p onClick={()=>onClick("/recognitions")} class="nav mt pointer link white dib mr3 mr4-l hover-green">Recognitions</p>
		  	<p onClick={()=>onClick("/halloffame")} class="nav mt pointer link white dib mr3 mr4-l hover-green">Hall of Fame</p>
		  	<p onClick={()=>onClick("/contact")} class="nav mt pointer link white dib mr3 mr4-l hover-green">Contact Us</p>
		  </div>
		</nav>
	);
}

export default Nav;



		  

