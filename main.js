'use strict';

const face = document.querySelector('.face');
const head = document.querySelector('.head');

function clickFace() {
    face.innerHTML = ';)';
}
function goAway() {
    face.innerHTML = ':)';
}
head.addEventListener('click', clickFace);
head.addEventListener('mouseout', goAway);