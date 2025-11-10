/**
 * @description UNNC 待办事项请求参数
 */
export interface UNNCTaskListRequest {
  TaskID?: string; // 筛选条件:流程任务号
  ProcessName?: string; // 筛选条件:流程名称
  PostUserAccount?: string; // 筛选条件:提交人账号
  SerialNum?: string; // 筛选条件:流水号
  Keyword?: string; // 筛选条件:关键字
  StartTime?: string; // 筛选条件:流程发起开始时间
  EndTime?: string; // 筛选条件:流程发起结束时间
  Page: number; // 分页显示页数
  PageSize: number; // 每页显示数量
}
