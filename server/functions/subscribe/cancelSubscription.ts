import { request } from '../../modules/http'
import { envVars } from '../../config/';

interface CancelSubscription {
  email: string;
}

interface Response {
  status: number;
  code: number;
  data: any;
}

export default async function cancelSubscription(body: CancelSubscription): Promise<Response> {
  if (!body.email) {
    return {
      status: 1,
      data: "Email field is required",
      code: 400,
    }
  }

  const options = {
    method: 'delete',
    url: `${envVars.serverUrl}/subscription`,
    data: { ...body },
  }

  const { status, data, code } =  await request(options);

  return { status, data, code };
}
