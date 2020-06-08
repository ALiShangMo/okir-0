/**
 * Created by lenovo on 2020/1/6.
 */
$(document).ready(function(){
    initSelect();
    inittable();
})
function initSelect() {
    var select = $("#parentId");
    var option = $('<option></option>').text('--全部--').attr('value', 0);
    select.append(option);
    $.ajax
    ({
        url: '../../mock/categoryList.json',
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
}
function inittable()
{
    $('#tb1Result').bootstrapTable(
        {
            url:'../../mock/category.json',
            dateType:'json',
            striped:true,
            pagination:true,
            pageList:[5,10],
            pageSize:5,
            columns:columns
        }
    )
}
var columns = [
        {
            title: '分类编码',
            field: ' code'
        },{
        title: '上级分类',
        field: 'parentId'
    },{
        title: '分类名称',
        field: 'nameCn'
    } ,{
        title: '其他说明',
        field: 'comment'
    }
    ]