
fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>displayUsers(data))

function displayUsers(users){
    let htmlData = ``
    for(let u of users){
        htmlData += `<div class="col-4">

    <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title">${u.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${u.userId}</h6>
    <p class="card-text">${u.completed}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
    </div>
    </div>

            </div>`
    }
    document.querySelector("#root").innerHTML = htmlData
}