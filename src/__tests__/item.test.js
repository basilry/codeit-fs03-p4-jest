import { getItem } from '../item';
import database from '../repository/database';

// const mockFindById = jest.fn();
// const mockFindById = jest.fn((id) => {
//   if (id === 1) return { id: 1, name: '양파', price: 800 };
//   return null;
// });

// const mockDatabase = {
//   findById: mockFindById,
// };

jest.mock('../repository/database');

// describe('getItem 함수 테스트', () => {
//   test('존재하는 상품 조회', () => {
//     mockFindById.mockImplementation((id) => {
//       if (id === 1) return { id: 1, name: '양파', price: 800 };
//       return null;
//     });
//     const item = getItem(mockDatabase, 1);
//     expect(item).toEqual({ id: 1, name: '양파', price: 800 });
//     mockFindById.mockReset();
//   });

//   test('존재하지 않는 상품 조회', () => {
//     mockFindById.mockImplementation((id) => {
//       if (id === 1) return { id: 1, name: '양파', price: 800 };
//       return null;
//     });
//     const item = getItem(mockDatabase, 11);
//     expect(item).toBeNull();
//     mockFindById.mockReset();
//   });
// });

describe('getItem 테스트', () => {
  test('존재하는 상품 조회', () => {
    database.findById.mockReturnValue({ id: 1, name: '달걀', price: 800 });
    const item = getItem(1);
    expect(item).toEqual({ id: 1, name: '달걀', price: 800 });
  });

  test('존재하지 않는 상품 조회', () => {
    database.findById.mockReturnValue(null);
    const item = getItem(11);
    expect(item).toBeNull();
  });
});
