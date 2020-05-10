$(document).ready(function(){
    $('#submit').click(function(e){
        e.preventDefault();
        $.ajax({
            type:'GET',
            url: 'http://api.icndb.com/jokes/random',
            success: function(jokes) {
                $('#responseField').html('');
                $.each(jokes, function(i, joke){
                    $('#responseField').append(joke.joke);
                })
            }
        })
    
    })
});

$("#submit").mouseover(function(){
  $("img").css("display", "block",);
});
$("#submit").mouseout(function(){
  $("img").css("display", "none");
});



