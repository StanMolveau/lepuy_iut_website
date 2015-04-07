$(document).ready(function() {
	$('.scrollTo').click( function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});
var map = L.map('map').setView([45.040431, 3.881388], 13);
});

$( document ).ready(function() {
	$(".link_list").hover(
		function(){
		$(this).children('.menu_souselts').stop().show(1000);
		},
		function(){
		$(this).children('.menu_souselts').stop().hide(1000);	
		}
	);
	$(".link_accueil").click(function(){
		$(".sousmenu-dut").hide("slow");
		$(".sousmenu-licence").hide("slow");
		$(".sousmenu-infos").hide("slow");
		$("#accueil").show("slow");
		$("#dut").hide("slow");
		$("#licence").hide("slow");
		$("#infos").hide("slow");
	});
	$(".link_dut").click(function(){
		$(".sousmenu-dut").show("slow");
		$(".sousmenu-licence").hide("slow");
		$(".sousmenu-infos").hide("slow");
		$("#accueil").hide("slow");
		$("#dut").show("slow");
		$("#licence").hide("slow");
		$("#infos").hide("slow");
	});
	$(".link_licence").click(function(){
		$(".sousmenu-dut").hide("slow");
		$(".sousmenu-licence").show("slow");
		$(".sousmenu-infos").hide("slow");
		$("#accueil").hide("slow");
		$("#dut").hide("slow");
		$("#licence").show("slow");
		$("#infos").hide("slow");
	});
	$(".link_infos").click(function(){
		$(".sousmenu-dut").hide("slow");
		$(".sousmenu-licence").hide("slow");
		$(".sousmenu-infos").show("slow");
		$("#accueil").hide("slow");
		$("#dut").hide("slow");
		$("#licence").hide("slow");
		$("#infos").show("slow");
	});

});