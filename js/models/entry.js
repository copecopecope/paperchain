var app = app || {};

app.Entry = Backbone.Model.extend({
  defaults: {
    title: 'No title',
    author: 'Unknown',
    contents: ''
  },

});
