var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
body {
  background-color: #000;
}
.table td {
  color: #fff!important;
}
#page-content .card-body, #page-content .userprofile .profile_tree section, .userprofile .profile_tree #page-content section, .card {
  border: none;
  background-color: #000;
  color: #fff;
}
section p, section strong, section em {
  color: #fff!important
}
#menu_flutuante, nav.navbar {
  background-color: #3d3d3d
} 
::-moz-selection {
  color: #fff;
  background:#3d3d3d;
}
::selection {
  color: #fff;
  background: #3d3d3d;
}`;
document.getElementsByTagName('head')[0].appendChild(style);
