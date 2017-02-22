/* ========================================================================

ARCHITEKT: slider-initialization.js

Revolution Slider Initialization File.

We use a second file to init revolution slider, since we don't need to load all the revolution-slider
files on all pages, for the sake of speed.

---

@Author: Andrew ch 
@URL: http://andrewch.eu
 
=========================================================================
 */

jQuery(document).ready(function( $ ) {

	//Home Slider
	//===================

	 $("#rev_slider_1").revolution({
		sliderType:"standard",
		//sliderLayout:"fullscreen",
		delay:6000,
		gridwidth:1300,
		gridheight:600,
		//fullScreenOffsetContainer: ".main-navigation",
		minHeight:600,	
		responsiveLevels:[1240,1024,778,480],
		gridwidth:[1350,820,1300,2500],
		gridheight:[600,600,1150,4350],
		navigation : {
			keyboardNavigation:"on", 
			keyboard_direction:"horizontal",
			mouseScrollNavigation:"off",   
			onHoverStop:"on",
			touch:{
				 touchenabled:"on",
				 swipe_treshold : 75,
				 swipe_min_touches : 1,
				 drag_block_vertical:false,
				 swipe_direction:"horizontal"
			},
			arrows: {
			 style:"metis",
			 enable:false,
			 hide_onmobile:true,
			 hide_onleave:true,
			 hide_delay:200,
			 hide_delay_mobile:1200,
			 hide_under:0,
			 hide_over:9999,
			 tmp:'',
				 left : {
						h_align:"left",
						v_align:"center",
						h_offset:40,
						v_offset:0,
				 },
				 right : {
						h_align:"right",
						v_align:"center",
						h_offset:40,
						v_offset:0
				 }
			},
			bullets: {
				style:"hermes",
				enable:true,
				hide_onmobile:false,
				hide_onleave:true,
				hide_delay:200,
				hide_delay_mobile:1200,
				hide_under:0,
				hide_over:9999,
				direction:"horizontal",
				h_align:"left",
				v_align:"bottom",
				space:2,
				h_offset:30,
				v_offset:30,
				tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'
			}
		}
	});

	// Video Hero
	//===================
	
	$("#rev_slider_2").revolution({
		sliderType:"hero",
		sliderLayout:"standard",
		delay:6000,
		gridwidth:1300,
		gridheight:600,
		//fullScreenOffsetContainer: ".main-navigation",
		minHeight:600,	
		responsiveLevels:[1240,1024,778,480],
		gridwidth:[1350,820,1300,2500],
		gridheight:[600,600,1150,4350],	
		//fullScreenOffsetContainer: ".main-navigation"
	});

	// Parallax Hero
	//===================
	
	$("#rev_slider_3").revolution({
		sliderType:"hero",
		sliderLayout:"fullscreen",
		parallax:{
			type:"mouse",
			levels:[5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],
			origo:"slidercenter",
			speed:800,
			bgparallax:"on",
			disable_onmobile:"off"
		}
	});
});
