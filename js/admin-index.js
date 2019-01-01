
$(function () {
    $(".daterange input").each(function() {
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

    var chart = new Chart('chart-0', {
        type: 'line',
        data: data,
        options: options
    });

});


var colors = {
    red: "#ff5a5f",
    yellow: "#ffc009",
    blue: "#3788fc",
    green: "#6ccedf"
};

var data = {
    labels: ["2018/11/27","2018/11/28","2018/11/29","2018/11/30","2018/12/01","2018/12/02","2018/12/03"],
    datasets: [{
        backgroundColor: colors.blue,
        borderColor: colors.blue,
        data: [13,96,45,21,47,32,54],
        fill: false,
        label: '新增用户'
    }, {
        backgroundColor: colors.red,
        borderColor: colors.red,
        data: [25,14,54,98,78,13,65],
        label: '浏览量',
        fill: false
    }, {
        backgroundColor: colors.yellow,
        borderColor: colors.yellow,
        data: [54,74,78,45,98,84,28],
        hidden: true,
        label: '注册用户',
        fill: false
    }, {
        backgroundColor: colors.green,
        borderColor: colors.green,
        data: [25,88,75,85,41,35,95],
        hidden: true,
        label: '新增文章',
        fill: false
    }]
};
var options = {
    maintainAspectRatio: false,
    spanGaps: false,
    elements: {
        line: {
            tension: 0.3
        }
    },
    scales: {
        xAxes: [{
            stacked: true,
            gridLines:{
                display:false,
                drawBorder: false
            }
        }],
        yAxes:[{
            stacked: true,
            gridLines: {
                drawBorder: false
            }
        }]
    },
    tooltips: {
        position: "average",
        mode: 'index',
        intersect: false,
    },
    plugins: {
        filler: {
            propagate: false
        },
        'samples-filler-analyser': {
            target: 'chart-analyser'
        }
    }
};

