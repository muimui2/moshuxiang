
$(function () {
    $('.ui.checkbox').checkbox();/*复选框*/
    $('.ui.dropdown').dropdown({});/*下拉*/

    //顶部导航栏用户菜单
    $(".user-dropdown").hover(function (){
        var dropdown = $(".ui.inline.dropdown>.menu");
        dropdown.removeClass("transition hidden");
        dropdown.show();
        dropdown.addClass("transition visible");
    },function (){
        var dropdown = $(".ui.inline.dropdown>.menu");
        dropdown.removeClass("transition visible");
        dropdown.hide();
        dropdown.addClass("transition hidden");
    });

    //帮助菜单
    $('.side-tool .ui.dropdown').dropdown({
        direction: "upward",
        transition: "none",
        on: "hover"
    });

    //回到顶部
    $('#goToTop').goToTop();
});

//回到顶部
jQuery.fn.goToTop = function(){
    $('#goToTop').hide();

    // 判断如果窗口滚动距离小于0，隐藏按钮
    if($(window).scrollTop() < 60){
        $('#goToTop').hide();
    }

    // 窗口滚动时，判断当前窗口滚动距离
    $(window).scroll(function(){
        if($(this).scrollTop() > 60){
            $('#goToTop').show();
        }else{
            $('#goToTop').hide();
        }
    });

    // 给这个按钮绑定一个click事件
    this.bind('click',function(){
        $('html ,body').animate({scrollTop: 0},500);
        return false;
    });
};