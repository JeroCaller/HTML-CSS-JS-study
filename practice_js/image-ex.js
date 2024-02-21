const mainImage = document.getElementById('main-img');
const subImagesContainer = document.getElementById('display-imgs');
const lightBox = document.getElementById('lightbox');

// 작은 이미지 클릭 시 메인 이미지로 띄우는 기능.
for(let li of subImagesContainer.children) {
    li.addEventListener('click', (event) => {
        mainImage.setAttribute('src', event.target.src);
    });
}
// ===

// 메인 이미지 클릭 시 확대하여 보여주는 기능.
mainImage.addEventListener('click', () => {
    lightBox.style.display = 'block';
    lightBox.querySelector('img').setAttribute('src', mainImage.src);
});
lightBox.addEventListener('click', () => {
    if (lightBox.style.display !== 'none') {
        lightBox.style.display = 'none';
    }
});