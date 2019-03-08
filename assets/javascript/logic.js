$(document).ready(function(){

    $('button').on('click', function() {

        var topic = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=X6THY8YdUDHR7DidcBGPGze6jOGY9qHD&limit=10";
       
        $.ajax({
        url: queryURL,
        method: 'GET'})
            .done(function(response) {
                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var topicDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var topicImage = $('<img/>');

                    topicImage.addClass('anImg')

                    topicImage.attr('src', results[i].images.fixed_height.url);

                    topicImage.attr('data-still', results[i].images.fixed_height_still.url)

                    topicImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    topicDiv.append(p);

                    topicDiv.append(topicImage);

                    topicDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var topics = [''];

    
        //This function "adds" the buttons 

        // handles the event when clicked
        $('#theButton').on('click', function(){
            var topicButton = $("#gif-input").val();
            //adds the new topic

            var newButton = $("<button/>").addClass( "btn btn-info topic").attr('data-name',topicButton).html(topicButton).css({'margin': '5px'});
            
            $("#topicsbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topicButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(topicButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var topicDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var topicImage = $('<img/>');

                    topicImage.addClass('anImg')

                    topicImage.attr('src', results[i].images.fixed_height_still.url);

                    topicImage.attr('data-still', results[i].images.fixed_height_still.url)

                    topicImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    topicDiv.append(p);

                    topicDiv.append(topicImage);

                    topicDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});
