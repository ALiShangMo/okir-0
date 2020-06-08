$(document).ready(function () {
    initChart();

})

function initChart() {
    var dom=document.getElementById('main');
    var chart=echarts.init(dom);

    var option = {
        legend: {},
        tooltip: {
            trigger: 'axis',
            showContent: false
        },
        dataset: {
            source: [
                ['product', '2014', '2015', '2016', '2017', '2018', '2019'],
                ['车辆资产', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                ['金融资产', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                ['普通资产', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                ['不动产', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {gridIndex: 0},
        grid: {top: '55%'},
        series: [
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {type: 'line', smooth: true, seriesLayoutBy: 'row'},
            {
                type: 'pie',
                id: 'pie',
                radius: '30%',
                center: ['50%', '25%'],
                label: {
                    formatter: '{b}: {@2014} ({d}%)'
                },
                encode: {
                    itemName: 'product',
                    value: '2014',
                    tooltip: '2014'
                }
            }
        ]
    };

    chart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });

    chart.setOption(option);
}