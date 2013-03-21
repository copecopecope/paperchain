var app = app || {};

app.EntryView = Backbone.View.extend({
  tagName: 'div',

  entry_template: _.template( $('#entry-template').html() ),

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
  },

  events: {
    "click": "displayContents",
  },

  displayContents: function() {
    var contentsView = new app.ContentsView({ entry: this.model, editing: false });
    contentsView.render();
  },

  render: function() {
    this.$el.html( this.entry_template( this.model.toJSON() ) );
    return this;
  }
  
});
