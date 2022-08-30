const burger = document.getElementById("burgerIcon")
const navigation = document.querySelector(".navigation")
const burgerNavContainer = document.querySelector(".burgerNavContainer")
const xMark = document.querySelector(".fa-xmark")
const burgerNav = Array.from(document.querySelectorAll(".navigationBurger a"))


burger.addEventListener('click', () => {
    burgerNavContainer.style.display = 'block'
    burger.style.visibility = "hidden"

})
xMark.addEventListener('click', () => {
    burgerNavContainer.style.display = 'none'
    burger.style.visibility = "visible"
})

burgerNav.forEach(link => {
    link.addEventListener('click', function() {
        burgerNavContainer.style.display = 'none'
        burger.style.visibility = "visible"
    })
})