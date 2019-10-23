$(function(){
    $(".wrapper").load("./pages/shangjia.html");
   $(".layui-side-scroll ul li ").click(function(){
   	console.log(this);
 	  $('.wrapper').load($(this).attr("url"));	
    })
})