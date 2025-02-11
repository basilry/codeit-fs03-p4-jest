import { getFortuneString, sendNotification } from "../testDouble";

// dummy: 테스트 코드를 작성할 때 어쩔 수 없이 필요한 값으로, 동작에 영향을 주지 않으며 빈 값을 채워 넣는 것.
// fake: 실제 구현을 단순화하여 가짜로 구현한 것으로, 기본적인 기능을 수행하지만 실제 환경과는 다르게 동작하는 것.
// stub: 특정 값을 리턴하거나 일부 동작을 수행하도록 설정된, 사전에 정의된 동작을 가진 것.
// mock: 기존 동작을 흉내내고, '테스트를 위한 기록'을 남기는 역할을 하는 것.
// spy: mock과 유사하게 기록을 위한 용도로 사용되지만, 실제 함수나 객체는 그대로 두고 스파이 기능만 추가하는 것.


//=======dummy

test('dummy : 웹 알림 테스트', () => {
  sendNotification({
    type: 'web',
    recipient: 'dlwlrma',
    message: '안녕하세요 소통해요',
  });
  // ...
});


//=======fake

class FakeDate {
  constructor(year, month, date) {
    this.data = { year, month, date };
  }
  
  getFullYear() {
    return this.data.year;
  }

  getMonth() {
    return this.data.month;
  }

  getDate() {
    return this.data.date;
  }
  
  // 더 많은 Date 메서드를 가짜로 직접 구현해서 추가할 수 있음
}

test('fake : 운세 테스트', () => {
  const fakeDate = new FakeDate(2025, 1, 1);
  const result = getFortuneString(fakeDate);
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.');
});



//=======stub

test('stub : 운세 테스트', () => {
  const stubDate = {
    getFullYear: () => 2025,
  };
  const result = getFortuneString(stubDate);
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.');
});




//=======mock

test('mock : 운세 테스트', () => {
  let isGetFullYearCalled = false; // 호출 기록을 위한 변수
  
  const mockDate = {
    getFullYear: () => {
      isGetFullYearCalled = true; // 호출 여부를 기록한다
        return 2025; // 반환 값
    },
  };

  const result = getFortuneString(mockDate);
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.');
  
  // getFullYear가 호출되었는지 확인
  expect(isGetFullYearCalled).toBeTruthy();
});


//=======spy

test('운세 테스트', () => {
  let isGetFullYearCalled = false; // 호출 기록을 위한 변수
  
  const realDate = new Date(2025, 1, 1);
  const spyDate = {
    getFullYear: () => {
      isGetFullYearCalled = true; // spy가 호출 여부를 기록한다
      return realDate.getFullYear(); // 실제 동작은 유지한다
    },

    // 나머지 동작들도 realDate의 실제 동작을 유지해야 한다.
  };

  const result = getFortuneString(spyDate);
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.');
  
  // getFullYear가 호출되었는지 확인
  expect(isGetFullYearCalled).toBeTruthy();
});
