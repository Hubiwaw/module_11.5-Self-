$(document).ready(function() {
	function Button() {
		this.text = text || "Hello";
	}
	Button.prototype = {
		create: function() {
			var self = this;
			this.$element = $("<button>");
			this.$element = $(this.text);
			this.$element.click(function(){
				alert(self.text);
			});
			this.$element.appendTo($("body"));
		}
	}
	var btn1 = new Button("Hello!");
	btn1.create();
});