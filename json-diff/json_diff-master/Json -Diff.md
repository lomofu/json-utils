# Json -Diff

*json字符串对比*





## Folder: json-diff



### 	Qucik Start

##### 		1.项目中引入diff.js pretty.css main.js

​		

##### 		2.使用


```javascript
 function  Diff (oldJsonData, newJsonData) {
        var instance = jsondiffpatch.create({
            objectHash: function (obj, index) {
                if (typeof obj._id !== 'undefined') {
                    return obj._id;
                }
                if (typeof obj.id !== 'undefined') {
                    return obj.id;
                }
                if (typeof obj.name !== 'undefined') {
                    return obj.name;
                }
                return '$$index:' + index;
            },
        });
     
        var delta = instance.diff(oldJsonData, newJsonData);
        var html = jsondiffpatch.formatters.html.format(delta, oldJsonData);
        jsondiffpatch.formatters.html.showUnchanged();
     
        result.setValue('<div class ="result-jsonData" >' + html + '</div>')
    },
```
##### 			3.可查看demo

