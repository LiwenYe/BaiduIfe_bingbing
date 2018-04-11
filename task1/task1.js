function validate_form() {
    var name = document.getElementsByTagName('input')[0];
    var remind = document.getElementsByTagName('span')[0];
    var name_length=checkLength(name.value);
    if (name_length == 0){
        remind.innerHTML = "姓名不能为空！";
        remind.style.color = "red";
        name.style.borderColor = 'red';
        return false;
    } else if (name_length<4 || name_length>16){
        remind.innerHTML = "格式错误,长度需为4~16个字符";
        remind.style.color = "red";
        name.style.borderColor = 'red';
        return false;
    }else {
        remind.innerHTML = "格式正确";
        remind.style.color = "green";
        name.style.borderColor = "green";
        return false
    }

}
function checkLength(str) {
    return str.replace(/[^\x00-\xff]/g,'xx').length;//\x00-\xff单字节字符
}
