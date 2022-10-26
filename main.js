const text = document.querySelector('.text')
const another1 = document.querySelector('.refresh')
const firstJoke = document.querySelector('.firstJoke')

let joke = 'test'
let jokes

async function showJoke(){
    let data = await fetch('https://api.chucknorris.io/jokes/random')
    jokes = await data.json()
    joke = jokes.value
}

showJoke().then(donnes=>{
    firstJoke.innerHTML = joke
})

another1.addEventListener('click', ()=>{
    let temp = showJoke().then(donnees=>{
        let p = document.createElement('p')
        p.innerHTML = joke
        document.body.appendChild(p)
    })
})





// fetch('https://api.chucknorris.io/jokes/random')
//     .then((data)=>data.json())
//     .then((data)=>{
//             firstJoke.innerHTML = data.value
//             console.log(data)
//     })
//
// another1.addEventListener('click', ()=>{
//     fetch('https://api.chucknorris.io/jokes/random')
//         .then((response) => response.json())
//         .then((response) => {
//             let newImg = document.createElement('div')
//             let newImgBg = response.icon_url;
//             newImgBg = 'https://via.placeholder.com/150'
//             console.log(response.icon_url)
//             newImg.style.backgroundImage = "url('" + newImgBg + "')";
//             newImg.classList.add('newImg')
//             document.body.appendChild(newImg)
//
//
//             let new1 = document.createElement('p')
//             new1.innerHTML = response.value
//             document.body.appendChild(new1)
//         });
// })
