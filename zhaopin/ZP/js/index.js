var baseURL = "http://203.195.246.58:7777"
//加载职位类型
function initJobType(){
    var url = baseURL+"/Jobs/findAll"
    $.get(url,function(result){
        var arr = [];
        if(result.status === 200){
            result.data.forEach(function(item){
                arr.push(item.status);
            })
            var result = new Set(arr);
            $(".hm_1_r .job_type").empty();
            $(".hm_1_r .job_type").append($(` <li><a href="#" class="s">全部</a></li>
                    `));
            result.forEach(function(item){
            $(".hm_1_r .job_type").append($(`
                <li><a href="#" >`+item+`</a>
                    <div class="ffc">
                    <img id="u197_img" class="ffimg" src="images/index/u197.png" >
                    <ul class="ff">                            
                    </ul>
                    </div>
                </li>`));
            })
        }
    });
}

//加载地点
function initcity(){
    var url = baseURL+"/City/findAll"
    $.get(url,function(result){
        //清空假数据
        $("#chengshi > ul").empty();
        
        $("#chengshi > ul").append($(`<li><a href="#"   class="s">不限</a></li>`));
        //遍历数据库中的地点，添加到chengshi > ul
        result.data.forEach(function(item){
            $(`
                <li><a href="#">`+item.name+`</a></li>
               `).appendTo("#chengshi > ul");
        });
    });
}


//加载福利
function initWelfare(){
    var url = baseURL+"/Welfare/findAll"
    $.get(url,function(result){
        $("#fuli > ul").empty();
        $("#fuli > ul").append($(`<li><a href="#"   class="s">不限</a></li>`));
        //遍历数据库中的福利，添加到fuli > ul
        result.data.forEach(function(item){
            $(`
                <li><a href="#">`+item.name+`</a></li>
                `).appendTo("#fuli > ul");
        });

    });
}

//加载招聘信息
function initJob(){
    var url = baseURL+"/Employment/findAll"
    $.get(url,function(result){
        if(result.status === 200){
            $("#con_menu").empty();
            result.data.forEach(function(item){
                $("#con_menu").append($(`
                    <div class="m">
            <h4>`+item.title+`</h4>
            <div class="m_1">`+item.salary+`</div>
            <div class="w">
            <div class="m_2 c1">`+item.welfare+`</div>
            </div>
            <div class="m_9">
                <p>工作时间：`+item.workingHours+`</p>
                <p>工作类型：`+item.job+`</p>
                <p>招聘人数：`+item.num+`人</p>
                <p>工作地点：`+item.province+`</p>
            </div>
            <div class="m_3">一键报名</div>
            
        </div>
                `));

            })
        }
    });
}

$(function(){
    initJobType(); 
    initcity();
    initWelfare();
    initJob();

    //通过工作类型查询具体工作
    $(".hm_1_r .job_type").on("mouseover","li",function(){
        var status = $(this).text();
        var url = baseURL+"/Jobs/findByStatus";
        var data = "staus="+status;
        var li = $(this);
        $.get(url,data,function(result){
            console.log(result)
            var arr = [];
            if(result.status === 200){
                result.data.forEach(function(item){
                    arr.push(item.name);
                })
                var result = new Set(arr);
                result.forEach(function(item){
                    li.find("ul").append($(`<li><a href="#">`+item+`</a></li>`))

                })
            }
        })
    })



})