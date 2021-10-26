let name = "Katerin"
const data = 26_10_2021

const nav = document.querySelector (".nav")
const item = document.querySelectorAll (".item")
const batn = document.querySelector ( ".btn")

console.log ( typeof nav, typeof item)

for (let navItem of item) {
    navItem.addEventListener ("click", function () {
        console.log ('link clicked');
})
}

batn.addEventListener ( "click", function () {
    console.log ( 'btn linked');
})