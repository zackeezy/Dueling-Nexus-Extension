var test = "test";
console.log(test);
function main () {
    var anchor = document.createElement("a");
    var button = document.createElement("button");
    button.setAttribute("class","engine-button engine-button-navbar engine-button-default");
    button.innerText = "Download";
    var contents = "#created by ...\n#main\n";
    for(var i in Deck.main){
        contents += (Deck.main[i] + "\n");
    }
    contents += "#extra\n";
    for(var i in Deck.extra){
        contents += (Deck.extra[i] + "\n");
    }
    contents += "!side\n";
    for(var i in Deck.side){
        contents += (Deck.side[i] + "\n");
    }
    anchor.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(contents));
    anchor.setAttribute("download", Deck.name + ".ydk");
    console.log(contents);
    anchor.appendChild(button);
    var shuffle = document.getElementById("editor-shuffle-button");
    var space = document.createElement("span");
    space.innerText = "&nbsp;";
    shuffle.after(anchor);
  }
  
  var script = document.createElement('script');
  script.appendChild(document.createTextNode('('+ main +')();'));
  (document.body || document.head || document.documentElement).appendChild(script);