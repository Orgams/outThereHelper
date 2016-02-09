String.prototype.contains = function(it) { return this.indexOf(it) != -1; };
var resource = {
  fs: require('fs'),
  charger: function(nomDeFicher) {
    var path = 'resource/'+nomDeFicher;
    
    try{
      var data = resource.fs.readFileSync(
        path, 
        'utf8'
      );
    }catch(err){
      if(err) {
        if(nomDeFicher.contains(".arr"))
          return [];
        if(nomDeFicher.contains(".json"))
          return {};
      }
    }
    return JSON.parse(data);
  },
  sauver: function(nomDeFicher, data) {
    resource.fs.writeFile('resource/'+nomDeFicher, JSON.stringify(data), function (err) {
      if (err) $('body').notify({message: "erreur : "+err,type: 'danger'});
    });
  },
  supprimer: function(nomDeFicher){
    resource.fs.unlinkSync('resource/'+nomDeFicher);
  }
};
