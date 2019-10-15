var testJson1 = {  "id" : 2227} 
var testJson2 ={  "id" : 2227}  
function repeat(s, count) {
    return new Array(count + 1).join(s);
}

function returnJsonHtml(json) {
    json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
    return json;
}

function formatJson(str) {
    var json = str;
    var i = 0,
        len = 0,
        tab = "    ",
        targetJson = "",
        indentLevel = 0,
        inString = false,
        currentChar = null;


    for (i = 0, len = json.length; i < len; i += 1) {
        currentChar = json.charAt(i);

        switch (currentChar) {
            case '{':
            case '[':
                if (!inString) {
                    targetJson += currentChar + "\n" + repeat(tab, indentLevel + 1);
                    indentLevel += 1;
                } else {
                    targetJson += currentChar;
                }
                break;
            case '}':
            case ']':
                if (!inString) {
                    indentLevel -= 1;
                    targetJson += "\n" + repeat(tab, indentLevel) + currentChar;
                } else {
                    targetJson += currentChar;
                }
                break;
            case ',':
                if (!inString) {
                    targetJson += ",\n" + repeat(tab, indentLevel);
                } else {
                    targetJson += currentChar;
                }
                break;
            case ':':
                if (!inString) {
                    targetJson += ": ";
                } else {
                    targetJson += currentChar;
                }
                break;
            case ' ':
            case "\n":
            case "\t":
                if (inString) {
                    targetJson += currentChar;
                }
                break;
            case '"':
                if (i > 0 && json.charAt(i - 1) !== '\\') {
                    inString = !inString;
                }
                targetJson += currentChar;
                break;
            default:
                targetJson += currentChar;
                break;
        }
    }
    return targetJson;
}


window.onload = function() {
    var instance = jsondiffpatch.create({
        objectHash: function(obj, index) {
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

    debugger
    var visualdiff = document.getElementById('visual');
    var json1 = JSON.stringify(testJson1, null, 2);
    var json2 = JSON.stringify(testJson2, null, 2);

    var delta = instance.diff(testJson1, testJson2);

    document.querySelector(".test1").innerHTML = returnJsonHtml(formatJson(json1));
    document.querySelector(".test2").innerHTML = returnJsonHtml(formatJson(json2));
    visualdiff.innerHTML = jsondiffpatch.formatters.html.format(delta, testJson1);
    jsondiffpatch.formatters.html.showUnchanged()
}
