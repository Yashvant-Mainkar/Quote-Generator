import { useState } from "react"
import "./RandomQuote.css"
// import twitterIcon from "../../Assets/images.png"

function RandomQuote() {

    let quotes = []
    
    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes")
        quotes = await response.json()
    }
    function random(){
        const select = quotes[Math.floor(Math.random()*quotes.length)]
        setQuote(select)
    }

    function twitter(){
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.auther} `)
    }

    const [quote,setQuote] = useState({
        text : "“Think Different.”",
        auther : "Steve Jobs"
    })
    loadQuotes()
  return (
    <div className="Container">
        <div className="quote">{quote.text}</div>
        <div>
            <div className="line"></div>
            <div className="bottom">
                <div className="author">{quote.auther}</div>
                <div className="icons">
                    <img src="/Images/thumbnail.png" onClick={()=>{random()}} alt="" />
                    <img src="/Images/images.png"onClick={()=>{twitter()}} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote
