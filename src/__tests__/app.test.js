import { sum, subtract, error } from '../app';
import hello from '../hello';

test('안녕 Jest', () => {
  const value = hello();
  expect(value).toEqual('Hello Jest');
});

test('add', () => {
  const value = sum(1, 2);
  expect(value).toEqual(3);
});

test('minus', () => {
  const value = subtract(1, 2);
  expect(value).toEqual(-1);
});

test('error 테스트', () => {
  expect(error).toThrow('error!');
});


