import DS from 'ember-data';
import { Model } from 'ember-pouch';

export default Model.extend({
  name       : DS.attr('string'),
  incidentDate : DS.attr('date'),
  location: DS.attr('string'),
  summary: DS.attr('string', {defaultValue: ''})
});