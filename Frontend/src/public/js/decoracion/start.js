$(document).ready(function () {
	$("#circle").hide();
	$("#box").animate({ height: "140px" }, "slow");
	$("#box").animate({ width: "350px" }, "slow");
	$("#circle").fadeIn(1000);

});
function blinker() {
	$('#blinking').fadeOut("slow");
	$('#blinking').fadeIn("slow");
}
setInterval(blinker, 1000);
