let id = new URLSearchParams(window.location.search).get("id");
let Name = document.querySelector("#name");
let Des = document.querySelector("#des");
let imgDiv = document.querySelector("#imgdiv");
let fileImg = document.querySelector("#file");
let Form = document.querySelector("#form");

fileImg.addEventListener("input", (e) => {
    let file = e.target.files[0]
    if (file) {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            imgDiv.src = reader.result;
        }
    }
})

Form.addEventListener("submit", (e) => {
    e.preventDefault()
    let obj = {}
    let src = fileImg.files[0]
    const reader = new FileReader()
    reader.onload = function (e) {
        obj = {
            image: e.target.result,
            name: Name.value,
            description: Des.value
        }
        axios.post("http://localhost:3000/Villa", obj)
        .then(res=>window.location="./index.html")
    }
    reader.readAsDataURL(src)
})