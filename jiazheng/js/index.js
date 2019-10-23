$(function(){
	$('.wrapper').load('./pages/guke.html');

	$('.left ul li').click(function(){
		//鼠标点击变色
		$(this).addClass('current');
		$(this).siblings().removeClass('current');
		console.log($(this).text());
		if($(this).find('p').text() == '顾客管理'){
			$('.wrapper').load('./pages/guke.html');
		}else if($(this).text() == '产品管理'){
			$('.wrapper').load('./pages/chanpin.html');
		}else if($(this).text() == '订单管理'){
			$('.wrapper').load('./pages/dingdan.html');
		}else if($(this).text() == '服务管理'){
			$('.wrapper').load('./pages/fuwu.html');
		}else if($(this).text() == '栏目管理'){
			$('.wrapper').load('./pages/lanmu.html');
		}else if($(this).text() == '地址管理'){
			$('.wrapper').load('./pages/dizhi.html');
		}else if($(this).text() == '评论管理'){
			$('.wrapper').load('./pages/pingjia.html');
		}
		//删除>
		$(this).parents('.left').find('li').children(':nth-child(3)').remove();
		//添加>
		$(this).children('p').after('<i>>');
	})
	$('#index').click(function(){
		$('.wrapper').load('./pages/guke.html');
	})
})