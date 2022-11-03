/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Taskrouter
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import Page from "../../../base/Page";
import Response from "../../../http/response";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { ActivityListInstance } from "./workspace/activity";
import { EventListInstance } from "./workspace/event";
import { TaskListInstance } from "./workspace/task";
import { TaskChannelListInstance } from "./workspace/taskChannel";
import { TaskQueueListInstance } from "./workspace/taskQueue";
import { WorkerListInstance } from "./workspace/worker";
import { WorkflowListInstance } from "./workspace/workflow";
import { WorkspaceCumulativeStatisticsListInstance } from "./workspace/workspaceCumulativeStatistics";
import { WorkspaceRealTimeStatisticsListInstance } from "./workspace/workspaceRealTimeStatistics";
import { WorkspaceStatisticsListInstance } from "./workspace/workspaceStatistics";



type WorkspaceQueueOrder = 'FIFO'|'LIFO';


/**
 * Options to pass to update a WorkspaceInstance
 *
 * @property { string } [defaultActivitySid] The SID of the Activity that will be used when new Workers are created in the Workspace.
 * @property { string } [eventCallbackUrl] The URL we should call when an event occurs. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio\\\&#39;s [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
 * @property { string } [eventsFilter] The list of Workspace events for which to call event_callback_url. For example if &#x60;EventsFilter&#x3D;task.created,task.canceled,worker.activity.update&#x60;, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated.
 * @property { string } [friendlyName] A descriptive string that you create to describe the Workspace resource. For example: &#x60;Sales Call Center&#x60; or &#x60;Customer Support Team&#x60;.
 * @property { boolean } [multiTaskEnabled] Whether to enable multi-tasking. Can be: &#x60;true&#x60; to enable multi-tasking, or &#x60;false&#x60; to disable it. However, all workspaces should be maintained as multi-tasking. There is no default when omitting this parameter. A multi-tasking Workspace can\\\&#39;t be updated to single-tasking unless it is not a Flex Project and another (legacy) single-tasking Workspace exists. Multi-tasking allows Workers to handle multiple Tasks simultaneously. In multi-tasking mode, each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking mode (legacy mode), each Worker will only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
 * @property { string } [timeoutActivitySid] The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response.
 * @property { WorkspaceQueueOrder } [prioritizeQueueOrder] 
 */
export interface WorkspaceContextUpdateOptions {
  "defaultActivitySid"?: string;
  "eventCallbackUrl"?: string;
  "eventsFilter"?: string;
  "friendlyName"?: string;
  "multiTaskEnabled"?: boolean;
  "timeoutActivitySid"?: string;
  "prioritizeQueueOrder"?: WorkspaceQueueOrder;
}

/**
 * Options to pass to create a WorkspaceInstance
 *
 * @property { string } friendlyName A descriptive string that you create to describe the Workspace resource. It can be up to 64 characters long. For example: &#x60;Customer Support&#x60; or &#x60;2014 Election Campaign&#x60;.
 * @property { string } [eventCallbackUrl] The URL we should call when an event occurs. If provided, the Workspace will publish events to this URL, for example, to collect data for reporting. See [Workspace Events](https://www.twilio.com/docs/taskrouter/api/event) for more information. This parameter supports Twilio\\\&#39;s [Webhooks (HTTP callbacks) Connection Overrides](https://www.twilio.com/docs/usage/webhooks/webhooks-connection-overrides).
 * @property { string } [eventsFilter] The list of Workspace events for which to call event_callback_url. For example, if &#x60;EventsFilter&#x3D;task.created, task.canceled, worker.activity.update&#x60;, then TaskRouter will call event_callback_url only when a task is created, canceled, or a Worker activity is updated.
 * @property { boolean } [multiTaskEnabled] Whether to enable multi-tasking. Can be: &#x60;true&#x60; to enable multi-tasking, or &#x60;false&#x60; to disable it. However, all workspaces should be created as multi-tasking. The default is &#x60;true&#x60;. Multi-tasking allows Workers to handle multiple Tasks simultaneously. When enabled (&#x60;true&#x60;), each Worker can receive parallel reservations up to the per-channel maximums defined in the Workers section. In single-tasking mode (legacy mode), each Worker will only receive a new reservation when the previous task is completed. Learn more at [Multitasking](https://www.twilio.com/docs/taskrouter/multitasking).
 * @property { string } [template] An available template name. Can be: &#x60;NONE&#x60; or &#x60;FIFO&#x60; and the default is &#x60;NONE&#x60;. Pre-configures the Workspace with the Workflow and Activities specified in the template. &#x60;NONE&#x60; will create a Workspace with only a set of default activities. &#x60;FIFO&#x60; will configure TaskRouter with a set of default activities and a single TaskQueue for first-in, first-out distribution, which can be useful when you are getting started with TaskRouter.
 * @property { WorkspaceQueueOrder } [prioritizeQueueOrder] 
 */
export interface WorkspaceListInstanceCreateOptions {
  "friendlyName": string;
  "eventCallbackUrl"?: string;
  "eventsFilter"?: string;
  "multiTaskEnabled"?: boolean;
  "template"?: string;
  "prioritizeQueueOrder"?: WorkspaceQueueOrder;
}
/**
 * Options to pass to each
 *
 * @property { string } [friendlyName] The &#x60;friendly_name&#x60; of the Workspace resources to read. For example &#x60;Customer Support&#x60; or &#x60;2014 Election Campaign&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { Function } [callback] -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property { Function } [done] - Function to be called upon completion of streaming
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkspaceListInstanceEachOptions {
  "friendlyName"?: string;
  "pageSize"?: number;
  callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
}

/**
 * Options to pass to list
 *
 * @property { string } [friendlyName] The &#x60;friendly_name&#x60; of the Workspace resources to read. For example &#x60;Customer Support&#x60; or &#x60;2014 Election Campaign&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [limit] -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 */
export interface WorkspaceListInstanceOptions {
  "friendlyName"?: string;
  "pageSize"?: number;
  limit?: number;
}

/**
 * Options to pass to page
 *
 * @property { string } [friendlyName] The &#x60;friendly_name&#x60; of the Workspace resources to read. For example &#x60;Customer Support&#x60; or &#x60;2014 Election Campaign&#x60;.
 * @property { number } [pageSize] How many resources to return in each list page. The default is 50, and the maximum is 1000.
 * @property { number } [pageNumber] - Page Number, this value is simply for client state
 * @property { string } [pageToken] - PageToken provided by the API
 */
export interface WorkspaceListInstancePageOptions {
  "friendlyName"?: string;
  "pageSize"?: number;
  pageNumber?: number;
  pageToken?: string;
}



export interface WorkspaceContext {

  activities: ActivityListInstance;
  events: EventListInstance;
  tasks: TaskListInstance;
  taskChannels: TaskChannelListInstance;
  taskQueues: TaskQueueListInstance;
  workers: WorkerListInstance;
  workflows: WorkflowListInstance;
  cumulativeStatistics: WorkspaceCumulativeStatisticsListInstance;
  realTimeStatistics: WorkspaceRealTimeStatisticsListInstance;
  statistics: WorkspaceStatisticsListInstance;

  /**
   * Remove a WorkspaceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>


  /**
   * Fetch a WorkspaceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>


  /**
   * Update a WorkspaceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceInstance
   */
  update(callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  /**
   * Update a WorkspaceInstance
   *
   * @param { WorkspaceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceInstance
   */
  update(params: WorkspaceContextUpdateOptions, callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  update(params?: any, callback?: any): Promise<WorkspaceInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceContextSolution {
  "sid"?: string;
}

export class WorkspaceContextImpl implements WorkspaceContext {
  protected _solution: WorkspaceContextSolution;
  protected _uri: string;

  protected _activities?: ActivityListInstance;
  protected _events?: EventListInstance;
  protected _tasks?: TaskListInstance;
  protected _taskChannels?: TaskChannelListInstance;
  protected _taskQueues?: TaskQueueListInstance;
  protected _workers?: WorkerListInstance;
  protected _workflows?: WorkflowListInstance;
  protected _cumulativeStatistics?: WorkspaceCumulativeStatisticsListInstance;
  protected _realTimeStatistics?: WorkspaceRealTimeStatisticsListInstance;
  protected _statistics?: WorkspaceStatisticsListInstance;

  constructor(protected _version: V1, sid: string) {
    this._solution = { sid };
    this._uri = `/Workspaces/${sid}`;
  }

  get activities(): ActivityListInstance {
    this._activities = this._activities || ActivityListInstance(this._version, this._solution.sid);
    return this._activities;
  }

  get events(): EventListInstance {
    this._events = this._events || EventListInstance(this._version, this._solution.sid);
    return this._events;
  }

  get tasks(): TaskListInstance {
    this._tasks = this._tasks || TaskListInstance(this._version, this._solution.sid);
    return this._tasks;
  }

  get taskChannels(): TaskChannelListInstance {
    this._taskChannels = this._taskChannels || TaskChannelListInstance(this._version, this._solution.sid);
    return this._taskChannels;
  }

  get taskQueues(): TaskQueueListInstance {
    this._taskQueues = this._taskQueues || TaskQueueListInstance(this._version, this._solution.sid);
    return this._taskQueues;
  }

  get workers(): WorkerListInstance {
    this._workers = this._workers || WorkerListInstance(this._version, this._solution.sid);
    return this._workers;
  }

  get workflows(): WorkflowListInstance {
    this._workflows = this._workflows || WorkflowListInstance(this._version, this._solution.sid);
    return this._workflows;
  }

  get cumulativeStatistics(): WorkspaceCumulativeStatisticsListInstance {
    this._cumulativeStatistics = this._cumulativeStatistics || WorkspaceCumulativeStatisticsListInstance(this._version, this._solution.sid);
    return this._cumulativeStatistics;
  }

  get realTimeStatistics(): WorkspaceRealTimeStatisticsListInstance {
    this._realTimeStatistics = this._realTimeStatistics || WorkspaceRealTimeStatisticsListInstance(this._version, this._solution.sid);
    return this._realTimeStatistics;
  }

  get statistics(): WorkspaceStatisticsListInstance {
    this._statistics = this._statistics || WorkspaceStatisticsListInstance(this._version, this._solution.sid);
    return this._statistics;
  }

  remove(callback?: any): Promise<boolean> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.remove({ uri: this._uri, method: "delete" });
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  fetch(callback?: any): Promise<WorkspaceInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: "get" });
    
    operationPromise = operationPromise.then(payload => new WorkspaceInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  update(params?: any, callback?: any): Promise<WorkspaceInstance> {
      if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    
        if (params["defaultActivitySid"] !== undefined)
    data["DefaultActivitySid"] = params["defaultActivitySid"];
    if (params["eventCallbackUrl"] !== undefined)
    data["EventCallbackUrl"] = params["eventCallbackUrl"];
    if (params["eventsFilter"] !== undefined)
    data["EventsFilter"] = params["eventsFilter"];
    if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["multiTaskEnabled"] !== undefined)
    data["MultiTaskEnabled"] = serialize.bool(params["multiTaskEnabled"]);
    if (params["timeoutActivitySid"] !== undefined)
    data["TimeoutActivitySid"] = params["timeoutActivitySid"];
    if (params["prioritizeQueueOrder"] !== undefined)
    data["PrioritizeQueueOrder"] = params["prioritizeQueueOrder"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = this._version,
        operationPromise = operationVersion.update({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkspaceInstance(operationVersion, payload, this._solution.sid));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface WorkspacePayload extends WorkspaceResource, Page.TwilioResponsePayload {
}

interface WorkspaceResource {
  account_sid?: string | null;
  date_created?: Date | null;
  date_updated?: Date | null;
  default_activity_name?: string | null;
  default_activity_sid?: string | null;
  event_callback_url?: string | null;
  events_filter?: string | null;
  friendly_name?: string | null;
  multi_task_enabled?: boolean | null;
  sid?: string | null;
  timeout_activity_name?: string | null;
  timeout_activity_sid?: string | null;
  prioritize_queue_order?: WorkspaceQueueOrder;
  url?: string | null;
  links?: object | null;
}

export class WorkspaceInstance {
  protected _solution: WorkspaceContextSolution;
  protected _context?: WorkspaceContext;

  constructor(protected _version: V1, payload: WorkspacePayload, sid?: string) {
    this.accountSid = payload.account_sid;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
    this.defaultActivityName = payload.default_activity_name;
    this.defaultActivitySid = payload.default_activity_sid;
    this.eventCallbackUrl = payload.event_callback_url;
    this.eventsFilter = payload.events_filter;
    this.friendlyName = payload.friendly_name;
    this.multiTaskEnabled = payload.multi_task_enabled;
    this.sid = payload.sid;
    this.timeoutActivityName = payload.timeout_activity_name;
    this.timeoutActivitySid = payload.timeout_activity_sid;
    this.prioritizeQueueOrder = payload.prioritize_queue_order;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { sid: sid || this.sid };
  }

  /**
   * The SID of the Account that created the resource
   */
  accountSid?: string | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was created
   */
  dateCreated?: Date | null;
  /**
   * The ISO 8601 date and time in GMT when the resource was last updated
   */
  dateUpdated?: Date | null;
  /**
   * The name of the default activity
   */
  defaultActivityName?: string | null;
  /**
   * The SID of the Activity that will be used when new Workers are created in the Workspace
   */
  defaultActivitySid?: string | null;
  /**
   * The URL we call when an event occurs
   */
  eventCallbackUrl?: string | null;
  /**
   * The list of Workspace events for which to call event_callback_url
   */
  eventsFilter?: string | null;
  /**
   * The string that you assigned to describe the Workspace resource
   */
  friendlyName?: string | null;
  /**
   * Whether multi-tasking is enabled
   */
  multiTaskEnabled?: boolean | null;
  /**
   * The unique string that identifies the resource
   */
  sid?: string | null;
  /**
   * The name of the timeout activity
   */
  timeoutActivityName?: string | null;
  /**
   * The SID of the Activity that will be assigned to a Worker when a Task reservation times out without a response
   */
  timeoutActivitySid?: string | null;
  prioritizeQueueOrder?: WorkspaceQueueOrder;
  /**
   * The absolute URL of the Workspace resource
   */
  url?: string | null;
  /**
   * The URLs of related resources
   */
  links?: object | null;

  private get _proxy(): WorkspaceContext {
    this._context = this._context || new WorkspaceContextImpl(this._version, this._solution.sid);
    return this._context;
  }

  /**
   * Remove a WorkspaceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed boolean
   */
  remove(callback?: (error: Error | null, item?: boolean) => any): Promise<boolean>
     {
    return this._proxy.remove(callback);
  }

  /**
   * Fetch a WorkspaceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceInstance
   */
  fetch(callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Update a WorkspaceInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceInstance
   */
  update(callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  /**
   * Update a WorkspaceInstance
   *
   * @param { WorkspaceContextUpdateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceInstance
   */
  update(params: WorkspaceContextUpdateOptions, callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  update(params?: any, callback?: any): Promise<WorkspaceInstance>
     {
    return this._proxy.update(params, callback);
  }

  /**
   * Access the activities.
   */
  activities(): ActivityListInstance {
    return this._proxy.activities;
  }

  /**
   * Access the events.
   */
  events(): EventListInstance {
    return this._proxy.events;
  }

  /**
   * Access the tasks.
   */
  tasks(): TaskListInstance {
    return this._proxy.tasks;
  }

  /**
   * Access the taskChannels.
   */
  taskChannels(): TaskChannelListInstance {
    return this._proxy.taskChannels;
  }

  /**
   * Access the taskQueues.
   */
  taskQueues(): TaskQueueListInstance {
    return this._proxy.taskQueues;
  }

  /**
   * Access the workers.
   */
  workers(): WorkerListInstance {
    return this._proxy.workers;
  }

  /**
   * Access the workflows.
   */
  workflows(): WorkflowListInstance {
    return this._proxy.workflows;
  }

  /**
   * Access the cumulativeStatistics.
   */
  cumulativeStatistics(): WorkspaceCumulativeStatisticsListInstance {
    return this._proxy.cumulativeStatistics;
  }

  /**
   * Access the realTimeStatistics.
   */
  realTimeStatistics(): WorkspaceRealTimeStatisticsListInstance {
    return this._proxy.realTimeStatistics;
  }

  /**
   * Access the statistics.
   */
  statistics(): WorkspaceStatisticsListInstance {
    return this._proxy.statistics;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid, 
      dateCreated: this.dateCreated, 
      dateUpdated: this.dateUpdated, 
      defaultActivityName: this.defaultActivityName, 
      defaultActivitySid: this.defaultActivitySid, 
      eventCallbackUrl: this.eventCallbackUrl, 
      eventsFilter: this.eventsFilter, 
      friendlyName: this.friendlyName, 
      multiTaskEnabled: this.multiTaskEnabled, 
      sid: this.sid, 
      timeoutActivityName: this.timeoutActivityName, 
      timeoutActivitySid: this.timeoutActivitySid, 
      prioritizeQueueOrder: this.prioritizeQueueOrder, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


export interface WorkspaceListInstance {
  (sid: string): WorkspaceContext;
  get(sid: string): WorkspaceContext;


  /**
   * Create a WorkspaceInstance
   *
   * @param { WorkspaceListInstanceCreateOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed WorkspaceInstance
   */
  create(params: WorkspaceListInstanceCreateOptions, callback?: (error: Error | null, item?: WorkspaceInstance) => any): Promise<WorkspaceInstance>;
  create(params: any, callback?: any): Promise<WorkspaceInstance>



  /**
   * Streams WorkspaceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Function to process each record
   */
  each(callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams WorkspaceInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkspaceListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(params?: WorkspaceListInstanceEachOptions, callback?: (item: WorkspaceInstance, done: (err?: Error) => void) => void): void;
  each(params?: any, callback?: any): void;
  /**
   * Retrieve a single target page of WorkspaceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
  /**
   * Retrieve a single target page of WorkspaceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
  getPage(params?: any, callback?: any): Promise<WorkspacePage>;
  /**
   * Lists WorkspaceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: WorkspaceInstance[]) => any): Promise<WorkspaceInstance[]>;
  /**
   * Lists WorkspaceInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkspaceListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(params?: WorkspaceListInstanceOptions, callback?: (error: Error | null, items: WorkspaceInstance[]) => any): Promise<WorkspaceInstance[]>;
  list(params?: any, callback?: any): Promise<WorkspaceInstance[]>;
  /**
   * Retrieve a single page of WorkspaceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { function } [callback] - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
  /**
   * Retrieve a single page of WorkspaceInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { WorkspaceListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(params: WorkspaceListInstancePageOptions, callback?: (error: Error | null, items: WorkspacePage) => any): Promise<WorkspacePage>;
  page(params?: any, callback?: any): Promise<WorkspacePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface WorkspaceSolution {
}

interface WorkspaceListInstanceImpl extends WorkspaceListInstance {}
class WorkspaceListInstanceImpl implements WorkspaceListInstance {
  _version?: V1;
  _solution?: WorkspaceSolution;
  _uri?: string;

}

export function WorkspaceListInstance(version: V1): WorkspaceListInstance {
  const instance = ((sid) => instance.get(sid)) as WorkspaceListInstanceImpl;

  instance.get = function get(sid): WorkspaceContext {
    return new WorkspaceContextImpl(version, sid);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Workspaces`;

  instance.create = function create(params: any, callback?: any): Promise<WorkspaceInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    if (params["friendlyName"] === null || params["friendlyName"] === undefined) {
      throw new Error('Required parameter "params[\'friendlyName\']" missing.');
    }

    let data: any = {};

    
        
    data["FriendlyName"] = params["friendlyName"];
    if (params["eventCallbackUrl"] !== undefined)
    data["EventCallbackUrl"] = params["eventCallbackUrl"];
    if (params["eventsFilter"] !== undefined)
    data["EventsFilter"] = params["eventsFilter"];
    if (params["multiTaskEnabled"] !== undefined)
    data["MultiTaskEnabled"] = serialize.bool(params["multiTaskEnabled"]);
    if (params["template"] !== undefined)
    data["Template"] = params["template"];
    if (params["prioritizeQueueOrder"] !== undefined)
    data["PrioritizeQueueOrder"] = params["prioritizeQueueOrder"];


    const headers: any = {};
    headers["Content-Type"] = "application/x-www-form-urlencoded"

    let operationVersion = version,
        operationPromise = operationVersion.create({ uri: this._uri, method: "post", data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkspaceInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.page = function page(params?: any, callback?: any): Promise<WorkspacePage> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

        if (params["friendlyName"] !== undefined)
    data["FriendlyName"] = params["friendlyName"];
    if (params["pageSize"] !== undefined)
    data["PageSize"] = params["pageSize"];

    
    if (params.page !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.page({ uri: this._uri, method: "get", params: data, headers });
    
    operationPromise = operationPromise.then(payload => new WorkspacePage(operationVersion, payload, this._solution));

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;

  }
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(targetUrl?: any, callback?: any): Promise<WorkspacePage> {
    let operationPromise = this._version._domain.twilio.request({method: "get", uri: targetUrl});

    operationPromise = operationPromise.then(payload => new WorkspacePage(this._version, payload, this._solution));
    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;
  }


  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export class WorkspacePage extends Page<V1, WorkspacePayload, WorkspaceResource, WorkspaceInstance> {
/**
* Initialize the WorkspacePage
*
* @param version - Version of the resource
* @param response - Response from the API
* @param solution - Path solution
*/
constructor(version: V1, response: Response<string>, solution: WorkspaceSolution) {
    super(version, response, solution);
    }

    /**
    * Build an instance of WorkspaceInstance
    *
    * @param payload - Payload response from the API
    */
    getInstance(payload: WorkspacePayload): WorkspaceInstance {
    return new WorkspaceInstance(
    this._version,
    payload,
    );
    }

    [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
    }
    }
