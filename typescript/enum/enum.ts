// 초기 값을 안 주면 자동으로 0부터 1씩 증가되는 값을 각각 할당받음.
enum Compass {
  North, // 0
  East,  // 1
  West, // 2
  South // 3
}

// 초기값이 주어지면 그 다음 enum부터는 그로부터 1씩 증가되는 값을 부여받음.
enum InitCompass {
  North = 3,
  East,  // 4
  West,  // 5
  South  // 6
}

const goTo = (direction: Compass, meter: number): void => {
  console.log(`${direction}번 방향으로 ${meter}m 만큼 이동합니다.`);
};

goTo(Compass.East, 10);