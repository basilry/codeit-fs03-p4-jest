import { getAvatars } from '../avatar';

describe('getAvatars 함수 테스트 1 = then chaning', () => {
  test('네트워크에서 아바타 데이터를 불러온다', (done) => {
    getAvatars().then((data) => {
      expect(data).toBeTruthy();
      done();
    }).catch((error) => {
      done(error);
    });
  });
});


describe('getAvatars 함수 테스트 2 = await 처리', () => {
  test('네트워크에서 아바타 데이터를 불러온다', async () => {
    const data = await getAvatars();
    expect(data).toBeTruthy();
  });
});

