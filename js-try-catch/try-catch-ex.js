try {
    console.log(notDeclared);  // 변수 선언 없이 바로 호출 시도.
} catch(err) {
    console.log("에러 발생!");
    // console.log(err);  // 에러 상세 메시지 출력.
    console.log(err.name);
    console.log(err.message);
}