let N = parseInt(prompt("총 관객 수 입력."));
let seatPerRow = parseInt(prompt("한 줄에 앉힐 관객 수 입력"));

let q = N / seatPerRow;
let r = N % seatPerRow;
let numRow = Math.floor(q);

if (r !== 0) {
    numRow += 1;
}

document.write("<p>총 관객 수: " + N + "</p>");
document.write("<p>한 줄에 앉을 관객 수: " + seatPerRow + "</p>");
document.write("<p>필요한 줄 수는 " + numRow + "줄 입니다.</p>");