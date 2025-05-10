enum Message {
  None = "",
  Confirm = "확입되었습니다.",
  SignUpSuccess = "가입에 성공하였습니다.",
  SignUpFailed = "가입 실패"
}

const response = (message: Message): void => {
  console.log(message);
};

response(Message.None);
response(Message.Confirm);
response(Message.SignUpSuccess);
response(Message.SignUpFailed);