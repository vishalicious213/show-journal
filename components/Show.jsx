import pin from "../public/pin.png"

export default function Show(props) {
    return (
        <div className="show" id={props.id}>
            <div 
                className="show-image" 
                data-id={props.id} 
                style={{backgroundImage: `url(/shows/${props.pics[0]})`}}>
                <span className="click-msg" data-id={props.id} >Click for more</span>
            </div>
            <div className="show-details">
                <p className="show-location"><a href={props.map} target="blank"><img src={pin} /></a> {props.location}</p>
                <h2 className="show-name">{props.name}</h2>
                <p className="show-date">{props.date}</p>
                <p className="show-desc">{props.desc}</p>
            </div>
        </div>
    )
}