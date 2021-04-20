export const encodeEmail = (email: string) => {
  return email?.replace('@', '%40');
}

export const queryStringify = (obj) => {
  return Object.keys(obj).map((prop) => `${prop}=${obj[prop]}`).join('&')
};
