const iconoheart = document.querySelectorAll(".interact .fa-heart")
const image = document.querySelectorAll (".img")
let clicks = 0;
let likes = [0, 0, 0]

function fillHeart(fill) {

    const index = [...iconoheart].indexOf(event.target);

    if (likes[index] === 0) {
        likes[index]++
    } else if (likes[index] > 0) {
        likes[index]--
    }

    let numeroDeLikes = document.querySelectorAll('.likes')
    numeroDeLikes[index].innerHTML = likes[index]
    

    fill.classList.toggle('fas')
}   