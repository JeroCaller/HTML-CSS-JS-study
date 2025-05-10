var Message;
(function (Message) {
    Message["None"] = "";
    Message["Confirm"] = "\uD655\uC785\uB418\uC5C8\uC2B5\uB2C8\uB2E4.";
    Message["SignUpSuccess"] = "\uAC00\uC785\uC5D0 \uC131\uACF5\uD558\uC600\uC2B5\uB2C8\uB2E4.";
    Message["SignUpFailed"] = "\uAC00\uC785 \uC2E4\uD328";
})(Message || (Message = {}));
const response = (message) => {
    console.log(message);
};
response(Message.None);
response(Message.Confirm);
response(Message.SignUpSuccess);
response(Message.SignUpFailed);
