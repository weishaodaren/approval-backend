import { Context, Controller, Get, HttpServerResponse, Inject } from '@midwayjs/core';
import { ApprovalsService } from '../service/approvals.service.js';

@Controller('/approvals')
export class ApprovalsController {
  @Inject()
  ctx: Context;

  @Inject()
  approvalsService: ApprovalsService;

  // 获取待办事项
  @Get('/todos')
  async getTodos(){
    const data = await this.approvalsService.getTodos();
    return new HttpServerResponse(this.ctx).json(data);
  }
}
