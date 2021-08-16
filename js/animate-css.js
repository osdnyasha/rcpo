(function($) {
	$.fn.animated = function(inEffect) {
		$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
			if (dir === "down") {
					$(this).addClass(inEffect).css("opacity", "1");
			};
		}, {
			offset: "90%"
		});
	};
})(jQuery);