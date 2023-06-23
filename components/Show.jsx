export default function Show(props) {
    console.log(props)
    return (
        <div className="show">
            <img src={props.pics[0]} alt={props.name} />
            <div className="show-details">
                <p className="show-location">{props.location}</p>
                <p className="show-map">{props.map}</p>
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