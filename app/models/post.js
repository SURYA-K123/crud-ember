import Model, { attr, hasMany } from '@ember-data/model';

export default class PostModel extends Model {
  @attr('string') title;
  @attr('string') content;
  @hasMany('comment') comments;
}
