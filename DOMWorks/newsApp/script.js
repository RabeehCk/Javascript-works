const APIKEY = "e7e64b14564246b8a5ecbc678935c794"

let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`

// fetch(url).then(res=>res.json()).then(data=>displayNews(data))

getData()
async function getData(){
    let resp = await fetch(url)
    let data = await resp.json()
    displayNews(data)
}

const category = ["business","entertainment","general","health","science","sports","technology"]

function displayNews(news){
    htmlData = ``
    for(let n of news.articles){
        htmlData += `<div class="col-6">
        <div class="col">
    <div class="card">
      <img src="${n.urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${n.title}</h5>
        <p class="card-text">${n.description}</p>
      </div>
    </div>
  </div>
  </div>
`
    }

    document.querySelector("#root").innerHTML = htmlData
}

displayCategory(category)
function displayCategory(category){
    htmlData = ``
    for(let c of category){
        htmlData += `
        <button value="${c}" class="btn btn-light" onclick="fetchNewsByCategory(event)">${c}</button>`
    }
    document.querySelector("#category").innerHTML = htmlData
}

function fetchNewsByCategory(event){
    let categoryName = event.target.value
    fetch(`${url}&category=${categoryName}`).then(res=>res.json()).then(data=>displayNews(data))   
}