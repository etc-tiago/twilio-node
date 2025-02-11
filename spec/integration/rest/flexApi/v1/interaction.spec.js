'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */
var serialize = require(
    '../../../../../lib/base/serialize');  /* jshint ignore:line */


var client;
var holodeck;

describe('Interaction', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://flex-api.twilio.com/v1/Interactions/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel': {
              'type': 'sms',
              'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'routing': {
              'properties': {
                  'workflow_sid': 'WWxx',
                  'attributes': 'WWxx',
                  'task_channel_unique_name': 'sms',
                  'routing_target': 'WKXX',
                  'queue_name': 'WQXX'
              }
          },
          'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'channels': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.flexApi.v1.interaction('KDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'channel': {}, 'routing': {}};
      var promise = client.flexApi.v1.interaction.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://flex-api.twilio.com/v1/Interactions';

      var values = {'Channel': serialize.object({}), 'Routing': serialize.object({}), };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'sid': 'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'channel': {
              'type': 'sms',
              'sid': 'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          'routing': {
              'reservation': null,
              'properties': {
                  'date_updated': 1634845217,
                  'task_queue_entered_date': 1634845217,
                  'workflow_name': 'Default Fifo Workflow',
                  'age_in_queue': 0,
                  'task_channel_unique_name': 'default',
                  'assignment_status': 'pending',
                  'queue_name': 'Sample Queue',
                  'assignmentCounter': 0,
                  'priority': 0,
                  'sid': 'WTaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'workflow_sid': 'WWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'routing_target': 'WKaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'reason': '',
                  'attributes': '{\'customerAddress\':\'customer phone address\',\'flexChannelInviteSid\':\'KGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\',\'conversationSid\':\'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\',\'channelType\':\'sms\',\'customers\':{\'phone\':\'customer phone address\',\'name\':\'customer name\'},\'conversations\':{\'initiated_by\':\'customer\',\'conversation_id\':\'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\',\'media\':[{\'type\':\'ChatTranscript\',\'sid\':\'CHaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\'}]},\'customerName\':\'customer name\',\'flexInteractionChannelSid\':\'UOaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\',\'initiatedBy\':\'customer\',\'flexInteractionSid\':\'KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa\',\'direction\':\'inbound\'}',
                  'task_channel_sid': 'TCaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'age': 0,
                  'workspace_sid': 'WSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'timeout': 86400,
                  'date_created': 1634845217,
                  'addons': '{}',
                  'queue_sid': 'WQaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          },
          'url': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'links': {
              'channels': 'https://flex-api.twilio.com/v1/Interactions/KDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/Channels'
          }
      };

      holodeck.mock(new Response(201, body));

      var opts = {'channel': {}, 'routing': {}};
      var promise = client.flexApi.v1.interaction.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
