import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('incident');
  },
  actions: {
    create: function() {
      var incident = this.store.createRecord('incident');
      incident.set('name', 'Empty');
      this.transitionTo('incident', incident.save());
    }
  }
});
