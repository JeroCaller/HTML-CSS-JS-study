localStorage.setItem('nickName', 'james');
localStorage.setItem('yourNum', 12);

/*
alert(localStorage.getItem('nickName'));
alert(localStorage.getItem('yourNum'));
*/

for(let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    alert(`${key}: ${localStorage.getItem(key)}`);
}

localStorage.setItem('nickName', 'john');