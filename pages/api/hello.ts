import {IncomingMessage, ServerResponse} from 'http';

export default (req:  IncomingMessage, res: ServerResponse) => {
  res.statusCode = 200

  res.end({name: 'test'});
  
}
