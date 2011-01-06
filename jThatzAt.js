(function ($){

  $.fn.thatzAt = function (options) {

    // default settings
    var settings = {
      selector: '.thatzat',
      regex: /todo/i
    };

    return this.each (function () {

      if ( options ) { 
        $.extend( settings, options );
      }

      if (settings.selector != false) {
        $(settings.selector, this).each (function () {
          var $this = $(this);
          // TODO encore URL
          $this.wrap ('<a href="http://thatz.at/'+$this.html()+'" target="_blank" />');
        });
      }

    });

  };
}) (jQuery);
