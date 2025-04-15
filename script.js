const images=[
    {src:"flower1.jpg",type:"flower"},
    {src:"flower2.jpg",type:"flower"},
    {src:"vegi1.jpg",type:"vegi"},
    {src:"vegi2.jpg",type:"vegi"},
    {src:"fruit1.jpg",type:"fruit"},
    {src:"fruit2.jpg",type:"fruit"},
]

const gallery=document.getElementById("gallery");
const buton=document.querySelectorAll(".cbtn");
function show(type){
    gallery.innerHTML="";
 images.map((image)=>{
    if(type=="All" || type===image.type){
    const imgdiv=document.createElement("div");
    imgdiv.classList.add("imgcontain");
    const img =document.createElement("img");
    img.src=image.src;
    imgdiv.appendChild(img);
    gallery.appendChild(imgdiv)

    }
 })

}

buton.forEach(button1=>{
    button1.addEventListener("click",function(){
        const ctype=this.getAttribute("data-category");
        show(ctype);
    })
})



show("All");
