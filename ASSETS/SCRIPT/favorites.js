let allDiv = document.querySelector(".b-divs");
let id=new URLSearchParams(window.location.search).get("id");

fetch("http://localhost:3000/Favorites")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach(element => {
            allDiv.innerHTML += `
        <div class="div3">
        <div class="b-img">
            <img src="${element.image}" alt="">
        </div>
        <div class="b-text">
            <p>${element.description}</p>
            <h4>${element.name}</h4>
            <div class="Btn">
            <button onclick="Delete(${element.id})">Delete</button>
            </div>
        </div>
    </div
        `
        });
    })

    function Delete(id){
        axios.delete("http://localhost:3000/Favorites/"+id)
        .then(res=>window.location="./favorites.html")
    }