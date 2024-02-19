const dropbox = document.querySelector('.dropbox');
const dropboxDisplay = document.querySelector('.display-dropbox');
const dropboxUl = document.querySelector('.dropbox ul');
const defaultString = dropboxDisplay.children[0].textContent;

dropbox.addEventListener('click', () => {
    if (getComputedStyle(dropboxUl).getPropertyValue('display') == 'none') {
        dropboxUl.style.display = 'block';
        dropboxDisplay.children[1].textContent = 'arrow_drop_up';
    } else {
        dropboxUl.style.display = 'none';
        dropboxDisplay.children[1].textContent = 'arrow_drop_down';
    }
});

for (let [idx, li] of [...dropboxUl.children].entries()) {
    li.addEventListener('click', () => {
        if (idx == dropboxUl.children.length-1) {
            dropboxDisplay.children[0].textContent = defaultString;
        } else {
            dropboxDisplay.children[0].textContent = li.textContent;
        }
    });
}