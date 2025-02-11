// 4단계 테스트 패턴
// 테스트를 구조적으로 작성하기 위한 4단계 패턴 소개
// Setup, Exercise, Assertion, Teardown 소개
// Setup: 테스트 환경을 설정하는 단계
// 테스트에 필요한 변수나 객체를 초기화하고, 테스트 실행 전에 필요한 상태를 준비함
// Exercise: 실제 테스트할 코드를 실행하는 단계
// 테스트하고자 하는 함수나 메서드를 호출하여 결과를 얻음
// Assertion: 기대하는 결과를 검증하는 단계
// jest로 설명하면 expect와 같은 함수를 써서 확인하는 것
// Teardown: 테스트 후 정리하는 단계
// 테스트가 끝난 후에 Setup에서 만든 상태를 원래대로 되돌림

console.log('app.js is running');

const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const error = () => { throw new Error('error!'); };

export { sum, subtract, error };