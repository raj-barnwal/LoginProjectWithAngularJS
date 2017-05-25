/**
 * Created by Raj on 5/24/2017.
 */
function onLoadFunction () {
    gapi.client.setApiKey('AIzaSyBi6sVuiPnCDP9NbhzAvmlpJM3YZZUP1iI');
    gapi.client.load('plus', 'vi', function () {});
}

window.fbAsyncInit = function() {
    FB.init({
        appId            : '1975597652662470',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.9',
        status           : true
    });
    FB.getLoginStatus(function(response) {
       if(response.status === 'connected'){
            //connected
       }
       else if(response.status === 'not authorized'){
            //Not authorized
       }
       else {
           //not logged in
       }
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));