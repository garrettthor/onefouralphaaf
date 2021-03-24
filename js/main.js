//Define dice objects with value and hold properties.

let d1 = {
    value:0,
    hold:false,
    trueHold: false,
    trueCount: false,
}
let d2 = {
    value:0,
    hold:false,
    trueHold: false,
    trueCount: false,
}
let d3 = {
    value:0,
    hold:false,
    trueHold: false,
    trueCount: false,
}
let d4 = {
    value:0,
    hold:false,
    trueHold: false,
    trueCount: false,
}
let d5 = {
    value:0,
    hold:false,
    trueHold: false,
    trueCount: false,
}
let d6 = {
    value:0,
    hold:false,
    trueHold: false,
    trueCount: false,
}

//This rollCoutn variable is basically the turn counnt.
let rollCount = 0

//This will update the turn number displayed in the DOM
function updateTurninDOM(){
    document.querySelector('.turn-number').innerText = rollCount
}

//Here's the Roll button, its event listener, and the roll() function
const rollButton = document.querySelector('#roll-button')

rollButton.addEventListener('click', roll)

let holdCondition = true

function roll(){
    if (gameOver === true) {
        alert('Game over, jabroni.  Reset to play again.')
        return
    } else if (d1.hold === true && d2.hold === true && d3.hold === true && d4.hold === true && d5.hold === true && d6.hold === true){
        alert('All dice held.  Finalize score, or get out the door.')
        return
    }
    if (holdCondition === false){
        alert('Select a die to hold, ya dummy.')
        return
    } else {
        if (d1.hold === false){
            d1.value = Math.ceil(Math.random()*6)
        } else if (d1.hold === true){
            d1.trueHold = true
        }
        if (d2.hold === false){
            d2.value = Math.ceil(Math.random()*6)
        } else if (d2.hold === true){
            d2.trueHold = true
        }
        if (d3.hold === false){
            d3.value = Math.ceil(Math.random()*6)
        } else if (d3.hold === true){
            d3.trueHold = true
        }
        if (d4.hold === false){
            d4.value = Math.ceil(Math.random()*6)
        } else if (d4.hold === true){
            d4.trueHold = true
        }
        if (d5.hold === false){
            d5.value = Math.ceil(Math.random()*6)
        } else if (d5.hold === true){
            d5.trueHold = true
        }
        if (d6.hold === false){
            d6.value = Math.ceil(Math.random()*6)
        } else if (d6.hold === true){
            d6.trueHold = true
        }
        
        rollCount += 1
        
        console.log(d1.value,d2.value,d3.value,d4.value,d5.value,d6.value)
        console.log(`Turn #: ${rollCount}`)
    
        holdCondition = false
        heldRN = 0
        updateHeldRNinDOM()
    
        updateHoldCond()
        updateDiceInDOM()
        updateTurninDOM()
    }
}

function updateHoldCondInDOM(){
    if (holdCondition === true){
        document.querySelector('.held-check').innerText = "Proceed"
    } else if (holdCondition === false){
        document.querySelector('.held-check').innerText = "Rqd"
    }
}

let trueHoldCount = 0


function updateDiceInDOM(){
    if (d1.hold === false){
        document.querySelector('#dvalue1').src = 'img/dice-' + d1.value + '.png'
    }
    if (d2.hold === false){
        document.querySelector('#dvalue2').src = 'img/dice-' + d2.value + '.png'
    }
    if (d3.hold === false){
        document.querySelector('#dvalue3').src = 'img/dice-' + d3.value + '.png' 
    }
    if (d4.hold === false){
        document.querySelector('#dvalue4').src = 'img/dice-' + d4.value + '.png'
    }
    if (d5.hold === false){
        document.querySelector('#dvalue5').src = 'img/dice-' + d5.value + '.png' 
    }
    if (d6.hold === false){
        document.querySelector('#dvalue6').src = 'img/dice-' + d6.value + '.png' 
    }   
    if (d1.trueHold === true){
        hold1button.style = 'visibility: hidden;'
        if (d1.trueCount === false){
            trueHoldCount += 1
            d1.trueCount = true
        }
    }
    if (d2.trueHold === true){
        hold2button.style = 'visibility: hidden;'
        if (d2.trueCount === false){
            trueHoldCount += 1
            d2.trueCount = true
        }
    }
    if (d3.trueHold === true){
        hold3button.style = 'visibility: hidden;'
        if (d3.trueCount === false){
            trueHoldCount += 1
            d3.trueCount = true
        }
    }
    if (d4.trueHold === true){
        hold4button.style = 'visibility: hidden;'
        if (d4.trueCount === false){
            trueHoldCount += 1
            d4.trueCount = true
        }
    }
    if (d5.trueHold === true){
        hold5button.style = 'visibility: hidden;'
        if (d5.trueCount === false){
            trueHoldCount += 1
            d5.trueCount = true
        }
    }
    if (d6.trueHold === true){
        hold6button.style = 'visibility: hidden;'
        if (d6.trueCount === false){
            trueHoldCount += 1
            d6.trueCount = true
        } else if (d6.trueCount === true){
            return
        }
    }
}


let totalScore = {
    value: 0,
    oneFour: false
}

function updateTotalScoreDOM(){
    document.querySelector('#final-score').innerText = totalScore.value
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

//Below are the Hold Button functions.

function noHoldWarning(){
    alert('Roll your first hand before selecting dice to hold.')
}

let heldRN = 0
let heldRNDOM = document.querySelector('#dice-held-RN')
function updateHeldRNinDOM(){
    heldRNDOM.innerText = heldRN
}

function updateHoldCond(){
    if (heldRN > 0) {
        holdCondition = true
        updateHoldCondInDOM()
    } else if (heldRN === 0){
        holdCondition = false
        updateHoldCondInDOM()
    }
}


function hold1(){
    if (rollCount === 0){
        noHoldWarning()
        return
    }
    if (d1.hold === false){
        d1.hold = true
        document.querySelector('#dvalue1').src = 'img/dice-' + d1.value + '-invert.png'
        //holdCondition = true
        heldRN += 1
        updateHeldRNinDOM()
        updateHoldCond()
    } else if (d1.hold === true){
        d1.hold = false
        document.querySelector('#dvalue1').src = 'img/dice-' + d1.value + '.png'
        heldRN -= 1
        updateHeldRNinDOM()
        updateHoldCond()
    }
}
function hold2(){
    if (rollCount === 0){
        noHoldWarning()
        return
    }
    if (d2.hold === false){
        d2.hold = true
        document.querySelector('#dvalue2').src = 'img/dice-' + d2.value + '-invert.png'
        heldRN += 1
        updateHeldRNinDOM()
        updateHoldCond()
    } else if (d2.hold === true){
        d2.hold = false
        document.querySelector('#dvalue2').src = 'img/dice-' + d2.value + '.png'
        heldRN -= 1
        updateHeldRNinDOM()
        updateHoldCond()
    }
}
function hold3(){
    if (rollCount === 0){
        noHoldWarning()
        return
    }
    if (d3.hold === false){
        d3.hold = true
        document.querySelector('#dvalue3').src = 'img/dice-' + d3.value + '-invert.png'
        heldRN += 1
        updateHeldRNinDOM()
        updateHoldCond()
    } else if (d3.hold === true){
        d3.hold = false
        document.querySelector('#dvalue3').src = 'img/dice-' + d3.value + '.png'
        heldRN -= 1
        updateHeldRNinDOM()
        updateHoldCond()
    }
}
function hold4(){
    if (rollCount === 0){
        noHoldWarning()
        return
    }
    if (d4.hold === false){
        d4.hold = true
        document.querySelector('#dvalue4').src = 'img/dice-' + d4.value + '-invert.png'
        heldRN += 1
        updateHeldRNinDOM()
        updateHoldCond()
    } else if (d4.hold === true){
        d4.hold = false
        document.querySelector('#dvalue4').src = 'img/dice-' + d4.value + '.png'
        heldRN -= 1
        updateHeldRNinDOM()
        updateHoldCond()
    }
    
}
function hold5(){
    if (rollCount === 0){
        noHoldWarning()
        return
    }
    if (d5.hold === false){
        d5.hold = true
        document.querySelector('#dvalue5').src = 'img/dice-' + d5.value + '-invert.png'
        heldRN += 1
        updateHeldRNinDOM()
        updateHoldCond()
    } else if (d5.hold === true){
        d5.hold = false
        document.querySelector('#dvalue5').src = 'img/dice-' + d5.value + '.png'
        heldRN -= 1
        updateHeldRNinDOM()
        updateHoldCond()
    }
}
function hold6(){
    if (rollCount === 0){
        noHoldWarning()
        return
    }
    if (d6.hold === false){
        d6.hold = true
        document.querySelector('#dvalue6').src = 'img/dice-' + d6.value + '-invert.png'
        heldRN += 1
        updateHeldRNinDOM()
        updateHoldCond()
    } else if (d6.hold === true){
        d6.hold = false
        document.querySelector('#dvalue6').src = 'img/dice-' + d6.value + '.png'
        heldRN -= 1
        updateHeldRNinDOM()
        updateHoldCond()
    }
}


let gameOver = false

const scoreButton = document.querySelector('#check-score-button')
scoreButton.addEventListener('click', score)

function score(){
    if (gameOver === true){
        alert('Game Over.  Please reset.')
    }
    if (d1.hold !== true || d2.hold !== true || d3.hold !== true || d4.hold !== true || d5.hold !== true || d6.hold !== true){
        alert('Please hold all dice to finalize score.')
        return
    }
    
    if ((d1.value === 1 || d2.value === 1 || d3.value === 1 || d4.value === 1 || d5.value === 1 || d6.value === 1) && (d1.value === 4 || d2.value === 4 || d3.value === 4 || d4.value === 4 || d5.value === 4 || d6.value === 4)){
        totalScore.oneFour = true
    }

    if (totalScore.oneFour === false){
        alert('You were not in the door.')
        document.querySelector('#final-score-title').style = 'visibility: visible;'
        document.querySelector('#final-score').style = 'visibility: visible;'
        totalScore.value = 0
        console.log(totalScore.value)
        document.querySelector('#final-score').innerText = totalScore.value
        if (gameOver === false){
            updateTopScoresDOM()
        }
        gameOver = true
        hold1button.style = 'visibility: hidden;'
        hold2button.style = 'visibility: hidden;'
        hold3button.style = 'visibility: hidden;'
        hold4button.style = 'visibility: hidden;'
        hold5button.style = 'visibility: hidden;'
        hold6button.style = 'visibility: hidden;'
    }

    if (totalScore.oneFour === true){
        document.querySelector('#final-score-title').style = 'visibility: visible;'
        document.querySelector('#final-score').style = 'visibility: visible;'
        totalScore.value = d1.value + d2.value + d3.value + d4.value + d5.value + d6.value - 5
        console.log(totalScore.value)
        document.querySelector('#final-score').innerText = totalScore.value
        if (gameOver === false){
            updateTopScoresDOM()
        }
        gameOver = true
        hold1button.style = 'visibility: hidden;'
        hold2button.style = 'visibility: hidden;'
        hold3button.style = 'visibility: hidden;'
        hold4button.style = 'visibility: hidden;'
        hold5button.style = 'visibility: hidden;'
        hold6button.style = 'visibility: hidden;'
    }

}

function updateTopScoresDOM(){
    const li = document.createElement('li')
    const ol = document.querySelector('ol')
    li.textContent = totalScore.value
    ol.appendChild(li)
}

const resetButton = document.querySelector('#reset')
resetButton.addEventListener('click', reset)

function reset(){
    if (gameOver === true){
        d1.value = 0
        d1.hold = false
        d1.trueHold = false
        document.querySelector('#dvalue1').src = 'img/dice-blank.png'
        d2.value = 0
        d2.hold = false
        d2.trueHold = false
        document.querySelector('#dvalue2').src = 'img/dice-blank.png'
        d3.value = 0
        d3.hold = false
        d3.trueHold = false
        document.querySelector('#dvalue3').src = 'img/dice-blank.png'
        d4.value = 0
        d4.hold = false
        d4.trueHold = false
        document.querySelector('#dvalue4').src = 'img/dice-blank.png'
        d5.value = 0
        d5.hold = false
        d5.trueHold = false
        document.querySelector('#dvalue5').src = 'img/dice-blank.png'
        d6.value = 0
        d6.hold = false
        d6.trueHold = false
        document.querySelector('#dvalue6').src = 'img/dice-blank.png'

        document.querySelector('#final-score-title').style = 'visibility: hidden;'
        document.querySelector('#final-score').style = 'visibility: hidden;'
        hold1button.style = 'visibility: visible;'
        hold2button.style = 'visibility: visible;'
        hold3button.style = 'visibility: visible;'
        hold4button.style = 'visibility: visible;'
        hold5button.style = 'visibility: visible;'
        hold6button.style = 'visibility: visible;'

        
        gameOver = false

        totalScore.value = 0
        totalScore.oneFour = false

        rollCount = 0
        heldRN = 0
        

        updateHeldRNinDOM()
        updateHoldCond()
        updateTurninDOM()
        updateTotalScoreDOM()

        holdCondition = true
        updateHoldCondInDOM()
    } else if (gameOver === false){
        alert('Quitter...')
        totalScore.value = 0
        console.log(totalScore.value)
        document.querySelector('#final-score').innerText = totalScore.value
        if (gameOver === false){
            updateTopScoresDOM()
        }
        d1.value = 0
        d1.hold = false
        d1.trueHold = false
        document.querySelector('#dvalue1').src = 'img/dice-blank.png'
        d2.value = 0
        d2.hold = false
        d2.trueHold = false
        document.querySelector('#dvalue2').src = 'img/dice-blank.png'
        d3.value = 0
        d3.hold = false
        d3.trueHold = false
        document.querySelector('#dvalue3').src = 'img/dice-blank.png'
        d4.value = 0
        d4.hold = false
        d4.trueHold = false
        document.querySelector('#dvalue4').src = 'img/dice-blank.png'
        d5.value = 0
        d5.hold = false
        d5.trueHold = false
        document.querySelector('#dvalue5').src = 'img/dice-blank.png'
        d6.value = 0
        d6.hold = false
        d6.trueHold = false
        document.querySelector('#dvalue6').src = 'img/dice-blank.png'

        document.querySelector('#final-score-title').style = 'visibility: hidden;'
        document.querySelector('#final-score').style = 'visibility: hidden;'
        hold1button.style = 'visibility: visible;'
        hold2button.style = 'visibility: visible;'
        hold3button.style = 'visibility: visible;'
        hold4button.style = 'visibility: visible;'
        hold5button.style = 'visibility: visible;'
        hold6button.style = 'visibility: visible;'

        
        gameOver = false

        totalScore.value = 0
        totalScore.oneFour = false

        rollCount = 0
        heldRN = 0
        

        updateHeldRNinDOM()
        updateHoldCond()
        updateTurninDOM()
        updateTotalScoreDOM()

        holdCondition = true
        updateHoldCondInDOM()
    }
    
}