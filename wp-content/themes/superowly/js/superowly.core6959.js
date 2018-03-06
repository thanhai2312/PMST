;(function($){

	'use strict';

	$(function(){

	$('.current-menu-item').addClass('current');
	$('.current_page_parent').addClass('current');
	$('.sp-navigation>.current_page_ancestor').addClass('current');
	$('.menu-item-has-children').addClass('dropdown');
	$("#main-navigation ul.sub-menu").wrap("<div class='sub-menu-wrap'></div>");
	$("#main-navigation ul.children").wrap("<div class='sub-menu-wrap'></div>");
	$('.sub-menu-wrap .sub-menu-wrap').addClass('sub-menu-inner');
	$('.sub-menu-wrap .menu-item-has-children').addClass('sub');
	$('.widget_meta ul').addClass('info-links type2');
	$('.widget_archive ul').addClass('info-links type2');
	$('.widget_categories ul').addClass('info-links type2');
	$('.widget_nav_menu ul').addClass('info-links type2');
	$('.widget_pages ul').addClass('info-links type2');
	$('.widget_recent_entries ul').addClass('info-links type2');
	$('.widget_product_categories ul').addClass('info-links type2');
	$('.widget_recent_comments ul').addClass('info-links type2 comment-type');

	 $(document).ready( function() {
		 // popup

		$('.share_popup').on('click', function() {

	        $('#share_popup_holder').fadeIn("slow");
	        
	    });

	    $(document).mouseup(function (e) {

		    var container = $("#share_popup_holder");
		    if (container.has(e.target).length === 0){
		        container.fadeOut("slow");
		    }

		});
	 });	 
		 
	$(window).on("load",function(){	
	
		/* ---------------------------------------------------- */
        /*	Gallery carousel									*/
        /* ---------------------------------------------------- */

	  	var pageCarousel = $('.owl-carousel');

		if(pageCarousel.length){

			$('.owl-carousel').not('#thumbnails').each(function(){
	
				/* Max items counting */
				var max_items = $(this).data('max-items');
				var tablet_items = max_items;
				if(max_items > 1){
					tablet_items = max_items - 1;
				}
				var mobile_items = 1;

				var autoplay_carousel = $(this).data('autoplay');
				var autoplay_timeout = 3000;
				if( $(this).data('timeout') ) {
				autoplay_timeout = $(this).data('timeout');
				}

				var center_carousel = $(this).data('center');

				var item_margin = $(this).data('item-margin');
				
				/* Install Owl Carousel */
				$(this).owlCarousel({
				    smartSpeed : 450,
				    nav : true,
				    loop  : true,
				    autoplay : autoplay_carousel,
				    center: center_carousel,
				    autoplayTimeout: autoplay_timeout,
				    navText : false,
				    margin: item_margin,
				    lazyLoad: true,
				    rtl: $.mad_core.SUPPORT.ISRTL ? true : false,
				    responsiveClass:true,
				    responsive : {
				        0:{
				            items:mobile_items
				        },
				        481:{
				            items:tablet_items
				        },
				        992:{
				            items:max_items
				        }
				    }
				});


			});

			$('.custom-owl-prev').on('click',function(){

				$('.owl-carousel').trigger('prev.owl.carousel');

				return false;

			});

			$('.custom-owl-next').on('click',function(){

				$('.owl-carousel').trigger('next.owl.carousel');

				return false;

			});

			if($('#thumbnails').length){
				$('#thumbnails').each(function(){
					
					/* Max items counting */
					var data = $(this).data();
					var max_items = $(this).data('max-items');
					var tablet_items = max_items;
					if(max_items > 1){
						tablet_items = max_items - 1;
					}
					var mobile_items = 1;

					var autoplay_carousel = $(this).data('autoplay');
					
					$(this).owlCarousel({
						items : max_items,
						URLhashListener : false,
						navSpeed : 800,
						nav : false,
						loop : false,
						rtl: $.mad_core.SUPPORT.ISRTL ? true : false,
						navText:false,
						responsive : {
					        0:{
					            items:tablet_items
					        },
					        481:{
					            items:max_items
					        },
					        1200:{
					            items:max_items
					        }
					    }
				    });
				});
			    
			}
		}
		
		
		/* ---------------------------------------------------- */
		/*	Countdown											*/
		/* ---------------------------------------------------- */

		$('.countdown').each(function(){
			var $this = $(this),
				endDate = $this.data(),
				until = new Date(
					endDate.year,
					endDate.month || 0,
					endDate.day || 1,
					endDate.hours || 0,
					endDate.minutes || 0,
					endDate.seconds || 0
				);
			// initialize
			$this.countdown({
				until : until,
				format : 'dHMS',
				labels : ['years', 'month', 'weeks', 'days', 'hours', 'min', 'sec']
			});
		});

	});	
		
		

		/* ---------------------------------------------------- */
        /*	Tabs												*/
        /* ---------------------------------------------------- */

        $(window).on("load",function(){

        	var tabs = $('.tabs-section');
			if(tabs.length){
				tabs.tabs({
					beforeActivate: function(event, ui) {
				        var hash = ui.newTab.children("li a").attr("href");
				   	},
					hide : {
						effect : "fadeOut",
						duration : 450
					},
					show : {
						effect : "fadeIn",
						duration : 450
					},
					updateHash : false
				});
			}

			if($('ul.smooth_tabs').length){
				$('ul.smooth_tabs li:first').addClass('ui-tabs-active');

				$('ul.smooth_tabs li a').on("click", function(){
				   $('ul.smooth_tabs').find('li').removeClass('ui-tabs-active');
				   $(this).parent('li').addClass("ui-tabs-active");
				  
				   var x = $(this).attr('href');
				   $(".smooth_item").removeClass('current_catalog_item');
				   $(".tabs_content ").children('h3').removeClass('current_catalog_item');
				   $(x).addClass('current_catalog_item');
				});
			}

        });

		/* ---------------------------------------------------- */
        /*	Loader												*/
        /* ---------------------------------------------------- */

		if ( $('body').hasClass('loading-overlay-1') ) {
			$("body").queryLoader2({
				backgroundColor: '#fff',
				barColor : '#f05a21',
				barHeight: 4,
				deepSearch:true,
				minimumTime:1000,
				onComplete: function(){
					$(".loader").fadeOut('200');
				}
			});
		}

		/* ---------------------------------------------------- */
        /*	Sticky menu											*/
        /* ---------------------------------------------------- */
		if ( $('header').hasClass('header-sticky-1') ) {
			$('body').Temp({
				sticky: true
			});
		}


		/* ---------------------------------------------------- */
        /*	Fancybox											*/
        /* ---------------------------------------------------- */

        if($('.portfolio-holder').length){

        	if($.fancybox){

	        	$.fancybox.defaults.beforeShow = function () {

					var className = '';

			        if (this.title) {
			            // New line
			            this.title += '<br />';
			            this.title += '<div class="fancybox-share-buttons">';

			        }
			        else{
			        	this.title += '<div class="fancybox-share-buttons only">';
			        }			        

	    			//this.title += '<a href="https://twitter.com/share" class="twitter-share-button" data-count="none" data-url="' + this.href + '">Tweet</a> ';

	        		// Add FaceBook like button
	    			this.title += '<iframe src="//www.facebook.com/plugins/like.php?href=http://fancyapps.com/fancybox/demo/1_b.jpg&amp;layout=button_count&amp;show_faces=true&amp;width=500&amp;action=like&amp;font&amp;colorscheme=light&amp;height=23" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:110px; height:23px;" allowtransparency="true"></iframe>';

	    			this.title += '</div>';

				};

				$.fancybox.defaults.afterShow = function(){
					// Render tweet button
					//twttr.widgets.load();
				};

				$.fancybox.defaults.helpers.title = {
					type: 'inside'
				}

	        }

        }

		if($.fancybox){

			var $fancyBox = $('.fancybox');

			$.fancybox.defaults.padding = 0;
			$.fancybox.defaults.wrapCSS = 'custom-lightbox';

			$.fancybox.defaults.helpers.thumbs = {
				width: 80,
				height: 80
			}

			if($fancyBox.length){
				$fancyBox.fancybox();
			}

			var fancyboxMedia = $('.fancybox-media');

			if(fancyboxMedia.length){

				fancyboxMedia.fancybox({
					openEffect  : 'none',
					closeEffect : 'none',
					helpers : {
						media : {}
					}
				});

			}

		}
		
		/* ---------------------------------------------------- */
        /*	Price Scale										    */
        /* ---------------------------------------------------- */

		var slider;
		if($('#price').length){
			slider = $('#price').slider({ 
		 		animate: true,
				range: true,
				values: [ 20, 400 ],
				min: 0,
				max: 500,
				slide : function(event ,ui){
					$('.range-values').find('.first-limit').val('$' + ui.values[0]);
					$('.range-values').find('.last-limit').val('$' + ui.values[1]);
				}
			});
		}
		if($('#distance').length){
			slider = $( "#distance" ).slider({
				animate: true,
			    value: 0,
			    min: 0,
			    max: 1000,
			    step: 1,
			    slide: function( event, ui ) {
			       $( "#amount" ).val(  ui.value + " km" );
			       $( "#total" ).val(  "Total: $ " + ui.value );
			    }
		    });
		    $( "#amount" ).val( $( "#distance" ).slider( "value" ) + " km" );
		    $( "#total" ).val( "Total: $ " +  $( "#distance" ).slider( "value" ) );
		}
		

		/* ---------------------------------------------------- */
        /*	Accordion & Toggle									*/
        /* ---------------------------------------------------- */

		var aItem = $('.accordion:not(.toggle) .accordion-item'),
			link = aItem.find('.a-title'),
			$label = aItem.find('label'),
			aToggleItem = $('.accordion.toggle .accordion-item'),
			tLink = aToggleItem.find('.a-title');

			aItem.add(aToggleItem).children('.a-title').not('.active').next().hide();

		function triggerAccordeon($item) {
			$item
			.addClass('active')
			.next().stop().slideDown()
			.parent().siblings()
			.children('.a-title')
			.removeClass('active')
			.next().stop().slideUp();
		}


		if ($label.length) {
			$label.on('click',function(){
				triggerAccordeon($(this).closest('.a-title'))
			});
		} else {
			link.on('click',function(){
				triggerAccordeon($(this))
			});
		}

		tLink.on('click',function(){
			$(this).toggleClass('active')
			.next().stop().slideToggle();

		});

		/* ---------------------------------------------------- */
        /*	Isotope												*/
        /* ---------------------------------------------------- */

		$( window ).on('load', function() {

		  	var $container = $('.isotope');
		    // filter buttons
		    $('#filters button').on('click', function(){
		    	var $this = $(this);
		        // don't proceed if already selected
		        if ( !$this.hasClass('is-checked') ) {
		          $this.parents('#options').find('.is-checked').removeClass('is-checked');
		          $this.addClass('is-checked');
		        }
				var selector = $this.attr('data-filter');
				$container.isotope({  itemSelector: '.item', filter: selector });
				return false;
		    });

		    $.mad_core.isotope();
		     
		});

		/* ---------------------------------------------------- */
        /*	Quantity											*/
        /* ---------------------------------------------------- */

		var q = $('.quantity');

		q.each(function(){
			var $this = $(this),
				button = $this.children('button'),
				input = $this.children('input[type="text"]'),
				val = +input.val();

			button.on('click',function(){
				if($(this).hasClass('qty-minus')){
					if(val === 1) return false;
					input.val(--val);
				}
				else{
					input.val(++val);
				}
			});
		});

		/* ---------------------------------------------------- */
		/*	Animate a regular anchor navigation					*/
		/* ---------------------------------------------------- */

	    if ($('a.animated').length) {

	    	$('body').localScroll({
	           hash: true,
	           filter: '.animated',
	           onBefore: function(){
                 this.offset = 0;
               }
	        });

	    }

		/* ---------------------------------------------------- */
		/*	Sticky footer										*/
		/* ---------------------------------------------------- */

		$(window).on("load resize",function(){

			var BoxeeBox = $('#footer'); /* cache the selector */

		    if ($(window).width() > 1281) {

		        $('#content').css({ 'margin-bottom': BoxeeBox.outerHeight() });

		    } else{

		    	$('#content').css({ "margin-bottom": "0" });

		    }

		});

	});

})(jQuery);