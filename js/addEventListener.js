const imageDiv = document.getElementById('image');
const article = document.querySelector('article');

/**
 * 주어진 정수 범위 내에서 무작위로 정수 하나를 추출하여 반환하는 함수. 
   minInt, maxInt도 범위에 포함된다.
 * @param {number} minInt
 * @param {number} maxInt
*/
function getRandomInt(minInt, maxInt) {
    let range = maxInt - minInt + 1;
    return Math.floor(Math.random() * range) + minInt;
}

imageDiv.firstElementChild.addEventListener('click', () => {
    if (article.style.display == 'none' || article.style.display == '') {
        article.style.display = 'block';
    } else {
        article.style.display = 'none';
    }
})
imageDiv.firstElementChild.addEventListener('click', () => {
    if (article.style.display != 'none') {
        let rgb = [0, 0, 0];
        rgb = rgb.map(() => getRandomInt(0, 255));
        imageDiv.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    } else {
        imageDiv.style.backgroundColor = 'white';
    }
})
