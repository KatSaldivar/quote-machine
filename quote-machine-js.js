$(document).ready(function() {
    
    $.support.cors = true;
    getQuote();
 
    var randomQuote;
    var randomNum;
    var randomAuthor;
    var randomColors;
  
    function getQuote(){

        var url="https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
    
        $.getJSON(url, function(data){
            randomQuote=data["quoteText"];
            randomAuthor=data["quoteAuthor"];

            if (randomAuthor === '') {
                randomAuthor = 'Unknown';
            };

            $(".quote").html(randomQuote);
            $(".author").html("-" + randomAuthor);
        });
    };
  
    $("#tweet").on("click", function(){
        window.open("https://twitter.com/intent/tweet?text="+'"'+randomQuote+'" -'+randomAuthor);
    });

    var colors=["#99b3ff", "#99e6ff", "#ffb399", "#ff9999"];

    function getColor(){
        randomNum=Math.floor(Math.random()*colors.length);
        randomColors=colors[randomNum];
        $("body").css("background-color", randomColors); 
    };

    $("#quoteBtn").on("click", function(){
      getQuote();
      getColor();
    });

});
//My solution was inspired by CodingTutorials360