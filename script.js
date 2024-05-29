let stardust = 0
let meteor = 0
let moon = 0
let planet = 0
let star = 0

let stardustTracker = document.getElementById("stardustTracker")

let meteorTracker = document.getElementById("meteorTracker")
let meteorCost = document.getElementById("meteorCost")

let moonTracker = document.getElementById("moonTracker")
let moonCost = ""

let planetTracker = document.getElementById("planetTracker")
let planetCost = ""

let starTracker = document.getElementById("starTracker")
let starCost = ""

function clicker() {
    stardust = stardust + 1
}

function update() {
    if ((stardust % 1) == 0) {
        stardust = stardust.toFixed(0)
    }
    else {
        stardust = stardust.toFixed(2)
    }
    stardustTracker.innerText = stardust
}

function meteorBuy() {
    let cost = (10 + (meteor ** 1.25))
    if (stardust >= cost) {
        meteor = meteor + 1
        stardust = stardust - cost
        meteorTracker.innerText = meteor
        meteorCost.innerText = (10 + (meteor ** 1.25))
    }

    else {
        alert("Brokie!!!!!")
    }
}

function moonBuy() {
    let cost = 20 + (moon ** 1.25)
    if (stardust >= cost) {
        moon = moon + 1
        stardust = stardust - 20
        moonTracker.innerText = moon
        moonCost.innerText = 20 + (moon ** 1.25)

    }

    else {
        alert("Brokie!!!!!")
    }
}

function planetBuy() {
    if (stardust >= 10) {
        planet = planet + 1
        stardust = stardust - 30
        planetTracker.innerText = planet
    }

    else {
        alert("Brokie!!!!!")
    }
}

function starBuy() {
    if (stardust >= 10) {
        star = star + 1
        stardust = stardust - 40
        starTracker.innerText = star
    }

    else {
        alert("Brokie!!!!!")
    }
}

function gameLoop() {
    stardust = stardust + (meteor * 0.2) + (moon * 0.6) + (planet * 1.2) + (star * 2.4)
    stardustTracker.innerText = stardust
}

setInterval(gameLoop, 1000);