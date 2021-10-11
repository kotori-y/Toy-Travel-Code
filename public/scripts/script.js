document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  if (cordova.platformId === "android") {
    StatusBar.overlaysWebView(true);
    StatusBar.backgroundColorByHexString("#33000000");
  }
}
