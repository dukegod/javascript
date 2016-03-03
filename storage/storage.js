
if(window.localStorage && $.browser.version!=8.0 && $.browser.version!=7.0){
  late = {  
        storage : {},  
        isinit : 0,  
        maxnum : 6,  //最多存储的数量
        key : 'vestigial',  
        _init:function(){  
            if (late.isinit === 1) {  
                return true;  
            } else if (late.isinit === 0 && window.localStorage) {  
                late.isinit = 1;  
                late.storage = window.localStorage;  //本地存储
                return true;  
            } else {  
                return false;  
            }  
        },  
        get:function(){  //获取记录
            if(late._init()){  
                var data = late.storage.getItem(late.key);  
                return JSON.parse(data); //解析json串
            }else{  
                return false;  
            }  
        },  
        set:function(value){  //设置记录
            if(late._init()){  
                var data = late.storage.getItem(late.key);   
                data = JSON.parse(data);  
                if(data === null){  //判断是否为空
                    data = [];  
                }  
                if (data.length === 6) {  //是否已经超过记录的最大值
                    data.pop();  //移除最后插入的
                }            
                data.unshift(value);  //在最前面插入新加的字符串
                data = JSON.stringify(data);  //序列化json串
                late.storage.setItem(late.key, data);  //添加记录
                return true;  
            }else{  
                return false;  
            }  
        }  
    };
    var flag = $("#newsflag").val();//获取标记位置，判断是否为新闻
    if(flag==0)    {
       var each = late.get();
       if(!each){
         $(".Myrecord_list").html('<p class="no_font">您暂无看过的内容</p>');
       }else{
        var _length = each.length;
        var temp = '';
        for(i=0; i<_length; i++){  
            var str = JSON.stringify(each[i]);//序列化字符串
            var _objs = JSON.parse(str);//解析json串
            temp += '<li class="clearfix"><a href="'+ _objs.url +'" class="block fl"><img src="'+ _objs.img +'" width="86" height="48"></a><div class="Myrecord_list_f fr"> <a href="'+ _objs.url +'"><h2>'+_objs.title+'</h2><p>'+ _objs.desc +'</p></a></div></li>';
        }
       $(".Myrecord_list").html(temp);//将记录添加到容器里
       }
    }else{//flag=1 新闻内页
        var obj = {  
            img:$("#news_img_s").val(),   //图片路径
            title:$("#news_title_s").val(), //标题
            desc:$("#news_desc_s").val(),  //描述          
            url:document.location.href,//浏览器url
            id:$("#news_id_s").val()//是否为新闻标记
         };
         if(obj.img==''){//如果没有存储的图片，调用统一的图片进行替换
           obj.img = '/images/v2/1_img.jpg';
         }
        var each = late.get();//获取记录
        if(!each){
          late.set(obj);//设置记录
        }
       else{
      var eachlength = each.length;
      for(i=0; i<eachlength; i++){
         var str = JSON.stringify(each[i]);
         var _obj = JSON.parse(str);
         if(obj.id ==_obj.id){
            break;
          }else{
            if(i==(eachlength-1)){
              late.set(obj);
              break;
            }else{
              continue;
            }
          }
         }
      }
    each = late.get();
    var _length = each.length;
    var temp = '';
    for(i=0; i<_length; i++){  
        var str = JSON.stringify(each[i]);
        var _objs = JSON.parse(str);
        temp += '<li class="clearfix"><a href="'+ _objs.url +'" class="block fl"><img src="'+ _objs.img +'" width="86" height="48"></a><div class="Myrecord_list_f fr"> <a href="'+ _objs.url +'"><h2>'+_objs.title+'</h2><p>'+ _objs.desc +'</p></a></div></li>';
      }
     $(".Myrecord_list").html(temp);
    }
}
else{//执行cookie
       var flag = $("#newsflag").val();
       if(flag == 1){
           //设置和存储cookie
           var art_title = document.title;//新闻标题
           //var _id = $("#news_id_s").val();
           var art_url = document.URL;//url
           var news;
           var json="[";
           var json1;
           var canAdd= true;
           //var json1=eval("({sitename:'dreamdu',sitedate:new Date(1980, 12, 17, 12, 0, 0)})");
           if(!$.cookie("news")){
            //第一次的时候需要初始化
            news = $.cookie("news","{title:\""+art_title+"\""+",url:\""+art_url+"\"}");//存储记录
           }else {//如果记录已经存在
            //已经存在
            news = $.cookie("news");//获取cookie
            json1 = eval("("+news+")");//解析cookie
            $(json1).each(function(){//对记录进行循环
             if(this.title==art_title){//如果是相同的记录
              canAdd=false;
              return false;
             }
            })
            if(canAdd){
             $(json1).each(function(){
              json = json + "{\"title\":\""+this.title+"\",\"url\":\""+this.url+"\"},";
             })
             json = json + "{\"title\":\""+art_title+"\",\"url\":\""+art_url+"\"}]"; 
             $.cookie("news",json,{expires:7});
            }
          }
       }
       //展示cookie
       if($.cookie("news")){
        var json = eval("("+$.cookie("news")+")");  
        var list ="";   
        $(json).each(function(){
         list += '<li class="clearfix"><a href="'+ this.url +'" class="block fl"><img src="/images/v2/1_img.jpg" width="86" height="48"></a><div class="Myrecord_list_f fr"> <a href="'+ this.url +'"><h2>'+this.title+'</h2><p>'+ this.title +'</p></a></div></li>';
        })
        $(".Myrecord_list").html(list);
       }
       else{
         $(".Myrecord_list").html('<p class="no_font">您暂无看过的内容</p>');
       }
    }
