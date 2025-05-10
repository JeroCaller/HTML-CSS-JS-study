// 초기 값을 안 주면 자동으로 0부터 1씩 증가되는 값을 각각 할당받음.
var Compass;
(function (Compass) {
    Compass[Compass["North"] = 0] = "North";
    Compass[Compass["East"] = 1] = "East";
    Compass[Compass["West"] = 2] = "West";
    Compass[Compass["South"] = 3] = "South"; // 3
})(Compass || (Compass = {}));
// 초기값이 주어지면 그 다음 enum부터는 그로부터 1씩 증가되는 값을 부여받음.
var InitCompass;
(function (InitCompass) {
    InitCompass[InitCompass["North"] = 3] = "North";
    InitCompass[InitCompass["East"] = 4] = "East";
    InitCompass[InitCompass["West"] = 5] = "West";
    InitCompass[InitCompass["South"] = 6] = "South"; // 6
})(InitCompass || (InitCompass = {}));
const goTo = (direction, meter) => {
    console.log(`${direction}번 방향으로 ${meter}m 만큼 이동합니다.`);
};
goTo(Compass.East, 10);
