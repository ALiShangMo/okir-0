$(document).ready(function () {
    initSelect();
   initTable();
})

function initSelect() {
    var  select=$('#selDictType');
    var  option=$('<option></option>').text('---全部---').attr('value',0);
    select.append(option);

    $.ajax({
        url:'../../mock/employee.json',
        method:'get',
        dataType:'json',
        success:function (data) {
            $.each(data,function (i,value){
                var innerOption=$('<option></option>').text(value.display);
                select.append(innerOption);

            })

        }

    })
}

function initTable() {
  $('#tblResult').bootstrapTable({
      url:'../../mock/employeeList.json',
      dataType: 'json',
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
        title:'员工编号',
        field:'empNo'
    },{
        title:'姓名',
        field:'namecn'
    },{
        title:'所在部门',
        field:'dept'
    },{
        title:'上级',
        field:'reportTo'
    }
]

