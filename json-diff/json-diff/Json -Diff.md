# Json -Diff

*json字符串对比*

==Waring: 此方法经过测试如果json结果过深,js会抛出栈溢出,所以仅适合结果相对浅的json==





## Folder: json-diff



### 	Qucik Start

##### 		1.项目中引入diff.js diff.css line.gif

​		

##### 		2.使用


```javascript
 var _diff = new Diff({
        "left": "你的json字符串1",
        "right": "你的json字符串2",
        "targetId": "目标值Dom容器Id"
    });

//js写法

//json 对比
function compareTo() {
    _diff.compare();

}


//jq写法

//对比
 $("#compare").click(function() {
     _diff.compare();
 });

//交换left和right
 $("#swap").click(function() {
     _diff.swap();
 });

//清除对比结果字符串
 $("#clear").click(function() {
     _diff.clear();
 });

//展开对比结果字符串
 $("#expand").click(function() {
     _diff.expandAll();
 });

//隐藏对比结果相同部分
 $("#fade-in").click(function() {
 });

//显示对比结果相同部分
 $("#fade-out").click(function() {
     _diff.fadeOut();
 });

//收起对比结果字符串
 $("#collapseAll").click(function() {
     _diff.collapseAll();
 });

 $("#collapse").click(function() {
     _diff.collapse(document.getElementById("result"));
 });
```
##### 			3.可查看demo

