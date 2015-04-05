$( document ).ready(function() {

	$(".menu-dut").click(function(){
		$(".menu-licence").toggleClass("pull-right");
		$(".menu-infos").toggleClass("pull-right");
		$("#accueil").toggleClass("hidden");
		$("#dut").toggleClass("hidden");
		$("#licence").toggleClass("hidden");
		$("#infos").toggleClass("hidden");
	});

});
