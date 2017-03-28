/**
 * Created by nanxi on 17-3-28.
 */
function displayAbbreviations() {
  if(!document.createElement) return false
  if(!document.createTextNode) return false
  if(!document.getElementsByTagName) return false
  // 取得所有略缩词 <abbr>
  var abbreviations = document.getElementsByTagName("abbr")
  if(abbreviations.length < 1) return false
  var defs = new Array()
  // 遍历这些略缩词，拿到title和abbr的文本内容，再组成数组
  for(var i=0;i<abbreviations.length;i++){
    var current_abbr = abbreviations[i]
    // 使代码在IE中可以平稳退化，IE早期版本不支持abbr节点的元素地位
    if(current_abbr.childNodes.length < 1) continue
    var definition = current_abbr.getAttribute("title")
    var key = current_abbr.lastChild.nodeValue
    defs[key] = definition
  }
  // 创建定义列表
  var dlist = document.createElement('dl')
  // 遍历定义列表，创建dt dd，将下标key放入dt，将数组内容放入dd，并插入到dlist中
  for(key in defs){
    var definition = defs[key]
    // 创建定义标题
    var dtitle = document.createElement('dt')
    var dtitle_text = document.createTextNode(key)
    dtitle.appendChild(dtitle_text)
    // 创建定义描述
    var ddesc = document.createElement('dd')
    var ddesc_text = document.createTextNode(definition)
    ddesc.appendChild(ddesc_text)
    // 添加到定义列表
    dlist.appendChild(dtitle)
    dlist.appendChild(ddesc)
  }
  if(dlist.childNodes.length < 1) return false
  // 创建定义列表描述标题
  var header = document.createElement('h2')
  var header_text = document.createTextNode('Abbreviations')
  header.appendChild(header_text)
  // 将标题添加到页面主体
  document.body.appendChild(header)
  // 将列表添加到页面主体
  document.body.appendChild(dlist)
}

addLoadEvent(displayAbbreviations)