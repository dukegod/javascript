var XML = new XMLHttpRequest();
console.log(XML);


XML.onreadystatechange = function () {
  if (XML.readyState === 0) {
    console.log(XML.readyState);
    console.log(XML.status);
    console.log(XML.responseText);
    document.getElementById('Daid').innerHTML = 'status:' + XML.readyState + XML.responseText;
  } else if (XML.readyState === 1) {
    console.log(XML.readyState);
    console.log(XML.status);
    console.log(XML.responseText);
    document.getElementById('Daid').innerHTML = 'status:' + XML.readyState + XML.responseText;
  } else if (XML.readyState === 2) {
    console.log(XML.readyState);
    console.log(XML.status);
    console.log(XML.responseText);
    document.getElementById('Daid').innerHTML = 'status:' + XML.readyState + XML.responseText;
  } else if (XML.readyState === 3) {
    console.log(XML.readyState);
    console.log(XML.status);
    console.log(XML.responseText);
    document.getElementById('Daid').innerHTML = 'status:' + XML.readyState + XML.responseText;
  } else if (XML.readyState === 4) {
    if ((XML.status >= 200 && XML.status < 300) || XML.status === 304) {
      console.log(XML.status);
      console.log(XML.responseText);
      document.getElementById('Daid4').innerHTML = XML.responseText;
    }
  } else {
    alert('error')
  }
}

XML.open('get', '/ansyn', true);
XML.send(null);
