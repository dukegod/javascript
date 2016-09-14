/*
*map
*/

var users = [
  {name: '张含韵', 'email': 'zhang@email.com'},
  {name: '江一燕',   'email': 'jiang@email.com'},
  {name: '李小璐',  'email': 'li@email.com'}
];

users.map(function(value,index) {
	console.log(index + value.email);
})