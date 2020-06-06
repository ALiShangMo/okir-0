$(document).ready(function () {
    initSelect();
    initTable();
    $('#btnAdd').bind('click',btnAddClick);
    $('#btnEdit').bind('click',btnEditClick);
    $('#btnInstock').bind('click',btnInstockClick);
})
function initSelect() {
    var select1 = $('#meng');
    var option = $('<option></option>').text('全部').attr('value', 0);
    select1.append(option);
    var select2 = $('#meng1');
    var option = $('<option></option>').text('全部').attr('value', 0);
    select2.append(option);
    var select3 = $('#selFinanceType');
    var option = $('<option></option>').text('全部').attr('value', 0);
    select3.append(option);
    $.ajax({
        url: '../../mock/assets/financeAssets.json',
        method: 'get',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (i, value) {
                var innerOption = $('<option></option>')
                    .text(value.nameCn);
                select1.append(innerOption);
            })
        }
    })

    $.ajax({
        url: '../../mock/assets/financeAssetsList2.json',
        method: 'get',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (i, value) {
                var innerOption = $('<option></option>')
                    .text(value.nameCn);
                select2.append(innerOption);


            })
        }
    })
}

function initTable() {
    $('#tblResult').bootstrapTable({
        url: '../../mock/assets/financeAssetsList.json',
        toolbar:'#toolbar',
        dataType: 'json',
        striped: true,
        pagination: true,
        pageSize: 1,
        pageList: [5, 10, 20],
        pageNumber: 1,
        columns: columns,
        singleSelect:true,
        clickToSelect:true

    })
}
var columns=[
    {
        checkbox:true
    }
    ,
    {
        title:'资产编号',
        field:'selFinanceType'
    },{
        title:'资产名称',
        field:'namecn'
    },{
        title:'托管机制',
        field:'tbxOrganization'
    },{
        title:'关联账号',
        field:'tbxRefBankNo'
    },{
    title:'期限',
    field:'ckbAutoCycle'
    },{
        title:'记录',
        formatter:function (row,value,index) {
    var btnInstockInner=$('<button class="btn btn-primary"></button>').html('<i class="fa fa-th-list" aria-hidden="true"></i> 记录')
        .attr('onclick','btnInstockClick()');
    var innerBox=$('<div></div>');
    innerBox.append(btnInstockInner);
    return innerBox.html();
}
}
 ]
function btnAddClick() {
    $('#infoTitle').text('资产信息');
    $('#info').modal();
}
function btnEditClick() {
    $('#infoTitle').text('资产信息');
    var selected=$('#tblResult').bootstrapTable('getSelections')[0];
    console.log(selected);
    if(selected){
        $('#selFinanceTypeForSave').val(selected.selFinanceType);
        $('#info').modal();
    }else{
        alert("请选择一行在操作！");
    }

}
function btnInstockClick() {
var selected=$('#tblResult').bootstrapTable('getSelections')[0];
    console.log(selected);
    if(selected){
        $('#namecnFor').val(selected.namecn);
        $('#info1').modal();
    }else{
    alert("请选择一行在操作！");
    }
}