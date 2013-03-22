var app = app || {};

app.EntryView = Backbone.View.extend({
  tagName: 'div',

  entry_template: _.template( $('#entry-template').html() ),

  initialize: function() {
    this.listenTo(this.model, 'destroy', this.remove);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'deselect', this.deselectEntry);
    this.listenTo(this.model, 'select', this.selectEntry);
  },

  events: {
    "click": "displayContents",
    "click #delete": "delete",
  },

  displayContents: function() {
    console.log('displayContents');
    this.model.trigger('viewing', this.model);

    //highlight selected entry
    app.Entries.each(function(entry) {
      entry.trigger('deselect');
    });

    this.model.trigger('select');
  },

  delete: function() {
    this.model.destroy();
  },

  deselectEntry: function() {
    this.$el.removeClass('selectedEntry');
  },

  selectEntry: function() {
    this.$el.addClass('selectedEntry');
  },

  render: function() {
    this.$el.html( this.entry_template( this.model.toJSON() ) );
    return this;
  }
  
});
