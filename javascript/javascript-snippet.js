
// $ function
$( function () {
})
// document ready
$(document).ready(function(){
});

//click even
$("#id").click(function(){
	//do something
})

// select all checkboxes
$("#checkAll").click(function(){
	$("input.chkBox:checkbox").attr("checked", this.checked);
})

$("#checkbox").change(function() {
    alert(this.checked);
});

//checkbox which are checked
$("input.chkBox:checkbox:checked")

// checkbox
document.getElementById("id").checked
document.getElementsByClassName("a1")[0].checked  //array member
$("input:checkbox:checked").val()
$('#checkbox-id').prop('checked')
$('#checkbox-id').is(':checked')
$("#checkbox-id")get(0).checked

var val = $("#checkAll").val();// 获取指定id的复选框的值
  var isSelected = $("#checkAll").attr("checked"); // 判断id=checkAll的那个复选框是否处于选中状态，选中则isSelected=true;否则isSelected=false;  //jquery1.6之后版本，用prop()判断。应该写成 isSelected = $("#checkAll").prop("checked");
$("#checkAll").attr("checked", true);
$("#checkAll").attr("checked", 'checked');
$("#checkAll").attr("checked", false);
$("#checkAll").attr("checked", '');
$("input[name=subBox][value=3]").attr("checked", '');// 将name=subBox, value=3 的那个复选框不选中，即不打勾  
$("input[type=checkbox][name=subBox]").get(2).checked = true;// 设置index = 2，即第三项为选中状态  
$("input[type=checkbox]:checked").each(function(){ //由于复选框一般选中的是多个,所以可以循环输出选中的值  
    alert($(this).val());	// elem.focus();
  });

  // 设置第一个checkbox 为选中值
$('input:checkbox:first').attr("checked",'checked');
$('input:checkbox').eq(0).attr("checked",'true');

// 设置最后一个checkbox为选中值
$('input:radio:last').attr('checked', 'checked');
$('input:radio:last').attr('checked', 'true');

// check odd items
$("input[name='checkbox']:odd").attr("checked","true");
// check even items
$("input[name='checkbox']:even").attr("checked","true"); 

// static foreach

// instance foreach
$("a").each(function (index, domEle) {
	txt += this.href + "\r\n";
});

//copy to clipboard
function copy(content) {
	const elem = document.createElement('textarea');
	elem.setAttribute('readonly', 'readonly');
	elem.setAttribute('value', content);
	elem.value = content;
	document.body.appendChild(elem);
	// elem.focus();
	// input.setSelectionRange(0, 9999);
	elem.select();
	if (document.execCommand('copy')) {
		// document.execCommand('copy');
		console.log('复制成功');
	}
	document.body.removeChild(elem);
}

// select
  $("#select_id").change(function(){// 1.为Select添加事件，当选择其中一项时触发   
        //code...  
    });  
    var checkValue = $("#select_id").val();// 2.获取Select选中项的Value  
    var checkText = $("#select_id :selected").text(); // 3.获取Select选中项的Text 
    var checkIndex = $("#select_id").attr("selectedIndex");// 4.获取Select选中项的索引值,或者：$("#select_id").get(0).selectedIndex;  
    var maxIndex =$("#select_id :last").get(0).index;// 5.获取Select最大的索引值
    /** 
     * jQuery设置Select的选中项 
     */  
    $("#select_id").get(0).selectedIndex = 1;// 1.设置Select索引值为1的项选中  
    $("#select_id").val(4);// 2.设置Select的Value值为4的项选中  
    /** 
     * jQuery添加/删除Select的Option项 
     */  
    $("#select_id").append("<option value='新增'>新增option</option>");// 1.为Select追加一个Option(下拉项)   
    $("#select_id").prepend("<option value='请选择'>请选择</option>");// 2.为Select插入一个Option(第一个位置)  
    $("#select_id").get(0).remove(1);// 3.删除Select中索引值为1的Option(第二个)  
    $("#select_id :last").remove();// 4.删除Select中索引值最大Option(最后一个)   
    $("#select_id [value='3']").remove();// 5.删除Select中Value='3'的Option   
    $("#select_id").empty();             

   $("#select_id").find("option:selected").text();// 获取select 选中的 text :
   $("#select_id").val(); // 获取select选中的 value:
   $("#select_id").get(0).selectedIndex;// 获取select选中的索引:

 //设置select 选中的value：
    $("#select_id").attr("value","Normal");
    $("#select_id").val("Normal");
    $("#select_id").get(0).value = value;

