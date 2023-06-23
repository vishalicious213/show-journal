import data from "../data"
import Show from "./Show"
import test from "../test"

export default function Gallery() {
    const article = document. getElementById("article")
    console.log(article)

    document.addEventListener("click", function(e) {
        if (e.target.dataset.id) {
            console.log("clicked", e.target.dataset.id)
            console.log(data[e.target.dataset.id].desc)
            article.innerText="ARTICLE"
            test(data[e.target.dataset.id])
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