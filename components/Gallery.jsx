import data from "../data"
import Show from "./Show"
import renderArticle from "../renderArticle"

export default function Gallery() {
    const article = document. getElementById("article")

    document.addEventListener("click", function(e) {
        if (e.target.dataset.id) {
            article.innerText="ARTICLE"
            renderArticle(data[e.target.dataset.id])
        }

        if (e.target.tagName === "BUTTON") {
            article.classList.add("hidden")
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