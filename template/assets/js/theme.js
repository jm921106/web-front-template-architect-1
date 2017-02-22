/* ========================================================================

ARCHITEKT: theme.js
Main Theme JS file

@Author: Andrew ch 
@URL: http://andrewch.eu
 
=========================================================================
 */

'use strict';


jQuery(document).ready(function( $ ) {

	// Loader
	//===================

	$(window).load(function(){
		setTimeout(function(){
			$('.loading').addClass("hidden");
			$('.loader-logo').addClass("slideOutUp");
			$('.loader').addClass("slideOutUp");
			$('body').addClass("body-animated");
		}, 900);
	});

	// Page Transition
	//===================

	$('.transition').on('click', function(e) {
		$('body').css('display', 'none');

		$('body').fadeIn(5000);
		$('.link').on('click', function(e) {
			event.preventDefault();
			newLocation = this.href;

			$('body').fadeOut(50000, newpage);
		});

		function newpage() {
			window.location = newLocation;
		}

	});
	
	// Sidebar Menu
	//===================

	$('.toggle-menu').jPushMenu();

	// Hamburger Animation
	//===================

	$('#nav-toggle').on('click', function (event) {
		$(this).toggleClass('active');
	});

	// Masonry
	//===================
	$(window).load(function(){
		$('.masonry-grid').isotope({
			itemSelector: '.masonry-grid-item'
		});
	});
	// Portfolio Overlay effect
	//===================

	$('.masonry-grid .masonry-grid-item, .grid-wrap .grid-item').hover(
		function() {
			TweenMax.to($(this).find('h2'), .4, {opacity: '1', y: '0', delay:.8, ease: Quart.easeOut});
			TweenMax.to($(this).find('.masonry-item-overlay'), .3, {opacity: '1',top:30, left:40,right:40, bottom:30, ease: Quart.easeOut});
			TweenMax.to($(this).find('p'), .4, {opacity: '1', y: '0', delay: .9, ease: Quart.easeOut});
			TweenMax.to($(this).find('span'), .4, {opacity: '1', y: '15', width:40, delay: 1.2, ease: Quart.easeOut});
	},
		function() {
			TweenMax.to($(this).find('h2'), .4, {opacity: '0', y: '-30', delay: .3, ease: Quart.easeOut});
			TweenMax.to($(this).find('.masonry-item-overlay'), .3, {opacity: '0',top:'100%', left:40,right:40, bottom:30, delay:.5, ease: Quart.easeOut});
			TweenMax.to($(this).find('p'), .4, {opacity: '0', y: '-30', delay:.4, ease: Quart.easeOut});
			TweenMax.to($(this).find('span'), .4, {opacity: '1', y: '15', width:0, delay: .0, ease: Quart.easeOut});
	});

	// Side menu effect
	//===================

	$('#nav-toggle').on('click', function (event) {
	  var clicks = $(this).data('clicks');
	  if (clicks) {

		// Second state
		// ----
		
		var tl = new TimelineLite();  
		tl.set($("#cssmenu ul li"), {y:0,x:0,opacity: 0});
		tl.set($(".cbp-spmenu .logo"), {y:0,x:0,opacity: 0});
		tl.staggerTo($("#cssmenu ul li"),.5, {y:0,opacity:0, repeat:0,delay: .1, ease: Power3.easeOut });
		tl.staggerTo($(".cbp-spmenu .logo"),.2, {y:0,opacity:0, repeat:0,delay: 0, ease: Power3.easeOut }, .00);

	  } else {
		// First state
		// ----
		var tl = new TimelineLite();  
		tl.set($("#cssmenu ul li"), {y:30,x:0,opacity: 0});
		tl.set($(".cbp-spmenu .logo"), {y:0,x:0,opacity: 0});
		tl.delay(.6);
		tl.staggerTo($(".cbp-spmenu .logo"),.2, {y:0,opacity:1, repeat:0,delay: 0, ease: Power3.easeOut }, .00);
		tl.staggerTo($("#cssmenu ul li"),.8, {y:0,opacity:1, repeat:0,delay: 0, ease: Power3.easeOut }, .05);
		  // Something you want delayed.
	  }
	  
	  $(this).data("clicks", !clicks);
	});

	// Countdown
	//===================

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// On Scroll Animations
	//===================

	function onScrollInit( items, trigger ) {
		items.each( function() {
			var osElement = $(this),
				osAnimationClass = osElement.attr('data-os-animation'),
				osAnimationDelay = osElement.attr('data-os-animation-delay');
		 
			osElement.css({
				'-webkit-animation-delay':  osAnimationDelay,
				'-moz-animation-delay':     osAnimationDelay,
				'animation-delay':          osAnimationDelay
			});
		 
			var osTrigger = ( trigger ) ? trigger : osElement;
		 
			osTrigger.waypoint(function() {
				osElement.addClass('animated').addClass(osAnimationClass);
			},{
				triggerOnce: true,
				offset: '90%'
			});
		});
	}

	setTimeout(function() {
		onScrollInit( $('.os-animation') );
		onScrollInit( $('.staggered-animation'), $('.staggered-animation-container') );
	}, 600);
	
	
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		image: {
			verticalFit: true,
			titleSrc: function(item) {
				return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
			}
		},
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
		
	});

	// Back to top button
	//===================

	$('.go-top').on('click', function (event) {
		event.preventDefault();
		{$('html, body').velocity('scroll',{duration: 1000, offset:0});}
	});

	// Scroll to section
	//===================

	$(function() {
	  $('.scroll-down-icon').on('click', function (event) {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html,body').animate({
			  scrollTop: target.offset().top
			}, 700);
			return false;
		  }
		}
	  });
	});

});
