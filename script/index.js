let colorPattern = []
fillRandom()
fillRandom()
fillRandom()
document.getElementById('statsSpan').textContent = 'Wating for pattern...'
// const boxPattern = [1,2,2,3]
let enteredPattern = []
const score = document.getElementById('score')
const level = document.getElementById('level')
let index = 0
// function renderLevel() {
//     for (let i = 0; i < colorPattern.length; i++) {
//         let interval = setInterval(() => {
//             if (colorPattern[i] === 'green') {
//                 greenOn()
//             } else if (colorPattern[i] === 'red') {
//                 redOn()
//             } else if (colorPattern[i] === 'cyan') {
//                 cyanOn()
//             }
//         }, 1000);evel
//     }
//     clearInterval()
// }
// Turns on the green light and adds a green class to it
let y = undefined
let perm = true
function renderPreEntry() {
    if (index >= colorPattern.length) {
       clearInterval()
       enableEntry()
    } else {
        if (colorPattern[index] === 1) {
            document.getElementById('box1').style.backgroundColor = 'green'
            setTimeout(() => {
                document.getElementById('box1').style.backgroundColor = 'transparent'
            }, 1000);
        } else if (colorPattern[index] === 2) {
            document.getElementById('box2').style.backgroundColor = 'red'
            setTimeout(() => {
                document.getElementById('box2').style.backgroundColor = 'transparent'
            }, 1000);
        } else if (colorPattern[index] === 3){
            document.getElementById('box3').style.backgroundColor = 'cyan'
            setTimeout(() => {
                document.getElementById('box3').style.backgroundColor = 'transparent'
            }, 1000);
        }
        index++
    }
}
function renderLevel() {
    setInterval(() => {
        renderPreEntry()
    }, 1500);
}
let enableEntryVar;
function enableEntry() {
    enableEntryVar = true
    document.getElementById('statsSpan').textContent = 'Make the pattern!'
    checkAnswer()
}
function Entry() {
    if (enableEntryVar === true) {
        if (colorPattern.length === enteredPattern.length) {
            for (let i = 0; i < enteredPattern.length;i++) {
                let passedNumber = 1
                if (colorPattern[i] === enteredPattern[i]) {
                    passedNumber++
                }
                if (passedNumber === enteredPattern.length) {
                }
            }
        }
    } else {
    }
    console.log(enteredPattern)
}
let gameStats = 'notEnded'
function fillRandom() {
    colorPattern.push(Math.floor((Math.random())* 3) + 1)
}
function checkAnswer() {
    if (enteredPattern.length === colorPattern.length) {
        if (checkMatching()) {
            if (gameStats === 'ended') {
                gameStats = 'notEnded'
                enteredPattern = []
                index = 0
                cancelAnimationFrame(checkAnswer)
                document.getElementById('statsSpan').textContent = 'Correct!'
                clearInterval()
                fillRandom()    
            }
        } else {
            if (gameStats === 'ended') {
                gameStats = 'notEnded'
                clearInterval()
                cancelAnimationFrame(checkAnswer)
                document.getElementById('statsSpan').textContent = 'Incorrect!'
                index = 0
                enteredPattern = []
                alert('you lost :(')
                location.reload()
            }
        }
    }
    requestAnimationFrame(checkAnswer)
    // console.log('DEBUG --DEV : %At F -> requestAnimationFrame IS RUNNING.....')
}
function checkMatching() {
    for (let i = 0; i < enteredPattern.length;i++){
        let answer = undefined
        if (enteredPattern[i] != colorPattern[i]) {
            answer = 'wrong'
            if (i == enteredPattern.length - 1) {
                if (answer === 'wrong') {
                    gameStats = 'ended'
                    return false
                } else {
                }

            }
        } else {
            answer = 'correct'
            if (i == enteredPattern.length - 1) {
                if (answer === 'correct') {
                    gameStats = 'ended'
                    return true
                } else {
                }

            }
        }
    }
}
// function lclicked() {
//     document.getElementById('box1').style.backgroundColor = 'white'
//     setInterval(() => {
//         document.getElementById('box1').style.backgroundColor = 'transparent'
//         clearInterval()
//     }, 1000);
//     enteredPattern.push('green')
// }
// function mclicked() {
//     document.getElementById('box2').style.backgroundColor = 'white'
//     setInterval(() => {
//         document.getElementById('box2').style.backgroundColor = 'transparent'
//         clearInterval()
//     }, 1000);
//     enteredPattern.push('red')
// }
// function rclicked() {
    // document.getElementById('box3').style.backgroundColor = 'white'
    // setInterval(() => {
    //     document.getElementById('box3').style.backgroundColor = 'transparent'
    //     clearInterval()
    // }, 1000);
//     enteredPattern.push('cyan')
// }
document.getElementById('box1').addEventListener("click", () => {
    enteredPattern.push(1)
    document.getElementById('box1').style.backgroundColor = 'white'
    setInterval(() => {
        document.getElementById('box1').style.backgroundColor = 'transparent'
        clearInterval()
    }, 1000);
    Entry()
})
document.getElementById('box2').addEventListener("click", () => {
    enteredPattern.push(2)
    document.getElementById('box2').style.backgroundColor = 'white'
    setInterval(() => {
        document.getElementById('box2').style.backgroundColor = 'transparent'
        clearInterval()
    }, 1000);
    Entry()
})
document.getElementById('box3').addEventListener("click", () => {
    enteredPattern.push(3)
    document.getElementById('box3').style.backgroundColor = 'white'
    setInterval(() => {
        document.getElementById('box3').style.backgroundColor = 'transparent'
        clearInterval()
    }, 1000);
    Entry()
})