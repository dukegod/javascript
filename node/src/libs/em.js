/**
 * Created by hui on 16/12/18.
 */

// exports.em = function(){
//   console.log('exports')
// }

function em(){
  console.log('exports function');
}

return em;

exports.em = em;