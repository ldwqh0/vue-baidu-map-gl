interface BMapGL {
  [key: string]: any
}

declare namespace NodeJS {
  interface Global {
    BMapGL?: BMapGL,
    $$chain?: Promise<BMapGL>,
    $$MapLoadCallback?: () => void
  }
}
