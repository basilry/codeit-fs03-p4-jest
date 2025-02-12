# 📌 Jest를 활용한 TypeScript API 테스트 가이드

2025.02.12. 수

<br />

해당 레포는 TypeScript 기반 Express API의 **단위 테스트(Unit Test)** 와 **통합 테스트(Integration Test)** 를 진행하는 과정을 설명합니다. 단위 테스트에서는 Mock 데이터를 활용하여 컨트롤러 및 서비스 로직을 테스트하며, 통합 테스트에서는 실제 데이터베이스(PostgreSQL)와 Prisma ORM을 연결하여 테스트합니다.

<br />
<br />

### 0. 환경설정
---

<br />

✅ TypeScript 설정
- 전체 프로젝트 커버하는 타입스크립트 설정
- `tsconfig.json` 설정
  - 해당 파일 참조

<br />

✅ Jest 설정
- Jest를 사용하여 테스트 환경을 구성
- Jest 설치
  - `npm install --save-dev jest ts-jest @types/jest supertest`
- `jest.config.js` 설정
  - 해당 파일 참조

<br />

✅ Babel 설정
- Jest에서 TypeScript를 실행하기 위해 Babel 설정이 필요
- Babel 패키지 설치
  - `npm install --save-dev @babel/core @babel/preset-env`
- `babel.config.js` 설정
  - 해당 파일 참조

<br />

✅ Prisma 설정
- Prisma 설치 및 초기화
  - `npm install @prisma/client`
  - `npx prisma init`
- `prisma/schema.prisma` 설정
  - 해당 파일 참조
- 마이그레이션 실행
  - `npx prisma migrate dev --name init`


<br />
<br />

### 1. API 개발
---

<br />

✅ 1.1 라우터 작성
- `routes/productRoutes.ts`
  - 해당 파일 참조

<br />

✅ 1.2 컨트롤러 작성
- `controllers/ProductController.ts`
  - 해당 파일 참조

<br />

✅ 1.3 서비스 작성
- `services/ProductService.ts`
  - 해당 파일 참조


<br />
<br />

### 2. Mock 데이터를 통한 단위 테스트
---

<br />

- Mock 데이터를 활용하여 컨트롤러와 서비스가 올바르게 동작하는지 확인
- `__tests__/Product.test.ts`
  - 해당 파일 참조

<br />
<br />

### 3. 실제 DB와 연결하면서 확인하는 통합 테스트
---

<br />

- 통합 테스트에서는 실제 PostgreSQL과 Prisma를 연결하여 API가 정상적으로 동작하는지 확인
- `__tests__/Product.integration.test.ts`
  - 해당 파일 참조

<br />
<br />

### 4. 테스트 실행 방법
---

<br />

✅ `package.json`에 스크립트 처리
  - 해당 파일 참조

<br />

✅ 모든 테스트 실행
- `npm run test`

<br />

✅ 단위 테스트 실행
- `npm run test:unit`

<br />

✅ 통합 테스트 실행
- `npm run test:integration`

<br />