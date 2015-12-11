$(document).ready(function() {

    $("form").submit(function(e){
    	e.preventDefault();
    	var text = $("input").val();
    	$("ul").append("<li>" + text + "</li>");

    	$("#itemDescription").val("");

		
		

		$('li').bind('dblclick', function(){
			// var complete = confirm("Are you sure you want to remove this item?");
		 //    if (complete == true){
		 //    	return false;
		 //    } else {
		    	$(this).remove();
		    // }

		});
    });

    $('ul').on('click', 'li', function(){
	    $(this).toggleClass('complete');
	
	});
});