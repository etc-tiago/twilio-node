'use strict';

var _ = require('lodash');
var InstanceContext = require('../../../../base/InstanceContext');
var InstanceResource = require('../../../../base/InstanceResource');
var MemberList = require('./queue/member');
var values = require('../../../../base/values');

var QueueList;
var QueueInstance;
var QueueContext;

/**
 * Initialize the QueueContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid: The account_sid
 * @param {sid} sid: Fetch by unique queue Sid
 *
 * @returns {QueueContext}
 */
function QueueInstance(version, payload, accountSid, sid) {
  InstanceResource.prototype.constructor.call(this, version);

  // Marshaled Properties
  this._properties = {
    accountSid: payload.account_sid, // jshint ignore:line,
    averageWaitTime: payload.average_wait_time, // jshint ignore:line,
    currentSize: payload.current_size, // jshint ignore:line,
    dateCreated: payload.date_created, // jshint ignore:line,
    dateUpdated: payload.date_updated, // jshint ignore:line,
    friendlyName: payload.friendly_name, // jshint ignore:line,
    maxSize: payload.max_size, // jshint ignore:line,
    sid: payload.sid, // jshint ignore:line,
    uri: payload.uri, // jshint ignore:line,
  };

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this._properties.sid,
  };
}

_.extend(QueueInstance.prototype, InstanceResource.prototype);
QueueInstance.prototype.constructor = QueueInstance;

Object.defineProperty(QueueInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new QueueContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'accountSid', {
  get: function() {
    return this._properties.accountSid;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'averageWaitTime', {
  get: function() {
    return this._properties.averageWaitTime;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'currentSize', {
  get: function() {
    return this._properties.currentSize;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'dateCreated', {
  get: function() {
    return this._properties.dateCreated;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'dateUpdated', {
  get: function() {
    return this._properties.dateUpdated;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'friendlyName', {
  get: function() {
    return this._properties.friendlyName;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'maxSize', {
  get: function() {
    return this._properties.maxSize;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'sid', {
  get: function() {
    return this._properties.sid;
  },
});

Object.defineProperty(QueueInstance.prototype,
  'uri', {
  get: function() {
    return this._properties.uri;
  },
});

/**
 * Fetch a QueueInstance
 *
 * @returns Fetched QueueInstance
 */
QueueInstance.prototype.fetch = function fetch() {
  return this._proxy.fetch();
};

/**
 * Update the QueueInstance
 *
 * @param string [opts.friendlyName] - A human readable description of the queue
 * @param string [opts.maxSize] - The max number of members allowed in the queue
 *
 * @returns Updated QueueInstance
 */
QueueInstance.prototype.update = function update(opts) {
  return this._proxy.update(
    opts
  );
};

/**
 * Deletes the QueueInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
QueueInstance.prototype.remove = function remove() {
  return this._proxy.remove();
};

/**
 * Access the members
 *
 * @returns members
 */
QueueInstance.prototype.members = function members() {
  return this._proxy.members;
};


/**
 * Initialize the QueueContext
 *
 * @param {Version} version - Version that contains the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique queue Sid
 *
 * @returns {QueueContext}
 */
function QueueContext(version, accountSid, sid) {
  InstanceContext.prototype.constructor.call(this, version);

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<% account_sid %>/Queues/<% sid %>.json', // jshint ignore:line
    this._solution
  );

  // Dependents
  this._members = undefined;
}

_.extend(QueueContext.prototype, InstanceContext.prototype);
QueueContext.prototype.constructor = QueueContext;

/**
 * Fetch a QueueInstance
 *
 * @returns Fetched QueueInstance
 */
QueueContext.prototype.fetch = function fetch() {
  var params = values.of({});

  var payload = this._version.fetch({
    method: 'GET',
    uri: this._uri,
    params: params,
  });

  return new QueueInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Update the QueueInstance
 *
 * @param string [opts.friendlyName] - A human readable description of the queue
 * @param string [opts.maxSize] - The max number of members allowed in the queue
 *
 * @returns Updated QueueInstance
 */
QueueContext.prototype.update = function update(opts) {
  var data = values.of({
    'Friendlyname': opts.friendlyName,
    'Maxsize': opts.maxSize,
  });

  var payload = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data,
  });

  return new QueueInstance(
    this._version,
    payload,
    this._solution.accountSid,
    this._solution.sid
  );
};

/**
 * Deletes the QueueInstance
 *
 * @returns true if delete succeeds, false otherwise
 */
QueueContext.prototype.remove = function remove() {
  return this._version.remove(this._uri);
};

Object.defineProperty(QueueContext.prototype,
  'members', {
  get: function() {
    if (!this._members) {
      this._members = new MemberList(
        this._version,
        this._solution.accountSid,
        this._solution.queueSid
      );
    }
    return this._members;
  },
});

module.exports = {
  QueueList: QueueList,
  QueueInstance: QueueInstance,
  QueueContext: QueueContext
};