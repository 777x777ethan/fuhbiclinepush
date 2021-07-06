function Login() {
    var userID = document.getElementById("userID").value;
    if (userID != '') {
        var xhr = new XMLHttpRequest();
        var _url = "https://script.google.com/macros/s/AKfycbycRVO2_r8E1KW5ZVieR4ekC4IdNg6xajgJHshJy7B2JYM0kZ2dMPXqj76cn-dC0rmlTQ/exec";
        xhr.open("POST", _url, true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send("UserName=" + userID);
        xhr.onload = function() {
            if (this.responseText = "OK") {
                var _changeUrl = "https://notify-bot.line.me/oauth/authorize?";
                _changeUrl += "response_type=code";
                _changeUrl += "&client_id=7flF9g8ZjNmsHjXz2UV8HE";
                _changeUrl += "&redirect_uri=http://localhost/EthanLinePush";
                _changeUrl += "&scope=notify";
                _changeUrl += "&state=" + userID;
                window.location.assign(_changeUrl);
            }
        }
    }
}