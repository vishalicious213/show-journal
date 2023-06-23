
export default function renderArticle(data) {
    const article = document. getElementById("article")
    console.log("TEST", data)

    article.innerHTML=`
        <p>${data.location}</p>
        <p>${data.date}</p>
        <h1>${data.name}</h1>
        <p>${data.desc}</p>
    `
}

// id: 0,
// name: "show name 1",
// location: "show location",
// map: "google map link",
// date: "2022 Jan 01",
// desc: "show desc",
// pics: ["show-1.jpg", "show-2.jpg", "show-3.jpg"]