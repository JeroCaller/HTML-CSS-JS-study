// 기존에 이미 특정 데이터가 있다면 새로운 환경에서의 테스트를 위해
// 이를 모두 삭제함.
localStorage.clear();

localStorage.setItem('nickName', 'james');
localStorage.setItem('yourNum', 12);

// window 객체에서 storage 이벤트를 처리함으로써, 
// 웹 문서 전역에서 일어날 수 있는 storage 이벤트를 처리할 수 있음.
window = addEventListener('storage', (event) => {
    // nickName 키와 그에 해당하는 값의 변경에만 관심있음.
    if (event.key != 'nickName') {
        return;
    }
    let message = `웹 스토리지 정보 갱신됨
    갱신된 키 : ${event.key}
    이전 값 : ${event.oldValue}
    새 값 : ${event.newValue}`;
    alert(message);
});

// 특정 키-값 쌍의 값이 변경됨.
localStorage.setItem('nickName', 'John');