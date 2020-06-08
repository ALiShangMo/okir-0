$(document).ready(function () {
    initSelect();
    initTable();



    $('#outInstockBox').hide();
    $('#selectBtn').bind('change',selectChange);
})
function initSelect() {

}
function initTable() {
    $('#tblResults').bootstrapTable({
        url:'../../mock/carTrans.json',
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
    $('#tblResults2').bootstrapTable({
        url:'../../mock/carTransed.json',
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
        title:'资产名称',
        field:'name'
    },
    {
        title:'批次编号',
        field:'display'
    },
    {
        title:'单价（￥）',
        field:'code'
    },
    {
        title:'持有数量',
        field:'desc'
    },
    {
        title:'当前持有人',
        field:'person'
    },
    {
        title:'领用时间',
        field:'time'
    },
    {
        title:'转移操作',
        formatter:function (row,value,index) {
            var btnInstockInner=$('<button id="btnPan"></button>').html('<i class="fa fa-exchange" aria-hidden="true"></i>转移')
                .attr('onclick','btnPanClick()')
                .addClass('btn btn-info');
            var innerBox=$('<div></div>');
            innerBox.append(btnInstockInner);
            return innerBox.html();
        }
    }

]
function btnPanClick(){
    $('#info').modal();
}

function selectChange(){
    var selectedValue=$('#selectBtn').val();


    if(selectedValue==1) {
        $('#outInstockBox').hide();
        $('#transferBox').show();
    }
    else{
        $('#outInstockBox').show();
        $('#transferBox').hide();
    }
}
