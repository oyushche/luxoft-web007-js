
function addCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
}

function updateCookieWithExpiredDate(cname, cvalue)
{
    var expires = 'expires=Thu, 01 Jan 1970 00:00:00 UTC;';
    document.cookie = cname + "=" + cvalue + ";" + expires;
}