var app = app || {};

var Entries = Backbone.Collection.extend({
  model: app.Entry,
  localStorage: new Backbone.LocalStorage('entries-backbone')
});

app.Entries = new Entries();
