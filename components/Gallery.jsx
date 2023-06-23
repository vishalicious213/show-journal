import data from "../data"
import Show from "./Show"

export default function Gallery() {
    document.addEventListener("click", function(e) {
        if (e.target.dataset.id) {
            console.log("clicked", e.target.dataset.id)
            console.log(data[e.target.dataset.id].desc)
        }
    })

    const shows = data.map(show => {
        return (
            <Show key={show.id} {...show}/>
        )
    })

    return (
        <section className="gallery container">
            {shows}
        </section>
    )
}