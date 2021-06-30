declare namespace NodeJS {
  interface Global {
    BMapGL?: any,
    $$chain?: Promise<any>,
    $$MapLoadCallback?: () => void
  }
}
