function LinePush() {
    var userID = document.getElementById("userID").value;
    var txtID = document.getElementById("txtID").value;
    if (userID != '' && txtID != '') {
        var postData = "TxtID=" + txtID + "&UserID=" + userID;
        postData = encodeURI(postData);
        var xhr = new XMLHttpRequest();
        var _url = "https://script.google.com/macros/s/AKfycbxsOmuc3Z34fy5WXQ1QGeLEM89ukn8dtK7wQt82Y4nd4ptfjAyyPB262cjD48Yx3NGHmg/exec";
        xhr.open("POST", _url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(postData);
        document.getElementById("userID").value = '';
        document.getElementById("txtID").value = '';
        alert("已發送");
    }
}
