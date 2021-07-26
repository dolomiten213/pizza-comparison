"use strict"

let options = document.querySelectorAll(".option")

let firstPizzaCount = new InputPizzaCountForm("number_of_pizzas")
let secondPizzaCount = new InputPizzaCountForm("number_of_pizzas")

let firstPizzaDiameter = new InputPizzaDiameterForm("pizza_diameter")
let secondPizzaDiameter = new InputPizzaDiameterForm("pizza_diameter")

document.querySelector(".compare_button").onclick = compare;

setInterval(async () => await launchPizza(), 400)

function compare() {
    if (document.querySelector(".compare_button").innerHTML == "Reset") {
        resetWinner();
        document.querySelector(".compare_button").innerHTML = "COMPARE!!1!"
        return
    }

    let count1 = firstPizzaCount.value
    let r1 = firstPizzaDiameter.value / 2
    let measure1 = firstPizzaDiameter.measure

    let count2 = secondPizzaCount.value
    let r2 = secondPizzaDiameter.value / 2
    let measure2 = secondPizzaDiameter.measure


    if (measure1 != measure2) {   
        r2 = measure2 == "inch" ? r2 * 2.54 : r2 / 2.54
    }

    let st = count1 * Math.PI * (r1 * r1)
    let nd = count2 * Math.PI * (r2 * r2)
    console.log(st, nd, measure1)

    if (st > nd) {
        document.querySelectorAll(".option")[0].classList.add("winner_option")
        document.querySelectorAll(".option")[1].classList.add("loser_option")
    } else if (st < nd) {
        document.querySelectorAll(".option")[1].classList.add("winner_option")
        document.querySelectorAll(".option")[0].classList.add("loser_option")
    } else {
        document.querySelectorAll(".option")[0].classList.add("winner_option")
        document.querySelectorAll(".option")[1].classList.add("winner_option")
    }
    document.querySelector(".compare_button").innerHTML = "Reset";

}

function resetWinner() {
    options[0].classList.remove("winner_option")
    options[1].classList.remove("winner_option")
    options[0].classList.remove("loser_option")
    options[1].classList.remove("loser_option")
}

async function launchPizza() {
    let pizza = document.createElement("div")
    pizza.classList.add("pizza")
    pizza.style.left = Math.random() * 75 + "%"
    document.querySelector("body").appendChild(pizza)
    setTimeout(() => document.querySelector("body").removeChild(pizza), 6000)

}
