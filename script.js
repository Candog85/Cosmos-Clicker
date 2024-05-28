let stardust = 0
let meteor = 0
let moon = 0
let planet = 0
let star = 0

let stardustTracker = document.getElementById("stardustTracker")
let meteorTracker = document.getElementById("meteorTracker")
let moonTracker = document.getElementById("moonTracker")
let planetTracker = document.getElementById("planetTracker")
let starTracker = document.getElementById("starTracker")

function clicker() {
    stardust = stardust + 1
}

function update() {
    stardustTracker.innerText = stardust.toFixed(2)
}

function meteorBuy() {
    if (stardust >= 10) {
        meteor = meteor + 1
        stardust = stardust - 10
        meteorTracker.innerText = meteor
    }

    else {
        alert("Brokie!!!!!")
    }
}

function moonBuy() {
    if (stardust >= 20) {
        moon = moon + 1
        stardust = stardust - 20
        moonTracker.innerText = moon
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
    stardustTracker.innerText = stardust.toFixed(2)
}

setInterval(gameLoop, 1000);