let stardust = 0
let meteor = 0
let moon = 0
let planet = 0
let star = 0

let stardustTracker = document.getElementById("stardustTracker")

let meteorTracker = document.getElementById("meteorTracker")
let meteorCost = document.getElementById("meteorCost")

let moonTracker = document.getElementById("moonTracker")
let moonCost = document.getElementById("moonCost")

let planetTracker = document.getElementById("planetTracker")
let planetCost = document.getElementById("planetCost")

let starTracker = document.getElementById("starTracker")
let starCost = document.getElementById("starCost")

let bgMusic = new Howl(
    {
        src: ['audio/music/SpaceTuna.mp3'],
        autoplay: true,
        volume: .10,
        loop: true,
    }
)

let clickSound = new Howl(
    {
        src: ['audio/sfx/Click.mp3'],
        volume: .15,
    }
)

let meteorSound = new Howl(
    {
        src: ['audio/sfx/ShootingStar.mp3'],
        volume: .75,
    }
)

let moonSound = new Howl(
    {
        src:['audio/sfx/Moon.mp3'],
        volume: .85,
    }
)

let planetSound = new Howl(
    {
        src:['audio/sfx/Planet.mp3'],
        volume: .85,
    }
)

let starSound = new Howl(
    {
        src:['audio/sfx/Star.mp3'],
        volume: .85,
    }
)

function clicker() {
    stardust = stardust + 1
    clickSound.play()
}

function update() {

    if (stardust.toFixed(2) % 1 == 0) {
        stardustTracker.innerText = stardust.toFixed(0)
    }

    else {
        stardustTracker.innerText = stardust.toFixed(2)
    }
}

function meteorBuy() {
    let cost = (10 + (meteor ** 1.25)).toFixed(0)
    if (stardust.toFixed(0) >= cost) {
        meteor = meteor + 1
        stardust = stardust - cost
        meteorTracker.innerText = meteor
        meteorCost.innerText = (10 + (meteor ** 1.25)).toFixed(0)
        meteorSound.play()
        cost = (10 + (meteor ** 1.25)).toFixed(0)
    }

    else {
        alert("Brokie!!!!!")
    }
}

function moonBuy() {
    let cost = (20 + (moon ** 1.25)).toFixed(0)
    if (stardust.toFixed(0) >= cost) {
        moon = moon + 1
        stardust = stardust - cost
        moonTracker.innerText = moon
        moonCost.innerText = (20 + (moon ** 1.25)).toFixed(0)
        moonSound.play()
        cost = (20 + (moon ** 1.25)).toFixed(0)
    }

    else {
        alert("Brokie!!!!!")
    }
}

function planetBuy() {
    let cost = (30 + (planet ** 1.25)).toFixed(0)
    if (stardust.toFixed(0) >= cost) {
        planet = planet + 1
        stardust = stardust - 30
        planetTracker.innerText = planet
        planetCost.innerText = (30 + (planet ** 1.25 )).toFixed(0)
        planetSound.play()
        cost = (30 + (planet ** 1.25)).toFixed(0)
    }

    else {
        alert("Brokie!!!!!")
    }
}

function starBuy() {
    let cost = (40 + (star ** 1.25)).toFixed(0)
    if (stardust.toFixed(0) >= cost) {
        star = star + 1
        stardust = stardust - 40
        starTracker.innerText = star
        starCost.innerText = (40 + (star ** 1.25)).toFixed(0)
        starSound.play()
        cost = (40 + (star ** 1.25)).toFixed(0)
    }

    else {
        alert("Brokie!!!!!")
    }
}

function gameLoop() {
    stardust = stardust + (meteor * 0.2) + (moon * 0.6) + (planet * 1.2) + (star * 2.4)
    update()
    console.log(stardust)
}



setInterval(gameLoop, 1000);