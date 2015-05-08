var __path__ = '../../src/js/actions/Actions';

var rewire = require('rewire');
var expect = require('expect');
var should = require('should');

describe('Grommet Actions specs', function() {
  it('does not login with invalid data', function(done) {

    var Actions = require(__path__);
    var Reflux = require('reflux');

    var FailingStore = Reflux.createStore({
      listenables: Actions,
      onLoginCompleted: function() {
        should.fail('Expected the login action to fail.');
      },
      onLoginFailed: function(err, response) {
        expect(err).toBe(400);
        expect(response.message).toBe('Please provide userName and password.');
        done();
      }
    });

    Actions.login();
  });

  it('does login with valid data', function(done) {

    var Actions = rewire(__path__);
    Actions.__set__('Rest', {
      post: function () {
        return {
          end: function (callback) {
            callback(undefined, { ok: true, body: { sessionID: '123' }});
          }
        }
      }
    });

    var Reflux = require('reflux');

    var SuccessStore = Reflux.createStore({
      listenables: Actions,
      onLoginCompleted: function(userName, sessionID) {
        expect(userName).toBe('fakeUser');
        expect(sessionID).toBe('123');
        done();
      },
      onLoginFailed: function() {
        should.fail('Expected the login action to succeed.');
      }
    });

    Actions.login('fakeUser', 'fakePassword');
  });

  it('fails to login on the backend for same weird reason', function (done) {
    var Actions = rewire(__path__);
    Actions.__set__('Rest', {
      post: function () {
        return {
          end: function (callback) {
            callback(400, { ok: false, body: { message: 'An expected error occured.' }});
          }
        }
      }
    });

    var Reflux = require('reflux');

    var SuccessStore = Reflux.createStore({
      listenables: Actions,
      onLoginCompleted: function() {
        should.fail('Expected the login action to fail.');
      },
      onLoginFailed: function(err, response) {
        expect(err).toBe(400);
        expect(response.message).toBe('An expected error occured.');
        done();
      }
    });

    Actions.login('fakeUser', 'fakePassword');
  });
});