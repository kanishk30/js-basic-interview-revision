const divElement = document.querySelectorAll("#hello");
// const divElement = document.getElementById("hello");
console.log(divElement);
// divElement[0].style.color = 'red';
// divElement[1].style.color = 'red';
// divElement[2].style.color = 'red';
// divElement[3].style.color = 'red';
divElement.forEach((element) => {
    element.style.color = 'green'
})

const btnEl = document.querySelector("button")
// const btnEl = document.getElementsByClassName('btn-class')[0]
console.log(btnEl)
btnEl.addEventListener('click', function () {
    // api call..
    divElement.forEach((element) => {
        element.style.color = 'blue'
    })
})

// btnEl.addEventListener('ondblclick', function () {
//     // api call..
//     divElement.forEach((element) => {
//         element.style.backgroundColor = 'yellow'
//     })
// })