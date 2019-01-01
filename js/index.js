
$(function(){

    //[热门搜索]标签动态颜色
    $(".tags-list a").each(function () {
        $(this).css("background-color",getRandomSafeColor());
        $(this).css({opacity:0.7});
    });

    //[换一批]刷新动画
    var searchCycle = 1;
    $(".search-switcher").click(function () {
        $(".search-switcher i").animate({},function(){
            $(".search-switcher i").css({"transform":"rotate(" + searchCycle*360 + "deg)"});
            searchCycle++;
        })
    });
    var authorCycle = 1;
    $(".author-switcher").click(function () {
        $(".author-switcher i").animate({},function(){
            $(".author-switcher i").css({"transform":"rotate(" + authorCycle*360 + "deg)"});
            authorCycle++;
        })
    });
    var articleCycle = 1;
    $(".article-switcher").click(function () {
        $(".article-switcher i").animate({},function(){
            $(".article-switcher i").css({"transform":"rotate(" + articleCycle*360 + "deg)"});
            articleCycle++;
        })
    });


    //表单input验证
    // $('.ui.form').form({
    //         fields: {
    //             name     : 'empty',
    //             gender   : 'empty',
    //             username : 'empty',
    //             password : ['minLength[6]', 'empty'],
    //             skills   : ['minCount[2]', 'empty'],
    //             terms    : 'checked'
    //         }
    // });

});

//获取随机颜色
function getRandomColor() {
    return '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6);
}

//获取随机安全色
function getRandomSafeColor() {
    var base = ['AA','BB','66','99','77','88'];     //基础色代码
    var len = base.length;                          //基础色长度
    var bg = new Array();                           //返回的结果
    var random = Math.ceil(Math.random()*215+1);    //获取1-216之间的随机数
    var res;
    for(var r = 0; r < len; r++){
        for(var g = 0; g < len; g++){
            for(var b = 0; b < len; b++){
                bg.push('#'+base[r].toString()+base[g].toString()+base[b].toString());
            }
        };
    };
    for(var i=0;i<bg.length;i++){
        res =  bg[random];
    }
    return res;
}
