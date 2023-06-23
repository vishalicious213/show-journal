import pin from "../public/pin.png"

export default function Show(props) {
    return (
        <div className="show">
            <div className="show-image" style={{backgroundImage: `url(${props.pics[0]})`}}></div>
            <div className="show-details">
                <p className="show-location"><img src={pin} /> {props.location}</p>
                <p className="show-map"><a href={props.map} target="blank">View on Google Maps</a></p>
                <h2 className="show-name">{props.name}</h2>
                <p className="show-date">{props.date}</p>
                <p className="show-desc">{props.desc}</p>
            </div>
        </div>
    )
}

// id: 0,
// name: "show name 1",
// location: "show location",
// map: "google map link",
// date: "2022 Jan 01",
// desc: "show desc",
// pics: ["show-1.jpg", "show-2.jpg", "show-3.jpg"]