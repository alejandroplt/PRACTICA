function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 10)];
	}

	document.body.style.background = color;
    document.getElementById("sp").style.color= color;
    document.getElementById("sub").style.color= color;
    document.getElementById("buttn").style.backgroundColor= color;
    document.getElementById("buttn").style.border= color;
    document.getElementById("link").style.color= color;
}
$( document ).ready( function() {
    $.ajaxSetup({
        cache: false
    });

    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&&format=jsonp&jsonp=?&lang=en", function(data) {
        $("#sp").html(data.quoteText);
        $("#sub").html(data.quoteAuthor);
    });
} )

$("#buttn").on("click", function() {
    $.ajaxSetup({
        cache: false
    });

    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&&format=jsonp&jsonp=?&lang=en", function(data) {
        $("#sp").html(data.quoteText);
        $("#sub").html(data.quoteAuthor);
    });
});
