import data from "../data"
import Show from "./Show"

export default function Gallery() {
    const shows = data.map(show => {
        return (
            <Show key={show.id} {...show}/>
        )
    })
    return (
        <section className="gallery container">
            <h2>Gallery</h2>
            {shows}
        </section>
    )
}