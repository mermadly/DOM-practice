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
}   

function comment () {
    console.log ('blah')
    var prompt = prompt('Add a comment:', '')
    var commentSt = document.querySelector('.card')
    var newElement = document.createElement('div')
    commentSt.appendChild(newElement)
    newElement.classList.add ('comments')
    newElement.appendChild('p')
    newElement.children[0].innerHTML = 'username'
    newElement.appendChild('input')
    newElement.children[1].value = prompt
}