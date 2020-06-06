/**
 * Created by lenovo on 2020/1/5.
 */
$(document).ready(function () {
    //initSelect();
    inittable();
    initable();
    $('#transferBox').hide();
    $('#assetop').bind('change',selcetChange);
})
/*function initSelect()
{
    var select = $("#assetop");
    var option = $('<option></option>').text('--资产转移--').attr('value', 0);
    select.append(option);
    var option1 = $('<option></option>').text('--资产领用--').attr('value', 1);
    select.append(option1);
}*/
function inittable()
{
    $('#tb1Result').bootstrapTable(
        {
            url:'../../mock/baseinfo/Trans.json',
            dateType:'json',
            striped:true,
            pagination:true,
            pagesize:5,
            columns:columns,
            singleSelect:true,
            clickToSelect:true
        }
    )
}
var columns =
    [
        {
            checkbox:true
        },
        {
            title: '资产名称',
            field: 'assetsnamecn'
        },{
        title: '资产编号',
        field: 'batchno'
    },{
        title: '单价',
        field: 'price'
    } ,{
        title: '持有数量',
        field: 'currentamount'
    },{
        title: '当前持有人',
        field: 'targetempname'
    },{
        title: '领用时间',
        field: 'instocktime'
    },{
        title: '转移操作',
        formatter:function (row,value,index) {
            var btnTransInner=$('<option></option>').text('转移')
                .addClass('btn btn-warning')
                .attr('onclick','btnTransClick()');
            var innerBox=$('<div></div>');
            innerBox.append(btnTransInner);
            return innerBox.html();
        }
    }
    ]
function btnTransClick() {

    $('#infotra').html('<i class="fa fa-bar-chart" aria-hidden="true"></i>资产流转-资产转移');
    var selected=$('#tb1Result').bootstrapTable('getSelections')[0];
    console.log(selected);
    $('#tbxAssetsInfo').val(selected.assetsnamecn);
    $('#tbxPrice').val(selected.price);
    $('#tbxTransDate').val(selected.instocktime);
    $('#tbxHandlerEmp').val(selected.targetempname);
    $('#selPackageType').val(0);
    $('#infotr').modal();
}
function initable()
{
    $('#tb1Result1').bootstrapTable(
        {
            url:'../../mock/baseinfo/Checkout.json',
            dateType:'json',
            striped:true,
            pagination:true,
            pagesize:5,
            columns:column,
            singleSelect:true,
            clickToSelect:true
        }
    )
}
var column = [
        {
            checkbox:true
        },
        {
            title: '资产名称',
            field: 'assetsnamecn'
        },{
        title: '资产编号',
        field: 'batchno'
    },{
        title: '单价',
        field: 'price'
    } ,{
        title: '当前库存量',
        field: 'currentamount'
    },{
        title: '采购人',
        field: 'handlerempname'
    },{
        title: '入库时期',
        field: 'instocktime'
    },{
        title: '领用操作',
        formatter:function (row,value,index) {
            var btnTransInner=$('<option></option>').text('领用')
                .addClass('btn btn-warning')
                .attr('onclick','btnCheckClick()');
            var innerBox=$('<div></div>');
            innerBox.append(btnTransInner);
            return innerBox.html();
        }
    }
    ]
function btnCheckClick() {
    $('#infoch').html('<i class="fa fa-bar-chart" aria-hidden="true"></i>资产流转-资产领用');
    var selected=$('#tb1Result1').bootstrapTable('getSelections')[0];
    console.log(selected);
    $('#tbxAssetsIn').val(selected.assetsnamecn);
    $('#tbxPric').val(selected.price);
    $('#tbxTransDat').val(selected.instocktime);
    $('#selPackageType').val(0);
    $('#infoc').modal();
}
function selcetChange()
{
 var selectvalue=$('#assetop').val();
 if(selectvalue==0)
 {
     $('#outInstockBox').slideDown(500);
     $('#transferBox').slideUp(500);
 }else
     {
         $('#outInstockBox').slideUp(500);
         $('#transferBox').slideDown(500);
     }
}