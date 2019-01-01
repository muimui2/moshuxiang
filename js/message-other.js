
$(function () {
    //[特别通知]查看更多
    var slideHeight = 23; // px
    var defHeight = $('.message-detail').height();
    if(defHeight >= slideHeight){
        $('.message-detail ').css('height' , slideHeight + 'px');
        $('.read-more').append('<span>查看更多</span>');
        $('.read-more span').click(function(){
            var curHeight = $('.message-detail').height();
            if(curHeight == slideHeight){
                $('.message-detail').animate({
                    height: defHeight
                }, "normal");
                $('.read-more span').html('点击收起');
                $('.gradient').fadeOut();
            }else{
                $('.message-detail').animate({
                    height: slideHeight
                }, "normal");
                $('.read-more span').html('查看更多');
                $('.gradient').fadeIn();
            }
            return false;
        });

    }

});