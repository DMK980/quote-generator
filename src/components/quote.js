
export default function Quote(props){
    return (
      <div className="quote">
        <p className="quote-text"id="text">
          <i className="fa-solid fa-quote-left"></i> {props.quote}
        </p>
      </div>
    )
}

