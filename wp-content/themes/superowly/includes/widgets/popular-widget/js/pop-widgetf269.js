(function (j) {

	if (typeof popwid == "undefined") return;

	j.post(superowly_global_vars.ajaxurl, {
		postid: popwid.postid,
		action: "popwid_page_view_count"
	});

})(jQuery);
