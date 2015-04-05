$( document ).ready(function() {
	function toggleMenus() {
		$("#accueil").toggleClass("hidden");
		$("#dut").toggleClass("hidden");
		$("#licence").toggleClass("hidden");
	}
	function resizeMenus(){
		$(".menu-accueil").removeClass("col-md-3");
		$(".menu-dut").removeClass("col-md-3");
		$(".menu-licence").removeClass("col-md-3");
		$(".menu-infos").removeClass("col-md-3");
		$(".menu-accueil").addClass("col-md-1");
		$(".menu-dut").addClass("col-md-1");
		$(".menu-licence").addClass("col-md-1");
		$(".menu-infos").addClass("col-md-1");
	}
	$(".menu-accueil").click(function(){
		resizeMenus();
		$(".wrap1").addClass("pull-right");
		$(".wrap2").addClass("pull-right");
		$(".wrap3").addClass("pull-right");
		$("#accueil").removeClass("hidden");
		$("#dut").addClass("hidden");
		$("#licence").addClass("hidden");
		$("#infos").addClass("hidden");
		$(".sousmenu-accueil").removeClass("hidden");
		$(".sousmenu-dut").addClass("hidden");
		$(".sousmenu-licence").addClass("hidden");
		$(".sousmenu-infos").addClass("hidden");
	});
	$(".menu-dut").click(function(){
		resizeMenus();
		$(".wrap1").removeClass("pull-right");
		$(".wrap2").addClass("pull-right");
		$(".wrap3").addClass("pull-right");
		$("#accueil").addClass("hidden");
		$("#dut").removeClass("hidden");
		$("#licence").addClass("hidden");
		$("#infos").addClass("hidden");
		$(".sousmenu-accueil").addClass("hidden");
		$(".sousmenu-dut").removeClass("hidden");
		$(".sousmenu-licence").addClass("hidden");
		$(".sousmenu-infos").addClass("hidden");
	});

	$(".menu-licence").click(function(){
		resizeMenus();
		$(".wrap1").removeClass("pull-right");
		$(".wrap2").removeClass("pull-right");
		$(".wrap3").addClass("pull-right");
		$("#accueil").addClass("hidden");
		$("#dut").addClass("hidden");
		$("#licence").removeClass("hidden");
		$("#infos").addClass("hidden");
		$(".sousmenu-accueil").addClass("hidden");
		$(".sousmenu-dut").addClass("hidden");
		$(".sousmenu-licence").removeClass("hidden");
		$(".sousmenu-infos").addClass("hidden");
	});
	$(".menu-infos").click(function(){
		resizeMenus();
		$(".wrap1").removeClass("pull-right");
		$(".wrap2").removeClass("pull-right");
		$(".wrap3").removeClass("pull-right");
		$("#accueil").addClass("hidden");
		$("#dut").addClass("hidden");
		$("#licence").addClass("hidden");
		$("#infos").removeClass("hidden");
		$(".sousmenu-accueil").addClass("hidden");
		$(".sousmenu-dut").addClass("hidden");
		$(".sousmenu-licence").addClass("hidden");
		$(".sousmenu-infos").removeClass("hidden");
	});
});
$(document).ready(function() {
	$('.scrollTo').click( function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});
});
