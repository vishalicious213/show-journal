import data from "../data"
import Show from "./Show"
import renderArticle from "../renderArticle"

export default function Gallery() {
    const article = document. getElementById("article")

    document.addEventListener("click", function(e) {
        if (e.target.dataset.id) {
            let target = data.filter(function(art) {
                return art.id === parseInt(e.target.dataset.id)
            })
            renderArticle(target[0])
        }

        if (e.target.tagName === "BUTTON") {
            const scrollID = document.querySelector("BUTTON").dataset.article
            const scrollToArticle = document.getElementById(scrollID)
            article.classList.add("hidden")
            root.classList.remove("hidden")
            scrollToArticle.scrollIntoView()
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