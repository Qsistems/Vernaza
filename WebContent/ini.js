var util = require('util');
var path = require('path');
var fs = require('fs');


function readFile(somePath) {
  var parser = require('iniparser'); //
  parser.parse(somePath, function(err,data){
    if (err) {
      console.log('error: %s, tried to read %s', err.code, err.path);
      return;
    }
    var ds = util.inspect(data);
    console.log('data: %s', ds);
  });
}

// ============================================================================
/**
 * Reads the *.ini file and asks parser to process it.
 */
function doIt() {
  var testFilePath = path.normalize('C:/Proyecto_calificadores/init.ini') ;

  fs.readFile(testFilePath, 'utf8', function(err, data) {
    if (err) {
      console.log('failed to read %s', testFilePath) ;
      return;
    }

    var parser = require('iniparser'); //
    var settings = parser.parseString(data);

    var ss = util.inspect(settings);
    console.log('data: %s', ss);
  });
}

doIt();

readFile(__dirname + 'C:/Proyecto_calificadores/init.ini');

