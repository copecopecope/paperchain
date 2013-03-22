var app = app || {};

app.Entry = Backbone.Model.extend({
  defaults: {
    title: 'No title',
    author: 'Unknown',
    contents: 'Default content'
  },

  getWordCount: function() {
    var htmlData = this.get('contents');
    var foo = document.createElement('div');
    foo.innerHTML = htmlData;
    var text = foo.innerText;

    if(text === '') {
      return 0;
    } else {
      return $.trim(text).split(/[ \n]/).length;
    }
  },

});
