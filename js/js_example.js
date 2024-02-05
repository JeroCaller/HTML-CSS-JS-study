let user = prompt("당신의 국적을 작성해주세요.");

switch (user) {
    case '한국':
    case '대한민국':
    case '남한':
    case 'Korea':
    case 'South Korea':
        document.write("만나서 반갑습니다!");
        break;
    case 'USA':
    case 'US':
    case '미국':
    case '미합중국':
    case 'America':
        document.write("Nice to meet you!");
        break;
}