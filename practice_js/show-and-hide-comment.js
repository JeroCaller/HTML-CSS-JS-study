let btn = document.querySelector('#show-hide');
let cmt = document.querySelectorAll('#comments .comm');
btn.onclick = showHideComments;

function showHideComments() {

    function controlDisplayAll(order) {
        for(let i = 0; i < cmt.length; i++) {
            cmt[i].style.display = order;
        }
    }

    const onCommentStr = '댓글 숨기기';  // 댓글이 표시된 상태에서의 버튼 메시지.
    const offCommentStr = '댓글 보기';  // 댓글이 숨겨진 상태에서의 버튼 메시지.

    if (btn.value === onCommentStr) {
        controlDisplayAll('none');
        btn.value = offCommentStr;
    } else {
        controlDisplayAll('block');
        btn.value = onCommentStr;
    }
}