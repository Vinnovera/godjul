!function(w, d, $) {

	var
		iAmSuper    	= false,
		iAmDouble	 	= false,
		tabWrapperClass = '.tab-bar',
		tabClass		= '.tab',
		tabClass    	= tabWrapperClass + ' ' +tabClass,
		$tabs       	= $(tabClass); //for cloneRandomTab

	$(d).on('ready', function() {
		sortTabs();
		bindEvents();
		positionTabBar(0);
		resizeTabBar();
	});

	function bindEvents() {
		$(d).on('click', '.add-new', onAddNewClick);
		$(d).on('click', '.close-all', onCloseAllClick);
		$(d).on('click', '.close-all-but-active', onKeepActiveClick);
		$(d).on('click', '.close-all-but-pinned', onKeepPinnedClick);
		$(d).on('click', 'button.navigate-right', onNextClick);
		$(d).on('click', 'button.navigate-left', onPrevClick);
		//$(d).on('click', 'button.toggle-context-menu', onContextMenuClick);

		//Tab clicks
		$(d).on('click', '.tab-content', onTabContentClick);
		$(d).on('click', '.close', onCloseClick);
		$(d).on('click', '.pin', onPinClick);
	}


	
}(window, document, jQuery);