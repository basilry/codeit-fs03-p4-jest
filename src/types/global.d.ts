declare global {
  namespace NodeJS {
    interface Global {
      lastResponse: { testName: string; response: any } | null;
    }
  }

  var lastResponse: { testName: string; response: any } | null;
}

export {};