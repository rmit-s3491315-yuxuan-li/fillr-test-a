module.exports.extract = function(window) {
  
  // Write your solution to Task #2 - Extract Metadata task here
  
  // Get all nodes by tag name "input"
  var base_Node = window.document.getElementsByTagName("input");
  
  // Get node for <select> tag
  var select_Node = window.document.getElementsByTagName("select");
  
  // hash will store the metadata hash
  var hash = {};
 
  var hash_Key = "";
  var hash_Value = "";
  
  // For loop will iterate all "input" nodes  
  for (var i = 0; i < base_Node.length; i++) {
    
    /* the first input node as an example to explain:
     * base_Node[0]'s parentNode is <td>, then previousSibling node is it's left <td>
     * then firstChild is "email           ", and nodeValue (same as innerHTML) is "email           "
     */ trim() function trim the blank spacks. Eventually, the first hash_Key is "email"
    hash_Key = base_Node[i].parentNode.previousSibling.firstChild.nodeValue.trim();
    
    // conbine the hash_key with a blank space and value of input node's attribute "name"
    hash_Value = hash_Key + " " + base_Node[i].name;
    
    // Store the first hash pair
    hash[hash_Key] = hash_Value;
  
  }
  
  // select_Node is an array, although it just has 1 element. Still need index [0]
  hash_Key = select_Node[0].parentNode.previousSibling.firstChild.nodeValue.trim();
  hash_Value = hash_Key + " " + select_Node[0].name;
  
  // Store the hash key/value pair for "country"
  hash[hash_Key] = hash_Value;
  
  return hash;
}
