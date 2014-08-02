;(function($){
    $.fn.extend({
        placeholder: function(options) {
            this.defaultOptions = {};

            var settings = $.extend({}, this.defaultOptions, options);

            return this.each(function() {
                var $this = $(this);

            	$this.focus(function() {
 					$this.prev().hide();
				});

            	$this.blur(function() {

            		if($this.val().length > 0) {
    					$this.prev().hide();
            		}
            		else if($this.val().length === 0) {
        				$this.prev().show();	
            		}
            		
				});

            });
        }
    });
})(jQuery);