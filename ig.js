var iconoheart = document.querySelectorAll(".interact .fa-heart")
var clicks = 0;
var likes = 0;

function fillHeart(fill) {
    clicks++ 
    if (clicks%2 === 0) {
        likes++
        var numeroDeLikes = document.querySelectorAll('.likes')
        numeroDeLikes[0].innerHTML = likes
    }
    
    fill.classList.toggle('fas')
    fill.classList.toggle ('red')
}   

function comment (e) {
    var promptComment = prompt('Add a comment:', '')
    var commentSt = document.querySelectorAll('.commentSection')    
    var newDiv = document.createElement('div')
    var newP = document.createElement('p')
    var newInput = document.createElement('input')
    commentSt[0].appendChild(newDiv)
    newDiv.classList.add ('comment')
    newDiv.appendChild(newP)
    newDiv.children[0].innerHTML = 'username'
    newDiv.appendChild(newInput)
    newDiv.children[1].value = promptComment
}