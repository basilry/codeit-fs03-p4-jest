import hello from "../hello";

describe('hello 함수 테스트', () => {
  test('Hello Jest를 리턴해야 한다', () => {
    const value = hello();
    expect(value).toEqual('Hello Jest');
  });

  test('파라미터를 넘겨도 리턴 값이 똑같아야 한다', () => {
    const value = hello(20);
    expect(value).toEqual('Hello Jest');
  });
});