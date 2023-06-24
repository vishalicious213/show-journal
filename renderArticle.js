
export default function renderArticle(data) {
    const article = document.getElementById("article")
    const pics = data.pics.map(pic => `<img class="article-img" src=/shows/${pic} alt=${data.name} />`).join("")
    article.classList.remove("hidden")
    root.classList.add("hidden")
    // console.log(data)

    article.innerHTML=`
        <button class="article-button" data-article=${data.id}>Close article</button>
        <div id="article-pics" class="article-pics">${pics}</div>
        <h2 class="article-name">${data.name}</h2>
        <div class="article-details">
            <p class="article-location">${data.location}</p>
            <p class="article-date">${data.date}</p>
        </div>
        <div class="article-desc">${data.desc}</div>
        <div class="content-container">${data.full}</div>
    `
}