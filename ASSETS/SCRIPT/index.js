let List = document.querySelector("#list-icon");
let Menu = document.querySelector(".menu");
let Close = document.querySelector("#close");

List.addEventListener("click", () => {
    Menu.style.display = "block";
})

Close.addEventListener("click", () => {
    Menu.style.display = "none";
})

let Top = document.querySelector("#topButton");
let BN = document.querySelector(".banner");


window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
        Top.style.display = 'block';
    } else {
        Top.style.display = 'none';
    }
})


Top.addEventListener("click", () => {
    BN.scrollIntoView({
        behavior: 'smooth'
    })
})

let allDiv = document.querySelector(".b-divs");
let page = 3;
let Search = document.querySelector("#search");
let filterArray = [];
let copyArray = [];


function ShowData() {
    fetch("http://localhost:3000/Villa")
        .then(res => res.json())
        .then(data => {
            copyArray = data;
           allDiv.innerHTML = "";
            filterArray = filterArray.length || Search.value ? filterArray : data;
            filterArray.slice(0, page).forEach(element => {
                allDiv.innerHTML += `
        <div class="div3">
        <div class="b-img">
            <img src="${element.image}" alt="">
        </div>
        <div class="b-text">
        <i onclick="Fav(${element.id})" class="bi bi-heart"></i>
            <p>${element.description}</p>
            <h4>${element.name}</h4>
            <div class="Btn">
            <button onclick="Delete(${element.id})">Delete</button>
            <button onclick="Update(${element.id})">Update</button>
            <button onclick="Details(${element.id})">Details</button>
            </div>
        </div>
    </div
        `
            });
        })
}

ShowData();

Search.addEventListener("input", (e) => {
    filterArray=copyArray;
    filterArray = filterArray.filter((el) =>
        el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
   ShowData()
});



function Delete(id) {
    axios.delete("http://localhost:3000/Villa/" + id)
        .then(res => window.location = "./index.html")
}

let Load = document.querySelector("#load");

Load.addEventListener("click", () => {
    page += 3;
    ShowData();
})

function Details(id) {
    window.location = `./details.html?id=${id}`
}

function Fav(id) {
    axios.get("http://localhost:3000/Villa/" + id)
        .then(res => {
            axios.post("http://localhost:3000/Favorites ", res.data)
            window.location = `./favorites.html`
        })
}

function Update(id) {
    window.location = `./update.html?id=${id}`
}
