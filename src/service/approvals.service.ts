import { Provide, makeHttpRequest } from '@midwayjs/core';

@Provide()
export class ApprovalsService {
  // 获取访问令牌
  async getAccessToken() {
    const response = await makeHttpRequest('https://portaluat.nottingham.edu.cn/UNNC/Auth/sso_token.ashx', {
      method: 'POST',
      dataType: 'json',
      contentType: 'json',
      data: {
        Username: '',
        Password: '',
        Account: '',
      }
    }) as {
      data:{
        AccessToken: string;
      }
    };
    return response.data.AccessToken;
  }

  // 获取待办事项
  async getTodos() {
    // const accessToken = await this.getAccessToken();
    const resp = await makeHttpRequest('https://portaluat.nottingham.edu.cn/UNNC/HAP/Task/TaskList.ashx', {
      method: 'POST',
      dataType: 'json',
      contentType: 'json',
      headers: {
        // Authorization: accessToken,
        // ProcessType: 'WorkList'
      }
    });
    return resp.data;
  }
}
