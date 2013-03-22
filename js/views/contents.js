var app = app || {};

app.ContentsView = Backbone.View.extend({
  el: '#contents-container',

  show_template: _.template( $('#contents-show-template').html() ),
  edit_template: _.template( $('#contents-edit-template').html() ),

  events: {
    "click #edit" : "editContents",
    "click #save" : "saveContents",
    'dblclick #contents-show' : 'editContents',
  },

  initialize: function () {
    this.listenTo(app.Entries, 'viewing', this.updateEntry);
    this.listenTo(app.Entries, 'destroy', this.empty);
  },

  editContents: function() {
    console.log('calling editContents');
    this.options.editable = true;
    this.render();
  },

  saveContents: function() {
    console.log('calling saveContents');
    var value = this.$('#contents-edit').val();
    this.options.editable = false;
    console.log('SAVING - ' + value);
    this.options.entry.save({ contents: value });
    this.render();
  },

  updateEntry: function (entry) {
    this.options.entry = entry;
    this.options.editable = false;
    this.render();
  },

  empty: function (entry) {
    if (this.options.entry == entry) {
      this.options.entry = null;
      this.options.editable = false;
      this.render();
    }
  },

  render: function() {
    if (!this.options.entry) {
      this.$el.html( this.show_template( {title: '', contents: ''} ) );
      this.$('#edit').hide();
    } else if (this.options.editable) {
      this.$el.html( this.edit_template( this.options.entry.toJSON() ) );
      this.$('#contents-edit').wysihtml5();
      this.$('#contents-edit').wysihtml5Counter();
      this.$('#edit').show();
    } else {
      this.$el.html( this.show_template( this.options.entry.toJSON() ) );
      this.$('#contents-show').divCounter();
    }
    return this;
  }

});
