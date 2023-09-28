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
    container.innerHTML =`<h1>the tempature in ${city} is: ${data.main.temp}C</h1>`
    })
    .catch(error => console.log(error))
}
    // submit.addEventListener('click' , (e)=>{
    //     e.preventDefault();
    //     let city = document.getElementById("city").value
    //     wheatherApp(city)
    // })

    const wheather6DaysApp = (city)=>{
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=9204675af4da182628782672cf49177b`
    fetch(url)
    .then(response => response.json())
    .then(data =>{
    const container = document.getElementById('users')
    let previousDate = null;
    container.innerHTML += `
        <h1>in ${city}</h1>`
    for (let i = 0; i < data.list.length; i++) {
        container.innerHTML += `
        <p>the temp: ${data.list[i].main.temp}</p>
        <p>the time is ${data.list[i].dt_txt.substr(11,data.list[i].length)}</p>
        <br>`
        if (data.list[i].dt_txt.substr(0,10) !== previousDate) {
            container.innerHTML += `<h1>Date: ${data.list[i].dt_txt.substr(0,10)}</h1>`;
            previousDate = data.list[i].dt_txt.substr(0,10);
    }
    }})
    .catch(error => console.log(error))
    }

    submit.addEventListener('click' , (e)=>{
        e.preventDefault();
        let city = document.getElementById("city").value
        wheather6DaysApp(city)
    })
    