document.getElementById('file').onchange = async function(){

    var file = this.files[0];
  
    var reader = new FileReader();
    reader.onload = async function(progressEvent){
      
      var lines = this.result.split('\n');
      for(var line = 0; line < lines.length; line++){
              var lineWithoutCode = lines[line].split(" ");
              if(lineWithoutCode[0].startsWith("https")){
                  if(lineWithoutCode[0].includes("/artikel")){
                    console.log(lineWithoutCode[0]);
                    var y = window.open(lineWithoutCode[0]);
                    await sleep(20000);
                    y.close();
                  } else {
                      console.log(lineWithoutCode[0]);
                      var x = window.open(lineWithoutCode[0]);
                      await sleep(5000);
                      x.close();
                    }
                } else {
                    console.log("FAILED TO GET URL: " + lineWithoutCode[0]);
                }
      }
    };
    reader.readAsText(file);
  };

  function sleep(millisekunden) {
    return new Promise(resolve => setTimeout(resolve, millisekunden)).then(x =>{
      console.log("sleep");
    });
  }