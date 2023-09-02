
export default function Links(props){
  return (
    <div className="links">
      <div className="social-links">
        <a 
        href = {'https://twitter.com/intent/tweet/?text='+encodeURIComponent(props.quote+'--'+props.author+" #quotes")}
        id="tweet-quote"
        target="_blank"
        rel="noreferrer">
          <i className="fa-brands fa-square-twitter"/>
        </a>
        <a href = "tumblr.com">
          <i className="fa-brands fa-square-tumblr"/>
        </a>
      </div>
      <button 
      className="new-quote-button"id="new-quote"
      onClick={props.quoteGenerator}>New quote</button>
    </div>
  )
}
