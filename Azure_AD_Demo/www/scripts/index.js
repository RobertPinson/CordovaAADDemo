// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        var authority = "https://login.microsoftonline.com/common",
            redirectUri = "http://YouShopApp",
            resourceUri = "https://graph.windows.net",
            clientId = "3fa12371-5e2d-45e0-9e00-3564cb61566f",
            graphApiVersion = "2013-11-08";

        var AuthenticationContext = Microsoft.ADAL.AuthenticationContext;
        window.setTimeout(function() {
            AuthenticationContext.createAsync(authority)
                .then(function(authContext) {
                    authContext.aquireTokenAsync(
                            resourceUri,
                            clientId,
                            redirectUri)
                        .then(function(authResponse) {
                                console.log("Token acuired: " + authResponse.accessToken);
                                console.log("Token wil expire on: " + authResponse.expiresOn);
                            },
                            function(e) {
                                console.log(e.message);

                            });
                }, function(e) {
                    console.log(e.message);

                });
        }, 2000);
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();