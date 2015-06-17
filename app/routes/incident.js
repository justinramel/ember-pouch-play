import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    return this.store.find('incident', params.incident_id);
  },
  actions: {
    save: function() {
      this.modelFor('incident').save();
    }
  }
});