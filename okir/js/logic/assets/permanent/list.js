$(document).ready(function () {
    initSelect();
    initTable();

    $('#btnAdd').bind('click',btnAddClick);
    $('#btnInst').bind('click',btnInstClick);
    $('#btnEdit').bind('click',btnEditClick);
    

})

function initSelect() {
    var  select1=$('#selDictType1');
    var  option=$('<option></option>').text('全部').attr('value',0);
    select1.append(option);

    var  select2=$('#selDictType2');
    var  option=$('<option></option>').text('全部').attr('value',0);
    select2.append(option);

    var  select3=$('#selcity');
    var  optioncity=$('<option></option>').text('全部').attr('value',0);
    select3.append(optioncity);

    var  select4=$('#selEquityType');
    var  option=$('<option></option>').text('全部').attr('value',0);
    select4.append(option);

    $.ajax({
        url:'../../mock/fenlei1.json',
        method:'get',
        dataType:'json',
        success:function (data) {
            $.each(data,function (i,value){
                var innerOption=$('<option></option>').text(value.nameCn);
                select1.append(innerOption);
            })
        }
    })
    $.ajax({
        url:'../../mock/fenlei2.json',
        method:'get',
        dataType:'json',
        success:function (data) {
            $.each(data,function (i,value){
                var innerOption=$('<option></option>').text(value.nameCn);
                select2.append(innerOption);
            })
        }
    })
    $.ajax({
        url:'../../mock/city.json',
        method:'get',
        dataType:'json',
        success:function (data) {
            $.each(data,function (i,value){
                var innerOption=$('<option></option>').text(value.display);
                select3.append(innerOption);

            })

        }

    })
    $.ajax({
        url:'../../mock/equityType.json',
        method:'get',
        dataType:'json',
        success:function (data) {
            $.each(data,function (i,value){
                var innerOption=$('<option></option>').text(value.display);
                select4.append(innerOption);

            })

        }

    })


}
function initTable() {
    $('#tblResult').bootstrapTable({
        url:'../../mock/permanentAssets.json',
        toolbar:'#toolbar',
        dataType: 'json',
        striped:true,
        pagination:true,
        columns:columns,
        singleSelect:true,
        clickToSelect:true
    })
}
var columns=[
    {
        checkbox: true
    },
    {
        title:'资产编号',
        field:'assetscode'
    },{
        title:'资产名称',
        field:'namecn'
    },{
        title:'所在城市',
        field:'city'
    },{
        title:'购买单位',
        field:'util'
    },{
        title:'登记面积',
        field:'area'
    },{
        title:'产权类型',
        field:'equityType'
    },{
        title:'库存记录',
        formatter:function (row,value,index) {
            var btnUpdateInner=$('<button class="btn btn-success"></button>')
                .html('<i class="fa fa-bars" aria-hidden="true"></i> 记录')
                .attr('onclick','btnInstClick()');
            var btnRemoveInner=$('<button class="btn btn-warning"></button>')
                .html('<i class="fa fa-times" aria-hidden="true"></i> 删除').
                attr('onclick','btnRemoveClick()');
            var innerBox=$('<div></div>');
            innerBox.append(btnUpdateInner);
            innerBox.append(btnRemoveInner);
            return innerBox.html();
        }
    }
]

function btnAddClick(){
    clear();
    $('#infoTitle').html('<i class="fa fa-bars" aria-hidden="true"></i> 资产信息');
    $('#info').modal();
}
function btnEditClick() {
    clear();
    $('#infoTitle').html('<i class="fa fa-bars" aria-hidden="true"></i> 修改资产信息');
    var selected=$('#tblResult').bootstrapTable('getSelections')[0];
    console.log(selected);
    if (selected){
        $('#numzc').val(selected.assetscode);
        $('#namezc').val(selected.namecn);
        $('#sel1').val(0);
        $('#sel2').val(0);
        $('#sel3').val(0);
        $('#sel4').val(0); 
        $('#info').modal();
    }else{
        alert("请选中一条数据再操作！")
    }
}

function btnInstClick() {
    clear();
    $('#infoTitle1').html('<i class="fa fa-bars" aria-hidden="true"></i> 资产入库');
    var selected=$('#tblResult').bootstrapTable('getSelections')[0];
    console.log(selected);
    if (selected){
        $('#namezc1').val(selected.namecn);
        $('#sel5').val(0);
        $('#info1').modal();
    }else{
        alert("请选中一条数据再操作！")
    }
    
}

function clear() {
    $('#info input').val(' ');
    $('#info textarea').val(' ');
    $('#info1 input').val(' ');
    $('#info1 textarea').val(' ');
    $('#sel1').val(0);
    $('#sel2').val(0);
    $('#sel3').val(0);
    $('#sel4').val(0);
    $('#sel5').val(0);

}

function btnRemoveClick() {
    var selected=$('#tblResult').bootstrapTable('getSelections')[0];
    if(selected){
        if (confirm("是否删除这条数据？")){
            console.log("已删除");
        }
    }else{
        alert("请选中一条再操作！");
    }

}