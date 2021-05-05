export const encodeEmail = (email: string): string => {
  return email?.replace('@', '%40')
}

export const queryStringify = (obj: unknown): string => {
  return Object.keys(obj)
    .map((prop) => `${prop}=${obj[prop]}`)
    .join('&')
}
