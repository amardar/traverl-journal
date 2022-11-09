function Card(props) {
  return (
    <div className="card--style">
        <div>
            <img src={props.imageUrl} className="location--img" alt="first card"/>
        </div>
        <div className="card-text">
            <div className="card--location">
                <img src="/ping.svg" alt="ping"/>
                <h1>{props.location}</h1>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
            </div>
            <div className="card--specification">
                <h1>{props.title}</h1>
                <h2>{props.startDate} - {props.endDate}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    </div>
  );
}

export default Card;