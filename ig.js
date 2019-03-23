var iconoheart = document.querySelectorAll(".interact .fa-heart")
console.log (iconoheart)

var clicks = 0;
var likes = 0;

function fillHeart(fill) {
    
    console.log(this)
    clicks++ 
    if (clicks%2 === 0) {
        likes++
        var numeroDeLikes = document.querySelectorAll('.likes')
        numeroDeLikes.innerHTML = likes
    }
    
    fill.classList.toggle('fas')
}