$(document).ready(function () {
    initTable() ;


    $('#zhuanyi').hide();
    $('#trans').bind('change',selectChange);

})

function initTable() {
 $('#tblly').bootstrapTable({
     url:'../../mock/permanentTrans.json',
     toolbar:'#toolbar',
     dataType: 'json',
     striped:true,
     pagination:true,
     columns:columns,
     singleSelect:true,
     clickToSelect:true
 })
 $('#tblzy').bootstrapTable({
     url:'../../mock/permanentTrans-1.json',
     toolbar:'#toolbar',
     dataType: 'json',
     striped:true,
     pagination:true,
     columns:columns1,
     singleSelect:true,
     clickToSelect:true
 })
}
var columns=[
    {
        checkbox: true
    }, {
        title:'资产名称',
        field:'namezc1'
    },{
        title:'批次编号',
        field:'numzc1'
    },{
        title:'单价',
        field:'price1'
    },{
        title:'当前库存数量',
        field:'kucun1'
    },{
        title:'采购人',
        field:'per1'

    },{
        title:'入库日期',
        field:'date1'
    },{
        title:'领用操作',
        formatter:function (row,value,index) {
            var btnUpdateInner=$('<button class="btn btn-info"></button>')
                .html('<i class="fa fa-sign-out" aria-hidden="true"></i> 领用')
                .attr('onclick','btnlyClick()');
            var innerBox=$('<div></div>');
            innerBox.append(btnUpdateInner);
            return innerBox.html();
        }
    }
]
var columns1=[
    {
        checkbox: true
    }, {
        title:'资产名称',
        field:'namezc2'
    },{
        title:'批次编号',
        field:'numzc2'
    },{
        title:'单价',
        field:'price2'
    },{
        title:'持有数量',
        field:'kucun2'
    },{
        title:'当前持有人',
        field:'per2'

    },{
        title:'领用时间',
        field:'date2'
    },{
        title:'转移操作',
        formatter:function (row,value,index) {
            var btnUpdateInner=$('<button class="btn btn-info"></button>')
                .html('<i class="fa fa-refresh" aria-hidden="true"></i> 转移')
                .attr('onclick','btnzyClick()');
            var innerBox=$('<div></div>');
            innerBox.append(btnUpdateInner);
            return innerBox.html();
        }
    }
]

function selectChange(){
    var selectedValue=$('#trans').val();
    if(selectedValue==0){
        $('#lingyong').show(500);
        $('#zhuanyi').hide(500);
    }else {
        $('#lingyong').hide(500);
        $('#zhuanyi').show(500);
    }
}

function btnlyClick(){

    $('#infoTitle').html('<i class="fa fa-tasks" aria-hidden="true"></i> 资产流转-资产领用');
    var selected=$('#tblly').bootstrapTable('getSelections')[0];
    console.log(selected);
    if (selected) {
        $('#numzc').val(selected.numzc1);
        $('#price').val(selected.price1);
        $('#date').val(selected.date1);
        $('#per').val(0);
        $('#info').modal();
    }
    
}
function btnzyClick() {

    $('#infoTitle1').html('<i class="fa fa-tasks" aria-hidden="true"></i> 资产流转-资产转移');
    var selected = $('#tblzy').bootstrapTable('getSelections')[0];
    console.log(selected);
    if (selected) {
        $('#numzc1').val(selected.numzc2);
        $('#price1').val(selected.price2);
        $('#date1').val(selected.date2);
        $('#per1').val(selected.per2);
        $('#info1').modal();


    }
    var selected = $('#tblly').bootstrapTable('getSelections')[0];
    console.log(selected);
    if (selected) {
        $('#per1').val(selected1.per1);
        $('#info1').modal();

    }
}
