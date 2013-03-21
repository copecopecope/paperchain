var app = app || {};

app.EntryView = Backbone.View.extend({
  tagName: 'div',

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.removeIt);
    this.listenTo(this.model, 'change', this.render);
  },

  removeIt: function() {
    console.log(this.$el);
    this.remove();
  },

  render: function() {
    this.el = ich.entry(this.model.toJSON());
    return this;
  }
  
});
