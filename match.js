module.exports.match = function(hash) {

  // Write your solution to Task #2 - Match Metadata task here
  
  // Claim an array to store the metadata values
  var metadata_value = [];
  
  // reg is the regular expression for comparing with the keys
  var reg = /card expire date \w+/;
  
  // Iterate the hash keys one by one
  for (var key in hash) {
    
    // Check if the key meets the reg, 
    //  if match, appends the current hash key's correspondent hash value to the array 
    if (reg.test(key))
      metadata_value.push(hash[key]);
  }
  
  return metadata_value;
}
