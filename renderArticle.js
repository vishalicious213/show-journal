
export default function renderArticle(data) {
    const article = document.getElementById("article")
    const pics = data.pics.map(pic => `<img class="article-img" src=${pic} alt=${data.name} />`).join("")
    article.classList.remove("hidden")
    root.classList.add("hidden")

    article.innerHTML=`
        <button class="article-button">Close article</button>
        <div id="article-pics" class="article-pics">${pics}</div>
        <h2 class="article-name">${data.name}</h2>
        <div class="article-details">
            <p class="article-location">${data.location}</p>
            <p class="article-date">${data.date}</p>
        </div
        <div class="article-desc">${data.desc}</div>
    `
}

// id: 0,
// name: "show name 1",
// location: "show location",
// map: "google map link",
// date: "2022 Jan 01",
// desc: "show desc",
// pics: ["show-1.jpg", "show-2.jpg", "show-3.jpg"]