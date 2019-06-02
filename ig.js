var iconoheart = document.querySelectorAll(".interact .fa-heart")
var clicks = 0;
var likes = [0, 0, 0]

function fillHeart(fill) {

    const index = [...iconoheart].indexOf(event.target);
    likes[index]++

    var numeroDeLikes = document.querySelectorAll('.likes')
    numeroDeLikes[index].innerHTML = likes[index]
    

    fill.classList.toggle('fas')
}   

function comment () {
    
    var inputListen = document.querySelector('.add');
    
    inputListen.addEventListener ('keydown', function () {
        if (event.charCode === 13) {
            console.log ('hola')

        }
    })

        var promptComment = prompt('Add a comment:', '')
        var commentSt = document.querySelectorAll('.commentSection')    
        var newDiv = document.createElement('div')
        var newP = document.createElement('p')
        var newInput = document.createElement('input')
        // var index = [...commentSt].indexOf('.commentSection')
        // console.log(index)
        commentSt[2].appendChild(newDiv)
        newDiv.classList.add ('comment')
        newDiv.appendChild(newP)
        newDiv.children[0].innerHTML = 'username'
        newDiv.appendChild(newInput)
        newDiv.children[1].value = promptComment

}

// var toggleCeleste = 

var buttonBlue = document.querySelector('button')
inputListen = document.querySelector('.add')

inputListen.addEventListener('keydown', function () {
    buttonBlue.classList.add('blue')
})