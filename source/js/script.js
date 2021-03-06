function activeMenuItem(n){
  document.getElementById(n).classList.add("active");
}

$(document).ready(function() {
  $(".animsition").animsition({
    inClass: "fade-in",
    outClass: "fade-out",
    inDuration: 1000,
    outDuration: 800,
    linkElement: ".animsition-link",
    // e.g. linkElement: "a:not([target="_blank"]):not([href^="#"])"
    loading: true,
    loadingParentElement: "main", //animsition wrapper element
    loadingClass: "animsition-loading",
    loadingInner: "", // e.g "<img src="loading.svg" />"
    timeout: true,
    timeoutCountdown: 2000,
    onLoadEvent: true,
    browser: [ "animation-duration", "-webkit-animation-duration"],
    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
    overlay : false,
    overlayClass : "animsition-overlay-slide",
    overlayParentElement : "main",
    transition: (url) => { window.location.href = url; }
  });
});
