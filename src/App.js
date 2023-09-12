import { useState } from 'react';
import {gsap} from 'gsap';
import './css/App.css';
import Quote from './components/quote.js'
import Author from './components/author.js'
import Links from './components/links.js'


export default function App() {
  const [quote,setquote] = useState("The quote goes here...")
  const [author,setauthor] = useState("Michael Jackson")

  async function quoteGenerator(){
    const url = 'https://quotes15.p.rapidapi.com/quotes/random/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API,
        'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
    }
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    setquote(result.content)
    setauthor(result.originator.name)
  } catch (error) {
    setquote("oops something went wrong")
  }
    const colors = ["orange","red","blue","green","brown"] 

    gsap.fromTo(".quote-text",{"opacity":0},{"opacity":1,duration:1,ease:"power1.inOut"})
    gsap.fromTo(".author-name",{"opacity":0},{"opacity":1,duration:1,ease:"power1.inOut"})
    gsap.to(":root",{"--main-color": `${colors[Math.floor(Math.random()*colors.length)]}`,duration:1.5,ease:"power3.inOut"})
  };
  
  return (
    <div className ="page-container">
      <div className="container" id="quote-box">
        <Quote quote = {quote}/>
        <Author author = {author}/>
        <Links quoteGenerator = {quoteGenerator} quote = {quote}author={author}/>
      </div>
      <div className="credits">
        <p className='credits-text'>by Derrick</p>
      </div>
    </div>
  );
}
