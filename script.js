document.body.style.backgroundColor = '#000';
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'section p, section strong { color: #fff!important }';
document.getElementsByTagName('head')[0].appendChild(style);
