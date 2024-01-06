let id = new URLSearchParams(window.location.search).get("id");
let Name = document.querySelector("#name");
let Des = document.querySelector("#des");
let imgDiv = document.querySelector("#imgdiv");
let fileImg = document.querySelector("#file");
let Form = document.querySelector("#form");

fetch("http://localhost:3000/Villa/" + id)
    .then(res => res.json())
    .then(data => {
        imgDiv.src = data.image,
            Name.value = data.name,
            Des.value = data.description
    })

fileImg.addEventListener("input", (e) => {
    let file = e.target.files[0]
    if (file) {
        let reader=new FileReader()
        reader.readAsDataURL(file)
        reader.onload=function(){
            imgDiv.src=reader.result
        }

    }
})

Form.addEventListener("submit", (e)=>{
    e.preventDefault()
    axios.put("http://localhost:3000/Villa/" + id, {
        image:imgDiv.src,
        name:Name.value,
        description:Des.value,
    }).then(res=>{
        window.location="./index.html"
    })
})