var XML = new XMLHttpRequest();
console.log(XML);
XML.open('get', '/one', false);
XML.send(null);
if ((XML.status >= 200 && XML.status < 300) || XML.status === 304) {
  console.log(XML.status);
  console.log(XML.responseText);
  document.getElementById('Daid').innerHTML = XML.responseText;
}
