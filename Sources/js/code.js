 
// URL of the mp3 file (must be on the same domain!)
var file = "mymusicfile.mp3";
 
// define your own callback function
function mycallback() {
 // either call the ID3.getAllTags([file]) function which returns an object holding all the tags
 alert(
  "All tags in this file: " + ID3.getAllTags(file).toSource()
 );
 
 // or call ID3.getTag([file], [tag]) to get a specific tag
 alert(
  "Title: " + ID3.getTag(file, "title") + " by artist: " + ID3.getTag(file, "artist")
 );
}
 
ID3.loadTags(file, mycallback);

