let d1 = {
    value:0,
    hold:false
}
let d2 = {
    value:0,
    hold:false
}
let d3 = {
    value:0,
    hold:false
}
let d4 = {
    value:0,
    hold:false
}
let d5 = {
    value:0,
    hold:false
}
let d6 = {
    value:0,
    hold:false
}

let rollCount = 0

function updateTurninDOM(){
    document.querySelector('.turn-number').innerText = rollCount
}

function updateDiceInDOM(){
    document.querySelector('#dvalue1').innerText = d1.value
    document.querySelector('#dvalue2').innerText = d2.value
    document.querySelector('#dvalue3').innerText = d3.value
    document.querySelector('#dvalue4').innerText = d4.value
    document.querySelector('#dvalue5').innerText = d5.value
    document.querySelector('#dvalue6').innerText = d6.value
}

const rollButton = document.querySelector('#roll-button')

rollButton.addEventListener('click', roll)

function roll(){
    if (holdCondition === false){
        alert('Select a die to hold, ya dummy')
        return
    } else {
        if (d1.hold === false){
            d1.value = Math.ceil(Math.random()*6)
            //document.querySelector('#dvalue1').innerText = d1.value
        }
        if (d2.hold === false){
            d2.value = Math.ceil(Math.random()*6)
            //document.querySelector('#dvalue2').innerText = d2.value
        }
        if (d3.hold === false){
            d3.value = Math.ceil(Math.random()*6)
            //document.querySelector('#dvalue3').innerText = d3.value
        }
        if (d4.hold === false){
            d4.value = Math.ceil(Math.random()*6)
            //document.querySelector('#dvalue4').innerText = d4.value
        }
        if (d5.hold === false){
            d5.value = Math.ceil(Math.random()*6)
            //document.querySelector('#dvalue5').innerText = d5.value
        }
        if (d6.hold === false){
            d6.value = Math.ceil(Math.random()*6)
            //document.querySelector('#dvalue6').innerText = d6.value
        }
        
        rollCount += 1
        
        console.log(d1.value,d2.value,d3.value,d4.value,d5.value,d6.value)
        console.log(`Turn #: ${rollCount}`)
        //document.querySelector('.turn-number').innerText = rollCount
    
        holdCondition = false
    
        updateHoldCond()
        updateDiceInDOM()
        updateTurninDOM()
    }
}

const hold1button = document.querySelector('#hold1')
const hold2button = document.querySelector('#hold2')
const hold3button = document.querySelector('#hold3')
const hold4button = document.querySelector('#hold4')
const hold5button = document.querySelector('#hold5')
const hold6button = document.querySelector('#hold6')

hold1button.addEventListener('click', hold1)
hold2button.addEventListener('click', hold2)
hold3button.addEventListener('click', hold3)
hold4button.addEventListener('click', hold4)
hold5button.addEventListener('click', hold5)
hold6button.addEventListener('click', hold6)

let holdCondition = true

function updateHoldCond(){
    if (holdCondition === true){
        document.querySelector('.held-check').innerText = "Proceed"
    } else if (holdCondition === false){
        document.querySelector('.held-check').innerText = "Hold Rqd"
    }
}

updateHoldCond()


function hold1(){
    d1.hold = true
    document.querySelector('#dvalue1').style = "color: red;"
    holdCondition = true
    updateHoldCond()
}
function hold2(){
    d2.hold = true
    document.querySelector('#dvalue2').style = "color: red;"
    holdCondition = true
    updateHoldCond()
}
function hold3(){
    d3.hold = true
    document.querySelector('#dvalue3').style = "color: red;"
    holdCondition = true
    updateHoldCond()
}
function hold4(){
    d4.hold = true
    document.querySelector('#dvalue4').style = "color: red;"
    holdCondition = true
    updateHoldCond()
}
function hold5(){
    d5.hold = true
    document.querySelector('#dvalue5').style = "color: red;"
    holdCondition = true
    updateHoldCond()
}
function hold6(){
    d6.hold = true
    document.querySelector('#dvalue6').style = "color: red;"
    holdCondition = true
    updateHoldCond()
}

/*
function hold(dNum){
    if (dNum === 1){
        d1.hold = true
    }
    if (dNum === 2){
        d2.hold = true
    }
    if (dNum === 3){
        d3.hold = true
    }
    if (dNum === 4){
        d4.hold = true
    }
    if (dNum === 5){
        d5.hold = true
    }
    if (dNum === 6){
        d6.hold = true
    }

    heldCount += 1

    console.log(d1.hold, d2.hold, d3.hold, d4.hold, d5.hold, d6.hold)
}
*/

let totalScore = {
    value: 0,
    oneFour: false
}

function updateTotalScoreDOM(){
    document.querySelector('#final-score').innerText = totalScore.value
}

const scoreButton = document.querySelector('#check-score-button')
scoreButton.addEventListener('click', score)

function score(){
    if ((d1.value === 1 || d2.value === 1 || d3.value === 1 || d4.value === 1 || d5.value === 1 || d6.value === 1) && (d1.value === 4 || d2.value === 4 || d3.value === 4 || d4.value === 4 || d5.value === 4 || d6.value === 4)){
        totalScore.oneFour = true
    } else {
        alert('You are not in the door.')
        return
    }

    if (totalScore.oneFour === true){
        totalScore.value = d1.value + d2.value + d3.value + d4.value + d5.value + d6.value - 5
        console.log(totalScore.value)
        document.querySelector('#final-score').innerText = totalScore.value
    }
}

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', reset)

function reset(){
    d1.value = 0
    d1.hold = false
    document.querySelector('#dvalue1').style = "color: black;"
    d2.value = 0
    d2.hold = false
    document.querySelector('#dvalue2').style = "color: black;"
    d3.value = 0
    d3.hold = false
    document.querySelector('#dvalue3').style = "color: black;"
    d4.value = 0
    d4.hold = false
    document.querySelector('#dvalue4').style = "color: black;"
    d5.value = 0
    d5.hold = false
    document.querySelector('#dvalue5').style = "color: black;"
    d6.value = 0
    d6.hold = false
    document.querySelector('#dvalue6').style = "color: black;"

    holdCondition = true

    totalScore.value = 0
    totalScore.oneFour = false

    rollCount = 0

    updateHoldCond()
    updateDiceInDOM()
    updateTurninDOM()
    updateTotalScoreDOM()
}