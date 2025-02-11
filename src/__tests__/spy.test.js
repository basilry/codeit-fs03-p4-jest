function tossCoin() {
  return randomSpy() > 0.5 ? 'Head' : 'Tail';
}

const randomSpy = jest.spyOn(Math, 'random'); // Math.random에 스파이 덮어 씌우기

test('mockReturnValue : 한가지 값이 아니라 여러 값을 리턴한다', () => {
  randomSpy.mockReturnValue(0.3);
  const result = tossCoin();
  expect(result).toBe('Tail'); // 가짜 함수의 결과에 따라 검증
  randomSpy.mockReturnValue(0.6);
  const result2 = tossCoin();
  expect(result2).toBe('Head'); // 가짜 함수의 결과에 따라 검증
  randomSpy.mockRestore(); // 원래의 Math.random으로 복구 (설정했던 mockReturnValue가 사라짐)
});


test('mockImplementation : 한가지 값이 아니라 여러 값을 리턴한다', () => {
  randomSpy.mockImplementation(() => 0.3);
  const result = tossCoin();
  expect(result).toBe('Tail'); // 가짜 함수의 결과에 따라 검증
  randomSpy.mockImplementation(() => 0.6);
  const result2 = tossCoin();
  expect(result2).toBe('Head'); // 가짜 함수의 결과에 따라 검증
  randomSpy.mockRestore(); // 원래의 Math.random으로 복구 (설정했던 mock 구현이 사라짐)
});

