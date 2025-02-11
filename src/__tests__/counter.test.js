import { counter } from "../counter";

describe('카운터 테스트', () => {
  beforeEach(() => {
    counter.set(2);
  });

  afterEach(() => {
    counter.reset();
  });

  test('증가 테스트', () => {
    // 이미 2로 설정되어 있음
    counter.increment();
    const result = counter.get();
    expect(result).toBe(3);
  });

  test('감소 테스트', () => {
    // 이미 2로 설정되어 있음
    counter.decrement();
    const result = counter.get();
    expect(result).toBe(1);
  });
});

