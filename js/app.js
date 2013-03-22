var app = app || {};

$(function() {

  var demoEntries = [
    { title: 'A Story', publishedDate: 'Wed Mar 20', contents: 'This is not an interesting story.' },
    { title: 'A Poem', publishedDate: 'Tue Mar 19', contents: 'This is a haiku...?' },
    { title: 'Sample', publishedDate: 'Mon Mar 18', contents: 'Sample story text' },
    { title: 'Sample Plus', publishedDate: 'Sun Mar 17', contents: 'Sample story text with some <b>bold</b> text.' }
  ];

  new app.AppView( demoEntries );

});
