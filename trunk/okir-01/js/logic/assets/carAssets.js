$(document).ready(function () {
    initSelect();
    initTable();

    $('#btnAdd').bind('click',btnAddClick);
    $('#btnInstock').bind('click',btnInstockClick);
    $('#btnEdit').bind('click',btnEditClick);
})


function initSelect() {
   $.ajax({
       url:'../../mock/carAssetsList.json',
       method:'get',
       dataType:'json',
       success:function (data) {
           $.each(data,function (i,value) {

               var innerOption = $('<option></option>')
                   .text(value.nameCn);

               select1.append(innerOption);

           })

       }
   })

    $.ajax({
        url:'../../mock/carAct.json',
        method:'get',
        dataType:'json',
        success:function (data) {
            $.each(data,function (i,value) {

                var innerOption = $('<option></option>')
                    .text(value.display);

                select3.append(innerOption);

            })

        }
    })


    var select1 = $('#selPowerType');
    var option = $('<option></option>').text('---全部---').attr('value', 0);
    select1.append(option);

    var select2 = $('#selPowerType1');
    var option = $('<option></option>').text('---全部---').attr('value', 0);
    select2.append(option);

    var select3 = $('#selPowerType2');
    var option = $('<option></option>').text('---全部---').attr('value', 0);
    select3.append(option);

    var select4 = $('#source');
    var option = $('<option></option>').text('请选择...').attr('value', 0);
    select4.append(option);

    var select5 = $('#source1');
    var option = $('<option></option>').text('请选择...').attr('value', 0);
    select5.append(option);

    var select6 = $('#source2');
    var option = $('<option></option>').text('请选择...').attr('value', 0);
    select6.append(option);

}


function initTable() {
    $('#tbxBrandModel').bootstrapTable({
        url:'../../mock/carAssets.json',
        dataType:'json',

        toolbar:'#toolbar',

        striped:true,
        pagination:true,
        pageSize:5,
        pageList:[5,10,20],
        pageNumber:1,
        columns:columns,
        singleSelect:true,
        clickToSelect:true
    })

}

var columns=[
    {
        checkbox:true
    },

    {
        title:' ',
        field:'value'
    },
    {
        title:'资产编号',
        field:'display'
    },
    {
        title:'资产名称',
        field:'typeCode1'
    },
    {
        title:'车辆品牌',
        field:'desc'
    },
    {
        title:'型号',
        field:'carmodel'
    },
    {
        title:'发动机编号',
        field:'engineinfoe'
    },
    {
        title:'库存记录',
        formatter:function (row,value,index) {

            var btnInstockInner=$('<button></button>').html('<i class="fa fa-th-list" aria-hidden="true"></i> 转移')
                .attr('onclick','btnInstockClick()')
                .addClass('btn btn-info');

            var innerBox=$('<div></div>');
            innerBox.append(btnInstockInner);
            return innerBox.html();

        }
    }
]

function btnAddClick(){
    $('#sourceInfo').text('资产信息');
    $('#sourcebianhao').text('资产编号：');
    $('#sourcename').text('资产名称：');
    $('#sourceclassify').text('资产分类:');
    $('#acttype').text('发动机类型：');
    $('#carbrand').text('车辆品牌：');
    $('#carType').text('车辆型号：');
    $('#active').text('自动挡：');
    $('#sit').text('座位数：');
    $('#actbianhao').text('发动机编号：');
    $('#info').modal();
}
function btnInstockClick(){
    $('#sourceInfo').text('资产入库');
    $('#sourcebianhao').text('资产名称：');
    $('#sourcename').text('入库数量：');
    $('#sourceclassify').hide();
    $('#source').hide();
    $('#source1').hide();
    $('#acttype').hide();
    $('#source2').hide();
    $('#carbrand').text('入库单价：');
    $('#carType').text('金融合计：');
    $('#active').hide();
    $('#yes').hide();
    $('#basic-addon-5').hide();
    $('#sit').text('入库时间：');

    $('#a').hide();
    $('#ab').hide();


    var selected = $('#tbxBrandModel').bootstrapTable('getSelections')[0];
    console.log(selected);


    if (selected){
        $('#sourcebrand').val(selected.desc);
        $('#info').modal();
    }else {
        alert('请选择一行再进操作！');
    }

}
function btnEditClick(){
    var selected = $('#tbxBrandModel').bootstrapTable('getSelections')[0];
    console.log(selected);



    if (selected){
        $('#sourcebrand').val(selected.display);
        $('#name').val(selected.typeCode1);
        $('#brand').val(selected.desc);
        $('#type').val(selected.carmodel);
        $('#acthao').val(selected.engineinfoe);
        $('#source1').val(1);
        $('#source2').val(1);
        $('#info').modal();
    }else {
        alert('请选择一行再进操作！');
    }
}
function clear() {
    $('#info btnAdd').val('');
}