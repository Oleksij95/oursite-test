$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


 var menu_body = $(".top_line");
 var About_us = $("#About_us").offset().top;


console.log(About_us);


  $(window).scroll(function() {

    var top = $(this).scrollTop();
    if ( top >= About_us ) {
    	menu_body.css({
    		'background-color':'#232323',
    		'color':'#ddd',
    	})
	}

	if ( top <= About_us ) {
    	menu_body.css({
    		'background-color':'rgba(48,48,48,.5)',
    	})
	}    

  });

  //E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});




});
