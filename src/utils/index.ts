export const encodeEmail = (email: string) => {
  return email?.replace('@', '%40');
}
