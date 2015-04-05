$( document ).ready(function() {

	var Adroitedut=false;
	var Adroiteaccueil=false;
	var Adroitelicence=false;
	var Adroiteinfos=false;
	$(".menu-dut").click(function(){
		if(Adroitelicence=false)
		{
			$(".menu-licence").toggleClass("pull-right");
			Adroitelicence=true;
		}
		if (Adroiteinfos=false)
		{
			$(".menu-infos").toggleClass("pull-right");
			Adroiteinfos=true;
		}
		$("#accueil").toggleClass("hidden");
		$("#dut").toggleClass("show");
		$("#licence").toggleClass("hidden");
		$("#infos").toggleClass("hidden");

	});
	$(".menu-accueil").click(function(){
		
		if(Adroitelicence=false)
		{
			$(".menu-licence").toggleClass("pull-right");
			Adroitelicence=true;
		}
		
		if (Adroiteinfos=false)
		{
			
			$(".menu-infos").toggleClass("pull-right");
			Adroiteinfos=true;
		}

		
		if (Adroitedut=false)
		{
			
			$(".menu-dut").toggleClass("pull-right");
			Adroitedut=true;
		}
		$("#accueil").toggleClass("show");
		$("#dut").toggleClass("hidden");
		$("#licence").toggleClass("hidden");
		$("#infos").toggleClass("hidden");
	});
	$(".menu-licence").click(function(){
		if (Adroiteinfos=false)
		{
			
			$(".menu-infos").toggleClass("pull-right");
			Adroiteinfos=true;
		}
		$("#accueil").toggleClass("hidden");
		$("#dut").toggleClass("hidden");
		$("#licence").toggleClass("show");
		$("#infos").toggleClass("hidden");
	});
	$(".menu-infos").click(function(){
		$("#accueil").toggleClass("hidden");
		$("#dut").toggleClass("hidden");
		$("#licence").toggleClass("hidden");
		$("#infos").toggleClass("show");

	});
});
