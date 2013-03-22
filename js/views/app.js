var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#daily',

  initialize: function( demoEntries) {
    this.demoEntries = demoEntries;

    this.contentsView = new app.ContentsView({ entry: null, editable: false });
    this.contentsView.render();

    this.$stats = this.$('#stats');
    
    this.listenTo(app.Entries, 'add', this.addOneToView);
    this.listenTo(app.Entries, 'reset', this.addAllToView);
    this.listenTo(app.Entries, 'all', this.render);

    app.Entries.fetch();
  },

  stats_template: _.template( $('#stats-template').html() ),

  events: {
    'click #create':'createEntry',
    'click #deleteAll':'deleteAll',
    'click #loadSample':'loadSample'
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

    while(app.Entries.models.length > 0) {
      app.Entries.models[0].destroy();
    }
    // app.Entries.each(function(entry) {
    //   entry.destroy();
    // }, this);

  },

  loadSample: function(e) {
    this.deleteAll(e);
    _.each(this.demoEntries, function(entryData) {
      console.log(entryData);
      app.Entries.create(entryData);
    });
  },

  calculateWordCount: function() {
    var totalwordcount = 0;
    var pagesinbook = 0;
    app.Entries.each( function(entry) {
      var wordcount = entry.getWordCount();
      totalwordcount += wordcount;
      pagesinbook += Math.ceil(wordcount/250);
    }, this);
    return [totalwordcount, pagesinbook];
  },

  render: function() {
    var wordcalc = this.calculateWordCount();
    var totalwordcount = wordcalc[0];
    var pagesinbook = wordcalc[1];

    if (app.Entries.length) {
      this.$stats.show();

      this.$stats.html(this.stats_template({
        totalwordcount: totalwordcount,
        pagesinbook: pagesinbook,
      }));
    } else {
      this.$stats.hide();
    }

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
