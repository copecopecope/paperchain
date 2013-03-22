/**
 * jQuery.textareaCounter
 * Version 1.0
 * Copyright (c) 2011 c.bavota - http://bavotasan.com
 * Dual licensed under MIT and GPL.
 * Date: 10/20/2011
**/

/* Modified 03/20/2013 to simply list num words */

(function($){
  $.fn.wysihtml5Counter = function() {
    // setting the defaults
    // $("textarea").textareaCounter({ limit: 100 });
 
    // and the plugin begins
    return this.each(function() {
      var obj, text, wordcount;
      
      obj = this;
      var htmlData = $("#contents-edit").val();
      var foo = document.createElement('div');
      foo.innerHTML = htmlData;
      text = foo.innerText;

      console.log('text ' + text);
      if(text === "") {
        wordcount = 0;
      } else {
        wordcount = $.trim(text).split(/[ \n]/).length;
      }
      $('.wysihtml5-sandbox').after('<span style="font-size: 11px; clear: both; margin-top: 3px; display: block;" id="counter-text">'+ wordcount +' words</span>');

      
    });
  };
})(jQuery);

(function($){
  $.fn.divCounter = function() {
    return this.each(function() {
      var text, wordcount;
      console.log('in divcounter');

      var htmlData = $(this).html();
      var foo = document.createElement('div');
      foo.innerHTML = htmlData;
      text = foo.innerText;

      console.log(text);
      if(text === "") {
        wordcount = 0;
      } else {
        wordcount = $.trim(text).split(/[ \n]/).length;
      }

      $(this).after('<span style="font-size: 11px; clear: both; margin-top: 3px; display: block;" id="counter-text">'+ wordcount +' words</span>');
    });
  };
})(jQuery);

