import nock from 'nock';
import { nockDevicesResponse } from './nockReplies';

/**
 * This file contains the mocking server with nock
 */

nock('http://localhost:3000')
    .defaultReplyHeaders({
      'access-control-allow-origin': '*',
      'access-control-allow-credentials': 'true' 
    })
    .persist()
    // Mocking http://localhost:3000/devices/
    .get(/devices\/?.*/)
    .reply(200, nockDevicesResponse)
    // Mocking http://localhost:3000/devices/[a-zA-Z0-9_-]+
    .get(/devices\/[a-zA-Z0-9_-]+/)
    .reply(200, nockDevicesResponse[0]);