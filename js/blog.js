
$(function () {
    //文章评论
    $(".comment-text input").focus(function(){
        $(".comment-btn").show();
    });
    $(document).click(function(event){
        var searchForm = $(".comment-text input");
        if(!searchForm.is(event.target) && searchForm.has(event.target).length === 0){
            $(".comment-btn").hide();
        }
    });

    //关注作者
    $(".blog-author .operate .follow").click(function () {
        var follow = $(this);
        var isActive = follow.hasClass("active");
        var isComfirm = false;
        if(!isActive){
            new duDialog('确定取消关注该作者？', '', duDialog.OK_CANCEL, {
                okText: '确定',
                cancelText: '取消',
                callbacks: {
                    okClick: function(){
                        isComfirm = true;
                        if(!isActive && isComfirm){
                            follow.html("<i class=\"iconfont icon-guanzhu1\"></i>关注");
                            follow.addClass("active");
                        }
                        this.hide();
                    },
                    cancelClick: function(){
                        this.hide();
                    }
                }
            });
        }

        if(isActive){
            follow.text("已关注");
            follow.removeClass("active");
        }

    });


});