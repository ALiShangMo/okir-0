$(document).ready(function () {
    initSelect();
    $('#btnSearch').bind('click',initTable);
})
function initSelect() {
    var select = $('#selDictType');
    var option = $('<option></option>').text('---全部---').attr('value', 0);
    select.append(option);
    $.ajax({
        url: '../../mock/baseInfo/sysDict.json',
        method: 'get',
        dataType: 'json',
        success: function (data) {
            $.each(data, function (i, value) {
                var innerOption = $('<option></option>')
                    .text(value.display)
                    .attr('value', value. typecode);
                select.append(innerOption);


            })
        }
    })
}

function initTable() {
    $('#tblResult').bootstrapTable({
        url: '../../mock/baseInfo/sysUserList.json',
        dataType: 'json',
        striped: true,
        pagination: true,
        pageSize: 5,
        pageList: [5, 10, 20],
        pageNumber: 1,
        columns: columns
    })
}
var columns=[
    {
        title:'用户名',
        field:'uid'
    },{
        title:'权限',
        field:'nickName'
    },{
        title:'昵称',
        field:'role'
    },{
        title:'创建时间',
        field:'createTime'
    }

]
