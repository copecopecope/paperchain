var app = app || {};

app.ContentsView = Backbone.View.extend({
  el: '#contents-container',

  show_template: _.template( $('#contents-show-template').html() ),
  edit_template: _.template( $('#contents-edit-template').html() ),

  events: {
    "click #edit" : "editContents",
    "click #save" : "saveContents",
  },

  //TODO: fix so that only one contents view at a time
  //perhaps by initializing contents view in app controller and switching entry whenever??

  editContents: function() {
    console.log('calling editContents');
    this.options.editable = true;
    this.render();
  },

  saveContents: function() {
    console.log('calling saveContents');
    var value = this.$('.contents-edit').val();
    this.options.editable = false;
    console.log('SAVING - ' + value);
    this.options.entry.save({ contents: value });
    this.render();
  },

  render: function() {
    if (this.options.editable) {
      this.$el.html( this.edit_template( this.options.entry.toJSON() ) );
      this.$('textarea').textareaCounter();
    } else {
      this.$el.html( this.show_template( this.options.entry.toJSON() ) );
      this.$('div').divCounter();
    }
    return this;
  }

});
