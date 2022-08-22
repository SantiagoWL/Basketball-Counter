let countHomeEl = 0
let countGuestEl = 0
let countHome = document.getElementById("count-home")
let countGuest = document.getElementById("count-guest")

//Home point

function increment1Home() {
    countHomeEl += 1
    countHome.textContent = countHomeEl
    gameLead()
}

function increment2Home() {
    countHomeEl += 2
    countHome.textContent = countHomeEl
    gameLead()
}

function increment3Home() {
    countHomeEl += 3
    countHome.textContent = countHomeEl
    gameLead()
}

//Guest points

function increment1Guest() {
    countGuestEl += 1
    countGuest.textContent = countGuestEl
    gameLead()
}

function increment2Guest() {
    countGuestEl += 2
    countGuest.textContent = countGuestEl
    gameLead()
}

function increment3Guest() {
    countGuestEl += 3
    countGuest.textContent = countGuestEl
    gameLead()
}

//New Game

function newGame() {
    countHomeEl = 0
    countGuestEl = 0
    
    countHome.textContent = countHomeEl
    countGuest.textContent = countGuestEl
    
    gameLead()
}

//Leader

function gameLead() {
    let spanLead = document.getElementById("game-lead")
    
    if(countHomeEl == countGuestEl) {
        spanLead.innerHTML = "EQUALS"
    } else if(countHomeEl < countGuestEl) {
        spanLead.innerHTML = "GUEST"
    } else {
        spanLead.innerHTML = "HOME"
    }
}