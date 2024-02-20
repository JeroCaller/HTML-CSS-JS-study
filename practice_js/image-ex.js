// 드롭박스 코드 ====
const dropboxes = document.querySelectorAll('.dropbox');
const itemBoxes = document.querySelectorAll('.item-box');

for (let [i, dropbox] of [...dropboxes].entries()) {
    const dropboxDisplay = dropbox.querySelector('.display-dropbox');
    const dropboxUl = dropbox.querySelector('ul');
    const defaultString = dropboxDisplay.children[0].textContent;
    dropbox.addEventListener('click', () => {
        if (getComputedStyle(dropboxUl).getPropertyValue('display') == 'none') {
            dropboxUl.style.display = 'block';
            dropboxDisplay.children[1].textContent = 'expand_less';
        } else {
            dropboxUl.style.display = 'none';
            dropboxDisplay.children[1].textContent = 'expand_more';
        }
    });
    for (let [idx, li] of [...dropboxUl.children].entries()) {
        li.addEventListener('click', () => {
            if (idx == dropboxUl.children.length-1) {
                dropboxDisplay.children[0].textContent = defaultString;
                itemBoxes[i].children[0].children[0].innerText = "품목: 선택 안함";
                itemBoxes[i].children[0].children[1].innerText = "총 가격: ";
            } else {
                dropboxDisplay.children[0].textContent = li.textContent;
                itemBoxes[i].children[0].children[0].innerText = `품목: ${li.textContent}`;
                let matResult = li.textContent.match(/\(\d*원\)/);
                if (matResult !== null) {
                    let pricePerUnit = matResult[0].substring(1, matResult[0].length - 2);
                    itemBoxes[i].children[0].children[1].innerText = `총 가격: ${pricePerUnit}원`;
                }
            }
        });
    }
}
// 버튼 클릭 시 수량 및 총 가격 변하게 하는 기능
for (let ib of itemBoxes) {
    const buttonDiv = ib.querySelector('.buttons');
    const buttonUp = buttonDiv.querySelector('.up');
    const buttonDown = buttonDiv.querySelector('.down');
    /**
     * @param {number} interval 물품 수량 증감량
     */
    function changePriceUnit(interval) {
        const productNumElement = ib.querySelector('ul').children[2];
        let productNum = parseInt(productNumElement.innerText.match(/\d+/));
        if (interval < 0 && productNum !== 1) {
            productNumElement.innerText = `수량: ${productNum - 1}`;
        } else if (interval > 0) {
            productNumElement.innerText = `수량: ${productNum + 1}`;
        }
    }

    buttonUp.addEventListener('click', () => changePriceUnit(1));
    buttonDown.addEventListener('click', () => changePriceUnit(-1));
}
// ===
// 드롭박스 코드 끝 ===
