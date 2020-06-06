$(document).ready(function (){
    initTable();
    initTable2();
    $('#transferBox').hide();

    $('#selTransType').bind('change',selectChange);
})
function initTable() {
    $('#tblResult').bootstrapTable({
        url: '../../mock/trans/transList.json',
        toolbar:'#toolbar',
        dataType: 'json',
        striped: true,
        pagination: true,
        pageSize: 5,
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
        title:'资产名称',
        field:'assetsnamecn'
    },{
        title:'NORO10102-151412333',
        field:'batchno'
    },{
        title:'4980.00',
        field:'price'
    },{
        title:'',
        field:'currentamount'
    },{
        title:'2',
        field:'handlerempname'
    },{
        title:'2017/2/18',
        field:'instocktime'
    },
    {
        title:'领用',
        formatter:function (row,value,index) {
            var btnInstockInner=$('<button class="btn btn-primary"></button>').html('<i class="fa fa-th-list" aria-hidden="true"></i>领用')
                .attr('onclick','btnlyClick()');
            var innerBox=$('<div></div>');
            innerBox.append(btnInstockInner);
           return innerBox.html();
        }

    }
]
function initTable2() {
    $('#tblResult2').bootstrapTable({
        url: '../../mock/trans/trans.json',
        toolbar:'#toolbar',
        dataType: 'json',
        striped: true,
        pagination: true,
        pageSize: 1,
        pageList: [5, 10, 20],
        pageNumber: 1,
        columns: columns1,
        singleSelect:true,
        clickToSelect:true

    })
}
var columns1=[
    {
        checkbox:true
    }
    ,
    {
        title:' 资产名称',
        field:'assetsnamecn'
    },{
        title:'批次编号',
        field:'batchno'
    },{
        title:'单价 ',
        field:'price'
    },{
        title:'持有数量',
        field:'currentamount'
    },{
        title:' 当前持有人',
        field:'targetempname'
    },{
        title:'领用时间',
        field:'instocktime'
    },
    {
        title:'转移',
        formatter:function (row,value,index) {
            var btnInstockInner=$('<button class="btn btn-primary"></button>').html('<i class="fa fa-th-list" aria-hidden="true"></i>转移')
                .attr('onclick','btnzyClick()');
            var innerBox=$('<div></div>');
            innerBox.append(btnInstockInner);
            return innerBox.html();
        }

    }
]

function selectChange(){
    var selectedValue=$('#selTransType').val();
    if(selectedValue==1){
        $('#outInstockBox').show();
        $('#transferBox').hide();
    }else{
        $('#transferBox').show();
        $('#outInstockBox').hide();
    }
}

function btnlyClick() {
    var selected=$('#tblResult').bootstrapTable('getSelections')[0];
    console.log(selected);
    $('#assetsnamecnFor').val(selected.assetsnamecn);
    $('#assetsnamecnFor').val(selected.batchno);
    $('#info').modal();

}

function btnzyClick(){
    var selected=$('#tblResult2').bootstrapTable('getSelections')[0];
    console.log(selected);
    $('#assetsnamecnFor1').val(selected.assetsnamecn);
    $('#assetsnamecnFor1').val(selected.batchno);
    $('#info1').modal();
}