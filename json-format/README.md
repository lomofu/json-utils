# JSONFormat
json format json*格式化*

[引用:JSON格式化工具](https://xunqf.github.io/JSONFormat/)



### Quick Start

##### 1.项目中引入 c.js m.js  图片 .css



##### 2.使用

```javascript
function Process(json) 
	{    
        
        //设置缩进
        SetTab();
        //JSON自带解析json字符串
        var json = JSON.stringify(json);    
        var html = "";    
        try {        
            if (json == "") {            
                json = "\"\"";        
            }        
            var obj = eval("[" + json + "]");        
            html = ProcessObject(obj[0], 0, false, false, false);        
            return html;    
        } catch (e) {         
        }
    }
```



##### 3.详情demo