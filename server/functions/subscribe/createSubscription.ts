import { request } from '../../modules/http'
import { envVars } from '../../config/';

interface Subscribe {
  name: string;
  email: string;
  permissions: [string];
}

interface Response {
  status: number;
  code: number;
  data: any;
}

export default async function createSubscription(body: Subscribe): Promise<Response> {
  if (!body.email || !body.name) {
    return {
      status: 1,
      data: "Both fields are required",
      code: 400,
    }
  }

  const options = {
    method: 'post',
    url: `${envVars.serverUrl}/subscription`,
    data: { ...body },
  }

  
  const { status, data, code } =  await request(options);

  return { status, data, code };
}
