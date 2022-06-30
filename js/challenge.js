let counter = document.getElementById('counter')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const pause = document.getElementById('pause')
const heart = document.getElementById('heart')
const form = document.getElementById('comment-form')
const submit = document.getElementById('submit')
const likesDisplay = document.querySelector('.likes')
const likesMessage = document.createElement('li')
let likeCounter = 0;
const comments = document.getElementById('list')
let time = 0;
let myInterval = -1;


plus.addEventListener('click', addOne)

function addOne() {
    counter.innerHTML ++
    return counter
}


minus.addEventListener('click', minusOne)

function minusOne() {
    if (counter.innerHTML > 0) {
        counter.innerHTML --
        return counter
    }
}

form.addEventListener('submit', showComment)

function showComment(event) {
    event.preventDefault()
    const userComment = event.target.comment.value
    const p = document.createElement('p')

    p.textContent = userComment
    comments.appendChild(p)
    event.target.reset()
}



heart.addEventListener('click', addLike)

function addLike() {
    const current = counter.innerHTML
    const alreadyLiked = document.getElementById(`${current}_likes`)
    if (alreadyLiked) {
        const alreadyLikedText = alreadyLiked.textContent.split(' ')
       
        const likesNum = parseInt(alreadyLikedText[4])
    
        alreadyLiked.textContent = `${current} has been liked ${likesNum + 1} times`
    }
    else {
        const likesMessage = document.createElement('li')
        likesMessage.id = `${current}_likes`
        likesMessage.textContent = `${current} has been liked 1 time"`
        likesDisplay.append(likesMessage)
    }
    
}


let oneSecond = setInterval(addCounter, 1000)
function addCounter() {
    if(pause.innerText === "pause") {
        counter.innerHTML ++
    }
    return counter
}

pause.addEventListener('click', pauseCounter)

function pauseCounter() {
    if (myInterval == -1){
        pause.innerHTML = "pause";
        myInterval = setInterval(function (){
            time ++;
        }, 1000);
    } else {
        pause.innerHTML = "start";
        clearInterval(myInterval);
        myInterval = -1;
    }
}