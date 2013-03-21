var app = app || {};

$(function() {

  var entries = [
  { title: 'A Poem', contents: 'This is a poem.', author: 'Alex' },
  { title: 'A Story', contents: 'It was a dark and stormy night.', author: 'Cope'},
  { title: 'An Essay', contents: 'How thoughtful.', author: 'Alex'},
  ];

  new app.AppView( entries );

});
