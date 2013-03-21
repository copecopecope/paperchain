/**
 * jQuery.textareaCounter
 * Version 1.0
 * Copyright (c) 2011 c.bavota - http://bavotasan.com
 * Dual licensed under MIT and GPL.
 * Date: 10/20/2011
**/

/* Modified 03/20/2013 to simply list num words */

(function($){
  $.fn.textareaCounter = function() {
    // setting the defaults
    // $("textarea").textareaCounter({ limit: 100 });
 
    // and the plugin begins
    return this.each(function() {
      var obj, text, wordcount;
      
      obj = $(this);
      text = obj.val();
      if(text === "") {
        wordcount = 0;
      } else {
        wordcount = $.trim(text).split(" ").length;
      }
      obj.after('<span style="font-size: 11px; clear: both; margin-top: 3px; display: block;" id="counter-text">'+ wordcount +' words</span>');

      obj.keyup(function() {
          text = obj.val();
          if(text === "") {
            wordcount = 0;
          } else {
            wordcount = $.trim(text).split(" ").length;
          }
          
          $("#counter-text").html(wordcount +' words'); 
      });
    });
  };
})(jQuery);

(function($){
  $.fn.divCounter = function() {
    return this.each(function() {
      var text, wordcount;

      text = $(this).text();
      if(text === "") {
        wordcount = 0;
      } else {
        wordcount = $.trim(text).split(" ").length;
      }

      $(this).after('<span style="font-size: 11px; clear: both; margin-top: 3px; display: block;" id="counter-text">'+ wordcount +' words</span>');
    });
  };
})(jQuery);

