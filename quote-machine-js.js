$(document).ready(function() {
    $.support.cors = true;
    getQuote();
 
    var randomQuote;
    var randomNum;
    var randomAuthor;
    var randomColors;
  
    function getQuote(){
    
        //get quotes with an array
        /* var quotes=["Hello,World!", "Hello, beautiful!", "Hello, Capitan America!"];
        var authors=["-Author1","-Author2","-Author3"];
        randomNum=Math.floor(Math.random()*quotes.length)
        randomQuote=quotes[randomNum];
        randomAuthor=authors[randomNum];
        $(".quote").text(randomQuote);
        $(".author").text(randomAuthor);
        */

        //var url="https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";
        var url= "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=?" + $.now();
    
        $.getJSON(url, function(data){
            //console.log(data[0].content);
            randomQuote=data[0].content;
            randomAuthor=data[0].title;

            if (data[0].title === '') {
                randomAuthor = 'Unknown';
            };

            $(".quote").html(randomQuote);
            $(".author").html("-" + randomAuthor);
        });
    };
  
    $("#tweet").on("click", function(){
        window.open("https://twitter.com/intent/tweet?text="+'"'+randomQuote+'" -'+randomAuthor);
    });

    /*var purple= $("body").css("background-color", "#99b3ff");  
    var blue = $("body").css("background-color", "#99e6ff");  
    var orange= $("body").css("background-color", "#ffb399");  
    var pink= $("body").css("background-color", "#ff9999");*/
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

    /*
    $("#quoteBtn").on("click", function(){
        getColor();
    });
    //console.log(randomColors); */
});
//My solution was inspired by CodingTutorials360