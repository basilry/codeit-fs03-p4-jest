const data = [
  { id: 1, name: '치즈', price: 2000 },
  { id: 2, name: '우유', price: 1500 },
  { id: 3, name: '사과', price: 1000 },
  { id: 4, name: '바나나', price: 1200 },
  { id: 5, name: '김밥', price: 2500 },
  { id: 6, name: '컵라면', price: 800 },
  { id: 7, name: '과자', price: 1200 },
  { id: 8, name: '탄산음료', price: 1800 },
  { id: 9, name: '초콜릿', price: 2200 },
  { id: 10, name: '빵', price: 1000 },
];

// 구현은 가짜 데이터베이스이지만 실제 데이터베이스에 접근하는 거라고 가정하자.
const database = {
  findById: (itemId) => data.find((item) => item.id === itemId) || null,
  // ...
};

export default database;

