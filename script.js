document.body.style.backgroundColor = '#000';
var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = 'section p, section strong, section em { color: #fff!important } #menu_flutuante { background-color: #3d3d3d }';
document.getElementsByTagName('head')[0].appendChild(style);
