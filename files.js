var objectsFiles = [];
var iluminationFile;
var cameraFile;
var txtObj = '';
var txtCam = '';
var txtIlu = '';

var reader = new FileReader();

var addFile = function(param) {
  var files = document.getElementById(param).files;

  for(i = 0; i < files.length; i++) {
    reader.readAsBinaryString(files[i]);
    var txt = '';

    if(param == "objs"){
      objectsFiles.push(files[i]);
      if (objects.length > 1) txtObj += " | "
      txtObj += files[i].name;
      reader.onloadend = function(event){
        objectsFiles.push(reader.result);
      }
      document.getElementById("objects").innerHTML = "<p id='objects'>" + txtObj + "</p>";
    } else if (param == "cam") {
      txtCam = files[i].name;
      reader.onloadend = function(event){
        cameraFile = reader.result;
      }
      document.getElementById("camera").innerHTML = "<p id='objects'>" + txtCam + "</p>";
    } else {
      txtIlu = files[i].name;
      reader.onloadend = function(event){
        iluminationFile = reader.result;
      }
      document.getElementById("ilumination").innerHTML = "<p id='objects'>" + txtIlu + "</p>";
    }
  }
}
