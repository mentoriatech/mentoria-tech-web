import { request } from '../../modules/http'
import { envVars } from '../../config/';

interface Response {
  status: number;
  code: number;
  data: any;
}

interface Body {
  name?: string;
  email?: string;
  email_verified?: boolean;
  image?: string;
  genders?: string;
  occupation?: string;
  description?: string;
}

export default async function updateUser(body: Body, id: string): Promise<Response> {  
  const options = {
    method: 'put',
    url: `${envVars.serverUrl}/user/${id}`,
    data: body
  }

  const { status, data, code } =  await request(options);

  return { status, data, code };
}
