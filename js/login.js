var urlData = location.search.trimStart("?");
var _code = urlData.split("&")[0].split("=")[1];
var _name = urlData.split("&")[1].split("=")[1];
if (_code != '' && _name != '') {
    var xhr = new XMLHttpRequest();
    var _url = "https://notify-bot.line.me/oauth/token";
    var postData = "grant_type=authorization_code"
    postData += "&code=" + _code
    postData += "&redirect_uri=https://777x777ethan.github.io/fuhbiclinepush"
    postData += "&client_id=7flF9g8ZjNmsHjXz2UV8HE"
    postData += "&client_secret=" + "xFxa7ptyBeSSRbZWfMrONtR8REsxbC7XgwtBxniAwGF"
    xhr.open("POST", _url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(postData);
    xhr.onload = function() {
        if (this.responseText != '') {
            _code = this.responseText
            var xhr2 = new XMLHttpRequest();
            var _url2 = "https://script.google.com/macros/s/AKfycbycRVO2_r8E1KW5ZVieR4ekC4IdNg6xajgJHshJy7B2JYM0kZ2dMPXqj76cn-dC0rmlTQ/exec";
            xhr2.open("POST", _url2, true);
            xhr2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr2.send("UserName=" + _name + "&UserID=" + _code);
            xhr2.onload = function() {
                if (this.responseText = "OK") {
                    console.log("OK")
                }
            }
        }
    }
}

function Login() {
    var userID = document.getElementById("userID").value;
    if (userID != '') {
        var _changeUrl = "https://notify-bot.line.me/oauth/authorize?";
        _changeUrl += "response_type=code";
        _changeUrl += "&client_id=7flF9g8ZjNmsHjXz2UV8HE";
        _changeUrl += "&redirect_uri=https://777x777ethan.github.io/fuhbiclinepush";
        _changeUrl += "&scope=notify";
        _changeUrl += "&state=" + userID;
        window.location.assign(_changeUrl);


    }
}
