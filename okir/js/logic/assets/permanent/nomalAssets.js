/**
 * Created by lenovo on 2020/1/5.
 */
$(document).ready(function () {
    initSelect();
    inittable();
    $('#btnadd').bind('click',btnAddClick);
    $('#btnEdit').bind('click',btnUpdateClick);
    $('#btnlnstock').bind('click',btnlnstockClick);
})
function initSelect() {
    var select = $("#selnomalAssets");
    var option = $('<option></option>').text('--全部--').attr('value', 0);
    select.append(option);
    $.ajax
    ({
        url: '../../mock/baseinfo/nomalAssetslist.json',
        method: 'get',
        dataType: 'json',
        success: function (data) {
            $.each(data,function(i,value)
                {
                    var inneroption = $('<option></option>').text(value.nameCn)
                        .attr('value',value.code);
                    select.append(inneroption);
                }
            )
        }
    })
    var select1 = $("#selnomal");
    var option1= $('<option></option>').text('--打印机--').attr('value', 0);
    var option6= $('<option></option>').text('--复印机--').attr('value', 0);
    select1.append(option1);
    select1.append(option6);
    var select2 = $("#selnom");
    var option4= $('<option></option>').text('--台--').attr('value', 0);
    var option5= $('<option></option>').text('--笔记本--').attr('value', 1);
    select2.append(option4);
    select2.append(option5);
    var select3 = $("#selno");
    var option3= $('<option></option>').text('--否--').attr('value', 0);
    select3.append(option3);

}
function inittable()
{
    $('#tb1Resul').bootstrapTable(
        {
            url:'../../mock/baseinfo/nomalAssets.json',
            toolbar:'toolbar',
            dateType:'json',
            striped:true,
            pagination:true,

            columns:columns,
            singleSelect:true,
            clickToSelect:true
        }
    )
}
var columns =
    [   {
            checkbox:true
        },
        {
            title: '资产编号',
            field: 'AssetsCode'
        },        {
        title: '资产名称',
        field: 'AssetsName'
    },        {
        title: '品牌',
        field: 'normalbrand'
    },        {
        title: '型号',
        field: 'normalmodel'
    },        {
        title: '供货商',
        field: 'supplier'
    },        {
        title: '库存记录',
        formatter:function (row,value,index) {
        var btnUpdateInner=$('<option></option>').text('修改')
            .addClass('btn btn-warning')
            .attr('onclick','btnUpdateClick()');
            var btnRemoveInner=$('<option></option>').text('删除')
                .addClass('btn btn-success')
                .attr('onclick','btnRemoveClick()');
            var innerBox=$('<div></div>');
            innerBox.append(btnUpdateInner);
            innerBox.append(btnRemoveInner);
            return innerBox.html();
        }
    }
    ]
function btnAddClick() {
    clear();
    $('#infoTitle').html('<i class="fa fa-bar-chart" aria-hidden="true"></i> 资产信息');
    $('#infor').modal();
}
function btnUpdateClick() {
    clear();
    $('#infoTitle').html('<i class="fa fa-bar-chart" aria-hidden="true"></i>修改信息');
    var selected=$('#tb1Resul').bootstrapTable('getSelections')[0];
    console.log(selected);
    $('#tbxAssetsCode').val(selected.AssetsCode);
    $('#tbxAssetsName').val(selected.AssetsName);
    $('#asset').val(1);
    $('#assets').val(1);
    $('#selPackageType').val(1);
    $('#normalbrand').val(selected.normalbrand);
    $('#normalmodel').val(selected.normalmodel);
    $('#supplier').val(selected.supplier);
    $('#infor').modal();
}
function btnlnstockClick()
{
    $('#infoTit').html('<i class="fa fa-bar-chart" aria-hidden="true"></i>资产入库');
    $('#info').modal();
}
function clear()
{
    $('#infor input').val(' ');
    $('#selnomalAssets').val(0);
    $('#selnomal').val(0);
    $('#selnom').val(0);
    $('#asset').val(0);
    $('#assets').val(0);
    $('#selPackageType').val(0);
}
function btnRemoveClick() {
    var selected=$('#tb1Resul').bootstrapTable('getSelections')[0];
    if(selected)
    {
       if(confirm("是否删除这条数据？"))
       {
           console.log("删除了这一条数据！");
       }
    }else
        {
            alert("请选择一行在进行操作！")
        }
}