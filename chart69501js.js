$("#btn_add").click(function () {
     $("#myModalLabel").text("新增");
     $('#myModal').modal();
 });


/*
  *统一设置所有条目的
  */
  function setItemCheckBox(flag) {
    $(":checkbox[name=chart69501radio]").prop("checked",flag);
  }
  $(function () {
    //点击全选
    $("#chart69501All").click(function(){
      //1.获取全选的状态
      var flag = this.checked;//获取全选的状态
      if(flag){
        $(this).prop("checked", true);
      }else{
        $(this).prop("checked", false);
      }
      //var flag = $(":checkbox[name=chart69501All]").attr("checked");//jquery-1.5.1的用法
      //2.让所有条目的复选框与全选的状态同步
      //alert(flag);
      setItemCheckBox(flag);
    });
    //给所有复选框添加事件
    $(":checkbox[name=chart69501radio]").click(function(){
      var flagV = this.checked;
      if(flagV){
        $(this).prop("checked", true);
      }else{
        $(this).prop("checked", false);
      }
      //获取所有复选框的个数
      var len = $(":checkbox[name=chart69501radio]").length;
      //获取所有被选中的复选框的个数
      var checked_len = $(":checkbox[name=chart69501radio]:checked").length;
      if(len == checked_len){
        //alert("全选中了");
        $("#chart69501All").prop("checked",true);
      } else if(checked_len == 0) {
        $("#chart69501All").prop("checked",false);
      } else {
        $("#chart69501All").prop("checked",false);
      }
    });
  });

 /*
  *统一设置所有条目的
  */
  function setItemCheckBox1(flag) {
    $(":checkbox[name=chart69501radio1]").prop("checked",flag);
  }
  $(function () {
    //点击全选
    $("#chart69501All1").click(function(){
      //1.获取全选的状态
      var flag = this.checked;//获取全选的状态
      if(flag){
        $(this).prop("checked", true);
      }else{
        $(this).prop("checked", false);
      }
      //var flag = $(":checkbox[name=chart69501All1]").attr("checked");//jquery-1.5.1的用法
      //2.让所有条目的复选框与全选的状态同步
      //alert(flag);
      setItemCheckBox(flag);
    });
    //给所有复选框添加事件
    $(":checkbox[name=chart69501radio1]").click(function(){
      var flagV = this.checked;
      if(flagV){
        $(this).prop("checked", true);
      }else{
        $(this).prop("checked", false);
      }
      //获取所有复选框的个数
      var len = $(":checkbox[name=chart69501radio1]").length;
      //获取所有被选中的复选框的个数
      var checked_len = $(":checkbox[name=chart69501radio1]:checked").length;
      if(len == checked_len){
        //alert("全选中了");
        $("#chart69501All1").prop("checked",true);
      } else if(checked_len == 0) {
        $("#chart69501All1").prop("checked",false);
      } else {
        $("#chart69501All1").prop("checked",false);
      }
    });
  });


function chart69501data(){
var radio1 = $('[name="chart69501radio"]');
var chart69501autoid =$('[name="chart69501autoid"]');
var chart69501qty =$('[name="chart69501qty"]');
var chart69501tableid =$('[name="chart69501tableid"]');
var chart69501group =$('[name="chart69501group"]');
var chart69501type =$('[name="chart69501type"]');
var chart69501tableid =$('[name="chart69501tableid"]');
aai=0;
for (ai = 0; ai < radio1.length; ++ai) {
            if (radio1[ai].checked) {
               aai++;
            }
        }

if(aai==0){alert('请先选择！');
}

else{
var val1=''
var val2=''
var val3=''
var val4=''
var val5=''
var cc=''
 var dd=''
 var d=''
 var count=0
   for (i = 0; i < radio1.length; ++i) {
            if (radio1[i].checked){


 if(Number($(chart69501qty[i]).val()) ==0 || Number($(chart69501qty[i]).val()) ==null ){
if(cc==''){
cc="请填写数量" ;}
}

else if(d =='' || $(chart69501type[i]).html() != dd){
dd =$(chart69501type[i]).html()
d="请选择同类型作业！" ;
var count=count+1
}

if( cc=='' && count==1)
{


val1 = val1 + radio1[i].value + ","
val2 =  val2 + $(chart69501autoid[i]).html() + ","
val3 = val3 + $(chart69501qty[i]).val() + ","
val4 = val4 + $(chart69501group[i]).html() + ","
val5 =  val5 + $(chart69501tableid[i]).html() + ","


 }
}

}
 if (cc > ''){
alert(cc);}
else if (count> 1){
alert(d);}
else {

doclick('chart69501-11',val1,val2,val3,val4,val5);
}

}
}


function chart69501remove(){
var radio1 = $('[name="chart69501radio1"]');
var chart69501autoid1 =$('[name="chart69501autoid1"]');
var chart69501tableid1 =$('[name="chart69501tableid1"]');
var chart69501tableid2 =$('[name="chart69501tableid2"]');
aai=0;
for (ai = 0; ai < radio1.length; ++ai) {
            if (radio1[ai].checked) {
               aai++;
            }
        }

if(aai==0){alert('请先选择！');
}

else{
var val1=''
var val2=''
var val3=''
var val4=''
var cc=''
 var dd=''
   for (i = 0; i < radio1.length; ++i) {
            if (radio1[i].checked){



val1 = val1 + radio1[i].value + ","
val2 =  val2 + $(chart69501autoid1[i]).html() + ","


$("#"+$(chart69501tableid1[i]).html()+"").remove();

$("#"+$(chart69501tableid2[i]).html()+"").remove();


 }
}

doclick('chart69501-13',val1);}


}
  function selectOnchang(obj){
        //获取被选中的option标签选项
     //  alert(obj.selectedIndex);
var index = obj.selectedIndex;
var value = obj.options[index].value;
var a=String(value)
console.log(a);
doclick('chart69501-8',a)

        }

  function chart69501memberin(){
									var val = '';
									var strSel = '';
                    $("#chart69501member  option:selected").each(function(index, element) {

                         strSel += $(this).val() + ",";

												 $("#chart69501member   option").attr('selected','');
                     });
                  //  alert(""+strSel);
var a=String(strSel)

  doclick('chart69501-7',a)
                }





    $(document).ready(function(){
//按钮转换
 $('.btn').click(function(){
var a = $(this).attr('class');
console.log(a);
if (a=="btn btn-primary"){

 $(this).removeClass('btn-primary');
 $(this).toggleClass('btn-default');
chart69501data1('0')
//alert ("1");
	}
else if (a=="btn btn-default"){

 $(this).removeClass('btn-default');
 $(this).toggleClass('btn-primary');
chart69501data1('0')
//alert ("2");
	}
				});
});




  $(document).ready(function(){
//按钮转换
 $('.btn').click(function(){
var a = $(this).attr('class');
console.log(a);
if (a=="btn btn-link"){

 $(this).removeClass('btn-link');
 $(this).toggleClass('btn-info');

	}
else if (a=="btn btn-info"){

 $(this).removeClass('btn-info');
 $(this).toggleClass('btn-link');



	}
				});
});





function chart69501data1(Q){
var chart69501intype = $('[name="chart69501intype"]');

var a=''
var val1=''

   for (i = 0; i < chart69501intype.length; ++i) {
     var a = $(chart69501intype[i]).attr("class")
console.log(a)
if (a=='btn btn-primary'){
val1 = val1 + $(chart69501intype[i]).val() + ",";
}

}
console.log(val1)
doclick('chart69501-10',gets('chart69501ddate1'),gets('chart69501ddate2'),gets('chart69501search'),val1,Q)
}


function chart69501click(){

var chart69501intype = $('[name="chart69501intype"]');
 for (i = 0; i < chart69501intype.length; ++i) {

var a = $(chart69501intype[i]).attr('class');

           if (a=="btn btn-primary"){

 $(chart69501intype[i]).removeClass('btn-primary');
 $(chart69501intype[i]).toggleClass('btn-default');
	}
else if (a=="btn btn-default"){

 $(chart69501intype[i]).removeClass('btn-default');
 $(chart69501intype[i]).toggleClass('btn-primary');
	}
}

chart69501data1('0')

}
