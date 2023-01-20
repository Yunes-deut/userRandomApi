let cart=document.querySelector('.cart')
let randombtn=document.querySelector('.random')
let main=document.querySelector('.main')
let Img=document.querySelector('.img')

let url=" https://random-data-api.com/api/v2/users?response_type=json"

let avatar=function getAvatar(){
    fetch(url).then(respons => respons.json())
    .then(data => {
        let elementh3=document.createElement('h3')
        elementh3.innerHTML=`${data.first_name +' '+ data.last_name}`
        main.appendChild(elementh3)
        let image=document.createElement('img')
        image.src=`${data.avatar}`
        Img.appendChild(image)
        let titel=document.createElement('p')
        titel.innerHTML=`${data.employment.title}`
        main.appendChild(titel)
        let elementh4=document.createElement('h4')
        elementh4.innerHTML=`${data.address.city}`
        main.appendChild(elementh4)
        
    })
}


window.addEventListener('load',avatar)
randombtn.addEventListener('click',()=>{
    main.innerHTML="";
    Img.innerHTML=""
    avatar();
})
