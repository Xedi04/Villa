let allDiv = document.querySelector(".b-divs");
let id=new URLSearchParams(window.location.search).get("id");

fetch("http://localhost:3000/Villa/"+id)
    .then(res => res.json())
    .then(data => {
            allDiv.innerHTML += `
        <div class="div3">
        <div class="b-img">
            <img src="${data.image}" alt="">
        </div>
        <div class="b-text">
            <p>${data.description}</p>
            <h4>${data.name}</h4>
            <div class="Btn">
            <button onclick="Delete(${data.id})">Delete</button>
            <button>Update</button>
            <button>Details</button>
            </div>
        </div>
    </div
        `
        
    })