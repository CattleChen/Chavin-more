$(function(){
	var aLi=$('#header .nav li')
	aLi.on('mousemove',function(){
		aLi.removeClass('active');
		$(this).addClass('active');
	})
	
	
	
	$('#exhibution .nav-tabs li').mouseenter(function (){
		$(this).find('a img').remove();
		$(this).find('a').append('<img src="img/work-4.jpg"/>');
		return false;
	});
	$('#exhibution .nav-tabs li').mouseleave(function (){
		//alert($(this).index())
		$(this).find('a img').remove();
		$(this).find('a').append('<img src="img/work-'+($(this).index()+1)+'.jpg"/>');
	});
	
})
