import React from "react"
import "tachyons"

const Leaderboard = ({data}) => {
  let title = "title"
  console.log(data)
  let random_data = data
  const images = ["https://i.ibb.co/J7BtmhZ/gold-Medal.jpg", "https://i.ibb.co/Gp2jH7T/silver-Medal.jpg", "https://i.ibb.co/X5sQDD7/bronze-Medal.jpg","https://i.ibb.co/zsGRrtt/Screenshot-2020-11-13-at-6-24-16-PM.png"]
  let length = random_data.length

  const Ranking = ({data}) => {
    let rank = random_data.indexOf(data)
    let x;
    if (rank < length/6) {
      x = 0
    } else if (rank < length/3) {
      x = 1
    } else if (rank < length/2) {
      x = 2
    } else {
      x = 3
    }

    return(
      <article class="dt w-100 bb b--black-05 pb0 mt2" href="#0">
          <div class="dtc w2 w3-ns v-mid">
            <img src={data.url} class="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"/>
          </div>
          <div class="ph3 mb0">
            <h2 class="f4 pt2 mb0"> {data.name} </h2>
            <p class="f5 pt1"> Points: {data.points}</p>
          </div>
          <div class="dtc w2 w3-ns v-mid">
            <img src={images[x]} class="db br-100 w2 w3-ns h2 h3-ns" style={{width:"50px", height:"50px"}}/>
          </div>
      </article>
    )
  }

  let output = random_data.map((item) => <Ranking data = {item}/>)

  return(
      <main class="mw6 center mt4">
       {output} 
      </main>
  )
}

export default Leaderboard