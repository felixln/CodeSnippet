
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

var val = $("#checkAll").val();// ��ȡָ��id�ĸ�ѡ���ֵ
  var isSelected = $("#checkAll").attr("checked"); // �ж�id=checkAll���Ǹ���ѡ���Ƿ���ѡ��״̬��ѡ����isSelected=true;����isSelected=false;  //jquery1.6֮��汾����prop()�жϡ�Ӧ��д�� isSelected = $("#checkAll").prop("checked");
$("#checkAll").attr("checked", true);
$("#checkAll").attr("checked", 'checked');
$("#checkAll").attr("checked", false);
$("#checkAll").attr("checked", '');
$("input[name=subBox][value=3]").attr("checked", '');// ��name=subBox, value=3 ���Ǹ���ѡ��ѡ�У�������  
$("input[type=checkbox][name=subBox]").get(2).checked = true;// ����index = 2����������Ϊѡ��״̬  
$("input[type=checkbox]:checked").each(function(){ //���ڸ�ѡ��һ��ѡ�е��Ƕ��,���Կ���ѭ�����ѡ�е�ֵ  
    alert($(this).val());	// elem.focus();
  });

  // ���õ�һ��checkbox Ϊѡ��ֵ
$('input:checkbox:first').attr("checked",'checked');
$('input:checkbox').eq(0).attr("checked",'true');

// �������һ��checkboxΪѡ��ֵ
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
		console.log('���Ƴɹ�');
	}
	document.body.removeChild(elem);
}

// select
  $("#select_id").change(function(){// 1.ΪSelect����¼�����ѡ������һ��ʱ����   
        //code...  
    });  
    var checkValue = $("#select_id").val();// 2.��ȡSelectѡ�����Value  
    var checkText = $("#select_id :selected").text(); // 3.��ȡSelectѡ�����Text 
    var checkIndex = $("#select_id").attr("selectedIndex");// 4.��ȡSelectѡ���������ֵ,���ߣ�$("#select_id").get(0).selectedIndex;  
    var maxIndex =$("#select_id :last").get(0).index;// 5.��ȡSelect��������ֵ
    /** 
     * jQuery����Select��ѡ���� 
     */  
    $("#select_id").get(0).selectedIndex = 1;// 1.����Select����ֵΪ1����ѡ��  
    $("#select_id").val(4);// 2.����Select��ValueֵΪ4����ѡ��  
    /** 
     * jQuery���/ɾ��Select��Option�� 
     */  
    $("#select_id").append("<option value='����'>����option</option>");// 1.ΪSelect׷��һ��Option(������)   
    $("#select_id").prepend("<option value='��ѡ��'>��ѡ��</option>");// 2.ΪSelect����һ��Option(��һ��λ��)  
    $("#select_id").get(0).remove(1);// 3.ɾ��Select������ֵΪ1��Option(�ڶ���)  
    $("#select_id :last").remove();// 4.ɾ��Select������ֵ���Option(���һ��)   
    $("#select_id [value='3']").remove();// 5.ɾ��Select��Value='3'��Option   
    $("#select_id").empty();             

   $("#select_id").find("option:selected").text();// ��ȡselect ѡ�е� text :
   $("#select_id").val(); // ��ȡselectѡ�е� value:
   $("#select_id").get(0).selectedIndex;// ��ȡselectѡ�е�����:

 //����select ѡ�е�value��
    $("#select_id").attr("value","Normal");
    $("#select_id").val("Normal");
    $("#select_id").get(0).value = value;

