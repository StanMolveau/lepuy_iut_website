$(document).ready(function() {
	$('.scrollTo').click( function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
	});
});
function show(element){

}
$( document ).ready(function() {
	$(".link_list").hover(
		function(){
		$(this).children('.menu_souselts').show(1000);
		},
		function(){
		$(this).children('.menu_souselts').hide(1000);	
		}
	);
	$(".link_accueil").click(function(){
		$(".sousmenu-dut").hide("slow");
		$(".sousmenu-licence").hide("slow");
		$(".sousmenu-infos").hide("slow");
		$("#accueil").show();
		$("#dut").hide();
		$("#licence").hide();
		$("#infos").hide();
	});
	$(".link_dut").click(function(){
		$(".sousmenu-dut").show("slow");
		$(".sousmenu-licence").hide("slow");
		$(".sousmenu-infos").hide("slow");
		$("#accueil").hide();
		$("#dut").show();
		$("#licence").hide();
		$("#infos").hide();
	});
	$(".link_licence").click(function(){
		$(".sousmenu-dut").hide("slow");
		$(".sousmenu-licence").show("slow");
		$(".sousmenu-infos").hide("slow");
		$("#accueil").hide();
		$("#dut").hide();
		$("#licence").show();
		$("#infos").hide();
	});
	$(".link_infos").click(function(){
		$(".sousmenu-dut").hide("slow");
		$(".sousmenu-licence").hide("slow");
		$(".sousmenu-infos").show("slow");
		$("#accueil").hide();
		$("#dut").hide();
		$("#licence").hide();
		$("#infos").show();
	});

});