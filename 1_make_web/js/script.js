//สร้างฟังชั้น
(function ( $ ) {
 	$.fn.greenify = function() {
        //this.css( "background-color", "green" );
        alert(2);
        return this;
    };
}( jQuery ));
function test(){
	 alert(2);
}
$(document).ready(function() {
	$(".that-area-down-there").mouseover(function() {
        alert(2);
    });
    $( "#edit_web_buttom" ).on( "click", function() {
       $( "#edit" ).toggle( "blind", 500 );
    });
    $("#AddPane").on( "click", function() {  // append หลัง  prepend ก่อน
    	var sd= "<div class=\"web_components\">testbroder  0 <button class=\"remove_class\" onclick=\"javascript:$(this).offsetParent().remove();\">Remove Class<\/button><\/div>";    	
    	//$("p").prepend("Appended item").addClass('test');
    	//$("#div2").append($( ".id2" )).addClass('test');
    	$(".flex-container_web").prepend(sd);
    	//$(".tests").prepend("<div class=\"testbroder\">testbroder<\/div>");
    	//$(".testbroder").append($( ".id2" )).addClass('test');
    	console.log("เพิ่มได้");
    	//test();
    	greenify();
    });
    $(".remove_class").click(function() {
		// console.log($(this).parentsUntil("flex-container_web").html());
		// console.log("ลบได้");
		// //$(this).remove();
		// $(this).parentsUntil().greenify();
		// $(this).offsetParent().css( "background-color", "red" );
		$(this).offsetParent().remove();
		greenify();
		//alert('ลบได้');
	});
	$( ".web_components" ).on( "click", function() {
  		//console.log("ลบได้");
  		// $(this).greenify();
  		//$( ".web_components" ).greenify();
  		//$(this).remove(); ///ลบตัวที่คลิกอยู่
	});
	//alert('เพิ่มได้');

});
(function($) {
    $.showValue = function(para1,para2) { 
         alert ("parameter1="+para1+" and Parameter2="+para2); 
    };
})(jQuery);
$(document).ready(function(){
    $(".remove_class").click(function(){
         $.showValue("Data1","Data2");
    });
});



