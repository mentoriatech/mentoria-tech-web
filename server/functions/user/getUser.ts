import { request } from '../../modules/http'
import { envVars } from '../../config';

interface Response {
  status: number;
  code: number;
  data: any;
}

export default async function getUser(email: string): Promise<Response> {

  const options = {
    method: 'get',
    url: `${envVars.serverUrl}/user/${email}`,
  }

  try {
    const { status, data, code } =  await request(options);

    return { status, data, code };
  } catch(error) {

    return { status: 1, data: error, code: 400 }
  }

}
