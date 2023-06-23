import data from "../data"
import Show from "./Show"

export default function Gallery() {
    console.log(data[0])
    return (
        <section className="gallery container">
            <h2>Gallery</h2>
            <Show {...data[0]} />
        </section>
    )
}