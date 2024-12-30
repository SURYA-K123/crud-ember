import JSONAPIAdapter from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = 'http://localhost:3001';
  namespace = 'api';
  headers = {
    'Content-Type': 'application/json',
  };
}
