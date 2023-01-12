var externalLibs = {
  "./numpy/__init__.py": "./numpy/__init__.py",
  "./pygame/__init__.js": "./pygame/__init__.js"
  
};

function builtinRead(file) {
  console.log("Attempting file: " + Sk.ffi.remapToJs(file));
  
  if (externalLibs[file] !== undefined) {
    return Sk.misceval.promiseToSuspension(
      fetch(externalLibs[file]).then(
        function (resp){ return resp.text(); }
      ));
  }
  
  if (Sk.builtinFiles === undefined || Sk.builtinFiles.files[file] === undefined) {
    throw "File not found: '" + file + "'";
  }
  
  return Sk.builtinFiles.files[file];
}

Sk.configure({
  read: builtinRead,
  output: console.log,
  
});



var module = Sk.misceval.asyncToPromise(function() {
  return Sk.importMainWithBody("<stdin>", false, [
    "import numpy as np",
    "",
    "print(dir(np))",
    ""
  ].join("\n"), true);
}).then(function() {
  console.log("success");
}, function (e) {
  console.log(e.toString());
});

function runit() { 
   var prog = document.getElementById("yourcode").value; 
   var mypre = document.getElementById("output"); 
   mypre.innerHTML = ''; 
   Sk.pre = "output";
   Sk.configure({output:outf, read:builtinRead}); 
   (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
   var myPromise = Sk.misceval.asyncToPromise(function() {
       return Sk.importMainWithBody("<stdin>", false, prog, true);
   });
   myPromise.then(function(mod) {
       console.log('success');
   },
       function(err) {
       console.log(err.toString());
   });
} 
function outf(text) { 
    var mypre = document.getElementById("output"); 
    mypre.innerHTML = mypre.innerHTML + text; 
} 

