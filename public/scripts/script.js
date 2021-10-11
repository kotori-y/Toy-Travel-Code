document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
  if (cordova.platformId === "android") {
    StatusBar.overlaysWebView(true);
    StatusBar.backgroundColorByHexString("#33000000");
  }
}

export const setCookie = (name, value) => {
  let date = new Date();
  date.setTime(date.getTime() + (5 * 60 * 1000))
  const expires = "; expires=" + date.toUTCString()
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

export const getCookie = (name) => {
  let nameEQ = name + "=";
  let ca = document.cookie.split(';');
  for(let i=0;i < ca.length;i++) {
    let c = ca[i];
    while (c.charAt(0)===' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

export default {setCookie, getCookie}