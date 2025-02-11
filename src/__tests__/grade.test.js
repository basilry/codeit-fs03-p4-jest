import { isPassingScore } from '../grade';

describe('isPassingScore 함수 테스트', () => {
  it('55점 이상은 Pass (true) - toEqual', () => {
    expect(isPassingScore(55)).toEqual(true);
    expect(isPassingScore(70)).toEqual(true);
    expect(isPassingScore(100)).toEqual(true);
  });

  it('55점 미만은 Fail (false) - toEqual', () => {
    expect(isPassingScore(54)).toEqual(false);
    expect(isPassingScore(0)).toEqual(false);
    expect(isPassingScore(49)).toEqual(false);
  });

  it('55점 이상은 Pass (true) - toBeTruthy', () => {
    expect(isPassingScore(55)).toBeTruthy();
    expect(isPassingScore(70)).toBeTruthy();
    expect(isPassingScore(100)).toBeTruthy();
  });

  it('55점 미만은 Fail (false) - toBeTruthy', () => {
    expect(isPassingScore(54)).toBeFalsy();
    expect(isPassingScore(0)).toBeFalsy();
    expect(isPassingScore(49)).toBeFalsy();
  });
});

