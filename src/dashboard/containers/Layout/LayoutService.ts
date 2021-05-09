import { UserType } from 'types'

interface GetUserResponse {
  data: UserType;
}

export const getUser = (email: string): Promise<GetUserResponse> =>
  fetch(`/api/server/user/${email}`)
    .then((data) => data.json())
    .catch((error) => error)
