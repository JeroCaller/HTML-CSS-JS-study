const dropboxes = document.querySelectorAll('.dropbox');
const itemBoxes = document.querySelectorAll('.item-box');
const mainPrice =  document.querySelector('#main-price span');

/**
 * 모든 품목 가격을 합친 총합을 계산하여 기록하는 콜백 함수.
 */
function calcTotalPrice() {
    const InfoTotalPriceElement = document.querySelector('#total strong');
    const ulList = document.querySelectorAll('.item-box > ul');
    let totalPrice;

    for(ul of ulList) {
        let itemTotalPrice = ul.children[1].querySelector('span').innerText;
        if (itemTotalPrice === '') {
            continue;
        } else {
            itemTotalPrice = parseInt(itemTotalPrice);
        }
        if (totalPrice === undefined) {
            totalPrice = itemTotalPrice;
        } else {
            totalPrice += itemTotalPrice;
        }
    }

    if (totalPrice === undefined) {
        InfoTotalPriceElement.innerText = '';
    } else {
        InfoTotalPriceElement.innerText = totalPrice;
    }
}

// 드롭박스 코드 ====
for (let [i, dropbox] of [...dropboxes].entries()) {
    const dropboxDisplay = dropbox.querySelector('.display-dropbox');
    const dropboxUl = dropbox.querySelector('ul');
    const defaultString = dropboxDisplay.children[0].textContent;
    const ulInItemBox = itemBoxes[i].querySelector('ul');

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
                ulInItemBox.children[0].querySelector('span').innerText = "";
                ulInItemBox.children[1].querySelector('span').innerText = "";
            } else {
                dropboxDisplay.children[0].textContent = li.textContent;
                ulInItemBox.children[0].querySelector('span').innerText = li.textContent;
                let matResult = li.textContent.match(/\(\d*원\)/);
                if (matResult !== null) {
                    let pricePerUnit = matResult[0].substring(1, matResult[0].length - 2);
                    ulInItemBox.children[1].querySelector('span').innerText = pricePerUnit;
                } else {
                    // 상품 메인 가격을 그대로 적용.
                    ulInItemBox.children[1].querySelector('span').innerText = mainPrice.innerText;
                }
            }
            // 수량 초기화
            ulInItemBox.children[2].querySelector('span').innerText = '1';
        });
        li.addEventListener('click', calcTotalPrice);
    }
}
// 드롭박스 코드 끝 ===

// 버튼 클릭 시 수량 및 총 가격 변하게 하는 기능
/**
 * 한 품목의 수량에 따른 가격을 계산하는 콜백 함수.
 * @param {event} event
 */
function calcTotalPriceOfAnItem(event) {
    const ulElement = this.parentNode.parentNode.querySelector('ul');
    let totalPriceForItem = 0;

    const productName = ulElement.children[0].querySelector('span').innerText;
    if (productName === '') {
        return;
    }
    let matResult = productName.match(/\(\d*원\)/);
    let pricePerUnit;
    if (matResult === null) {
        pricePerUnit = mainPrice.innerText;
    } else {
        pricePerUnit = matResult[0].substring(1, matResult[0].length - 2);
    }
    pricePerUnit = parseInt(pricePerUnit);
    let productNum = parseInt(ulElement.children[2].querySelector('span').innerText);
    totalPriceForItem = pricePerUnit * productNum;
    
    ulElement.children[1].querySelector('span').innerText = totalPriceForItem;
}

for (let ib of itemBoxes) {
    const buttonDiv = ib.querySelector('.buttons');
    const buttonUp = buttonDiv.querySelector('.up');
    const buttonDown = buttonDiv.querySelector('.down');
    /**
     * @param {number} interval 물품 수량 증감량
     */
    function changePriceUnit(interval) {
        const productNumElement = ib.querySelector('ul').children[2].querySelector('span');
        let productNum = parseInt(productNumElement.innerText.match(/\d+/));
        if (interval < 0 && productNum !== 1) {
            productNumElement.innerText = productNum - 1;
        } else if (interval > 0) {
            productNumElement.innerText = productNum + 1;
        }
    }

    buttonUp.addEventListener('click', () => changePriceUnit(1));
    buttonUp.addEventListener('click', calcTotalPriceOfAnItem);
    buttonUp.addEventListener('click', calcTotalPrice);
    buttonDown.addEventListener('click', () => changePriceUnit(-1));
    buttonDown.addEventListener('click', calcTotalPriceOfAnItem);
    buttonDown.addEventListener('click', calcTotalPrice);
}
// ===