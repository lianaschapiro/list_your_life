$(document).ready(function() {

    $("form").submit(function(e){
    	e.preventDefault();
    	var text = $("input").val();
    	$("ul").append("<li>" + text + "</li>");

    	$("#itemDescription").val("");

		$('li').on('click', function(){
		    $(this).toggleClass('complete');
		});

		$('li').on('dblclick', function(){
		    $(this).remove();
		});
    });
});