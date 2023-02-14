function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";

	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 10)];
	}

	document.body.style.background = color;
    document.getElementById("Phrase").style.color= color;
    document.getElementById("Author").style.color= color;
    document.getElementById("buttonPhrase").style.backgroundColor= color;
    document.getElementById("buttonPhrase").style.border= color;
    document.getElementById("buttnSharePhrase").style.backgroundColor= color;
    document.getElementById("buttnSharePhrase").style.border= color;    
    document.getElementById("link").style.color= color;
}
$( document ).ready( function() {
    $.ajaxSetup({
        cache: false
    });

    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&&format=jsonp&jsonp=?&lang=en", function(data) {
        $("#Phrase").html(data.quoteText);
        $('#noneLabelPhrase').append(data.quoteText);
        $("#Author").html(data.quoteAuthor);
        $("#noneLabelAut").append(data.quoteAuthor);
    });
} )

$("#buttonPhrase").on("click", function() {
    $.ajaxSetup({
        cache: false
    });

    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&&format=jsonp&jsonp=?&lang=en", function(data) {
        $("#Phrase").html(data.quoteText);
        $('#noneLabelPhrase').append(data.quoteText);
        $("#Author").html(data.quoteAuthor);
        $("#noneLabelAut").append(data.quoteAuthor);
    });
});

const $button = document.querySelector('#buttnSharePhrase')
if('share' in navigator){
    $button.addEventListener('click', share)
    function share(){
        var textLabel = document.getElementById("noneLabelPhrase").innerHTML;
        var textLabelAut = document.getElementById("noneLabelAut").innerHTML;
        var textFinal = textLabel + "...." + "-"+textLabelAut+"-" + " visit: ";
        navigator.share({
            title:'Random Phrases',
            text: textFinal,
            url:'https://plxtxs-alejandro.netlify.app/generador-frases/',
        })
    }
}else{
    alert('Not available')
}