import { server } from "./src/app";

beforeAll(() => {
  console.log("\n🚀 Jest 테스트 시작!");
});

beforeEach(() => {
  jest.clearAllMocks();
  globalThis.lastResponse = null;
});

afterEach(() => {
  if (globalThis.lastResponse) {
    console.log(`\n✅ [${globalThis.lastResponse.testName}] 응답 데이터:\n`,
      JSON.stringify(globalThis.lastResponse.response.body, null, 2)
    );
  }
});

afterAll(async () => {
  server.close()
  console.log("\n✅ Jest 테스트 완료!");
});