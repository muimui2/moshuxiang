

$(function () {
    $('.semantic-dropdown')
        .dropdown({
            transition: 'slide down'
        })
    ;

    $('.ui.checkbox')
        .checkbox()
    ;

    $(".ui.slider.checkbox").checkbox({

        beforeChecked: function () {
            var isComfirm = confirm("确定已审核？");
            return isComfirm;
        },
        beforeUnchecked: function () {
            var isComfirm = confirm("确定取消审核？");
            return isComfirm;
        }

    });

    $(".ui.basic.red.delete").click(function () {
        var isComfirm = confirm("确定删除该消息？");
    });

    $(".search-date.daterange input").each(function() {
        var $this = $(this);

        $this.daterangepicker({
            locale : {
                "format" : "YYYY-MM-DD",// 显示格式
                "separator" : " / ",// 两个日期之间的分割线
                // 中文化
                "applyLabel" : "确定",
                "cancelLabel" : "取消",
                "fromLabel" : "开始",
                "toLabel" : "结束",
                "daysOfWeek" : [ "日", "一", "二", "三", "四", "五", "六" ],
                "monthNames" : [ "一月", "二月", "三月", "四月", "五月", "六", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
                "firstDay" : 1
            },
        }, function(start, end, label) {
            // 点击确定后的事件，下面是为了bootstrap validate得校验，
            // 若未使用，可忽视
            if ($this.parents("form.required-validate").length > 0) {
                var $form = $this.parents("form.required-validate");

                var name = $this.attr("name");
                if ($form.length > 0) {
                    var data = $form.data('bootstrapValidator');
                    data.updateStatus(name, 'NOT_VALIDATED', null)
                    // Validate the field
                        .validateField(name);
                }
            }
            // 设置最小宽度，否则显示不全
        }).css("min-width", "230px").next("i").click(function() {
            // 对日期的i标签增加click事件，使其在鼠标点击时可以拉出日期选择
            $(this).parent().find('input').click();
        });
    });


    $('.search-result-body .master.checkbox')
        .checkbox({
            // check all children
            onChecked: function() {
                var $childCheckbox  = $(this).closest('thead').siblings('tbody').find('.checkbox.child');
                $childCheckbox.checkbox('check');
            },
            // uncheck all children
            onUnchecked: function() {
                var $childCheckbox  = $(this).closest('thead').siblings('tbody').find('.checkbox.child');
                $childCheckbox.checkbox('uncheck');
            }
        })
    ;

    $('.search-result-body .child.checkbox')
        .checkbox({
            // Fire on load to set parent value
            fireOnInit : true,
            // Change parent state on each child checkbox change
            onChange   : function() {
                var
                    $listGroup      = $('tbody'),
                    $parentCheckbox = $('.search-result-body .master.checkbox'),
                    $checkbox       =  $('.search-result-body .child.checkbox'),
                    allChecked      = true,
                    allUnchecked    = true
                ;
                // check to see if all other siblings are checked or unchecked
                $checkbox.each(function() {
                    if( $(this).checkbox('is checked') ) {
                        allUnchecked = false;
                    }
                    else {
                        allChecked = false;
                    }
                });
                // set parent checkbox state, but dont trigger its onChange callback
                if(allChecked) {
                    $parentCheckbox.checkbox('set checked');
                }
                else if(allUnchecked) {
                    $parentCheckbox.checkbox('set unchecked');
                }
                else {
                    $parentCheckbox.checkbox('set indeterminate');
                }
            }
        });


    $(".single-daterange input").each(function() {
        var $this = $(this);

        $this.daterangepicker({
            locale : {
                // format: 'M/DD hh:mm A',
                // format : "YYYY-MM-DD",
                format: "YYYY-MM-DD HH:mm:ss",
                "separator" : " / ",// 两个日期之间的分割线
                // 中文化
                "applyLabel" : "确定",
                "cancelLabel" : "取消",
                "fromLabel" : "开始",
                "toLabel" : "结束",
                "daysOfWeek" : [ "日", "一", "二", "三", "四", "五", "六" ],
                "monthNames" : [ "一月", "二月", "三月", "四月", "五月", "六", "七月", "八月", "九月", "十月", "十一月", "十二月" ],
                "firstDay" : 1
            },
            singleDatePicker: true,
            timePicker: true,
            timePicker24Hour: true, //时间制
            timePickerSeconds: true, //时间显示到秒
            startDate: moment().startOf('hour'),
            endDate: moment().startOf('hour').add(32, 'hour'),
        }, function(start, end, label) {
            // 点击确定后的事件，下面是为了bootstrap validate得校验，
            // 若未使用，可忽视
            if ($this.parents("form.required-validate").length > 0) {
                var $form = $this.parents("form.required-validate");

                var name = $this.attr("name");
                if ($form.length > 0) {
                    var data = $form.data('bootstrapValidator');
                    data.updateStatus(name, 'NOT_VALIDATED', null)
                    // Validate the field
                        .validateField(name);
                }
            }
            // 设置最小宽度，否则显示不全
        }).css("min-width", "210px").next("i").click(function() {
            // 对日期的i标签增加click事件，使其在鼠标点击时可以拉出日期选择
            $(this).parent().find('input').click();
        });
    });
});