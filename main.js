// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => {
// // console.log(response);
// return response.json()
// })
// .then(data =>{
//     console.log(data);
//     const users = document.getElementById('users')
//     users.innerHTML += data.map(data => 
//      `<h1>fullname: ${data.name}</h1>
//      <h3 id = "name">username: ${data.username}</h3>
//      <p>email: ${data.email}</p>
//      <span>id: ${data.id}</span>`
//     ).join("");
// })
// .catch(error => {
// console.log(error)
// })
// fetch('https://jsonplaceholder.typicode.com/photos')
// .then(response => {
// console.log(response);
// return response.json()
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(error => {
// console.log(error)
// })
// fetch('https://jsonplaceholder.typicode.com/comments')
// .then(response => {
// console.log(response);
// return response.json()
// })
// .then(data =>{
//     console.log(data);
// })
// .catch(error => {
// console.log(error)
// })

function jokes(){ 
fetch('https://api.chucknorris.io/jokes/random')
.then(response => {
    return response.json()
})
.then(data => {
    console.log(data);
    const container = document.getElementById('users')
    container.innerHTML =`<h1>${data.value}</h1>
    <button id="btn">press</button>
    `
    const btn = document.getElementById('btn')
    btn.addEventListener('click' , jokes )
})
.catch(error => console.log(error))
}


const wheatherApp = (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9204675af4da182628782672cf49177b`
    fetch(url)
    .then(response => response.json())
    .then(data => {
    const container = document.getElementById('users')
    container.innerHTML =`<h1>${data.main.temp}</h1>`
    })
    .catch(error => console.log(error))
}
    submit.addEventListener('click' , (e)=>{
        e.preventDefault();
        let city = document.getElementById("city").value
        wheatherApp(city)
    })
