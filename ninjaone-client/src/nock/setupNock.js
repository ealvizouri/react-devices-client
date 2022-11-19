import nock from 'nock';
import { nockDevicesResponse } from './nockReplies';

nock('http://localhost:3000')
    .defaultReplyHeaders({
      'access-control-allow-origin': '*',
      'access-control-allow-credentials': 'true' 
    })
    .persist()
    .get(/devices\/?.*/)
    .reply(200, nockDevicesResponse)
    .get(/devices\/[a-zA-Z0-9]+/)
    .reply(200, nockDevicesResponse[0]);