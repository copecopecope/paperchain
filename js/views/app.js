var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#daily',

  initialize: function() {
    //this.collection = new app.Entries( initialEntries );
    
    this.listenTo(app.Entries, 'add', this.addOneToView);
    this.listenTo(app.Entries, 'reset', this.addAllToView);
    this.listenTo(app.Entries, 'all', this.render);

    app.Entries.fetch();
  },

  events: {
    'click #create':'createEntry',
    'click #deleteAll':'deleteAll'
  },

  createEntry: function(e) {
    e.preventDefault();

    var formData = {};
    $('#addEntry').children('input').each(function (i, el) {
      if( $(el).val() != '')
      {
        formData[el.id] = $(el).val();
      }
    });

    formData['publishedDate'] = $.datepicker.formatDate('D M d', new Date());

    app.Entries.create(formData);
  },

  deleteAll: function(e) {
    e.preventDefault();

    app.Entries.each(function(entry) {
      entry.destroy();
    }, this);

  },

  render: function() {
  },

  addOneToView: function(entry) {
    var entryView = new app.EntryView({ model: entry });
    $('#entries').append( entryView.render().el );
  },

  addAllToView: function() {
    $('#entries').html('');
    app.Entries.each(this.addOneToView, this);
  }

});
