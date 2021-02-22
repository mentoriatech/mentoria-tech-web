import { request } from '../../modules/http'
import { envVars } from '../../config/';

interface Response {
  status: number;
  code: number;
  data: any;
}

export default async function listSubscriptions(): Promise<Response> {

  const options = {
    method: 'get',
    url: `${envVars.serverUrl}/subscription`,
  }

  const { status, data, code } =  await request(options);

  return { status, data, code };
}
