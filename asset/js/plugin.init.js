/***WhatsHelp.io widget***/
(function () {
  var options = {
    call: "+8801627436660", // Call phone number
    sms: "+8801627436660", // Sms phone number
    whatsapp: "+8801627436660", // WhatsApp number
    facebook: "linktech.net.bd", // Facebook page ID: 160990734741710
    email: "hello@linktech.net.bd", // Email
    call_to_action: "Contact us", // Call to action
    button_color: "#129BF4", // Color of button
    position: "right", // Position may be 'right' or 'left'
    order: "email,call,sms,whatsapp,facebook", // Order of buttons
  };
  var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
  var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
  s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
  var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();
/***WhatsHelp.io widget***/