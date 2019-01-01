
$(function(){
    $(".reset-body .ui.button.fluid.blue").click(function(){
        var pwd = $("input[name='reset-password']").val();

        var cpwd = $("input[name='reset-password02']").val();
        if(pwd != cpwd){
            alert("两次密码不一致！请重新确认。");
            $("input[name='reset-password']").val("");
            $("input[name='reset-password02']").val("");
            return false;
        }
    });
});
