/**
 * Created by nanxi on 17-3-25.
 */

function find(str,char,num) {
  var index = str.indexOf(char)
  for(var i=1;i<num;i++){
    index = str.indexOf(char,index+1)
    if(index == -1) return 'not found'
  }
  return index
}
console.log(find('1a2b3c444ccc88c','9',1))
