$(document).ready(function () {
      initSelect();

      $('#btnSearch').bind('click',initTable);
})

function initSelect() {
var select=$('#selIDictType');

var option=$('<option></option>').text('---全部---').attr('value',0);
select.append(option);

$.ajax({
      url:'../../mock/sysDict.json',
      method:'get',
      dataType:'json',
      success:function (data) {
            $.each(data,function (i,value) {

                  var innerOption = $('<option></option>')
                      .text(value.display)
                      .attr('value',value.typecode);

                  select.append(innerOption);

            })

      }
})
}
function initTable() {
      $('#tblResult').bootstrapTable({
            url:'../../mock/sysDictList.json',
            dataType:'json',
            striped:true,
            pagination:true,
            pageSize:5,
            pageList:[5,10,20],
            pageNumber:1,
            columns:columns
      })

}
var columns=[
      {
            title:'编码值',
            field:'value'
      },
      {
            title:'显示值',
            field:'display'
      },
      {
            title:'所属类型',
            field:'typeCode'
      },
      {
            title:'备注信息',
            field:'desc'
      }

]

