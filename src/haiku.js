import txt from './words.txt';

export class Haiku {

  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
    this.syllables = 0;
    this.count = [0, 0, 0];
  }

  getSyllables() {
    var self = this;
    let lines = [this.line1, this.line2, this.line3];
    for(let i = 0; i < lines.length; i++) {
      let words = lines[i].toLowerCase().split(" ");
      for(let j = 0; j < words.length; j++) {
        var request = new XMLHttpRequest();
        request.open("GET", `https://api.datamuse.com/words?sp=${words[j]}&max=1&md=s`, false);
        request.onload = function() {
          if(this.status == 200) {
            let word = JSON.parse(this.response);
            self.count[i] += word[0].numSyllables;
          }
        }

        request.onerror = function() {
          console.log("Unable to connect to the server API.");
        }

        request.send();
      }
    }
  }



  // countSyllables(){
  //   let lines = [this.line1, this.line2, this.line3];
  //   let count = [0, 0, 0];
  //   for(let i = 0; i < lines.length; i++) {
  //     let words = lines[i].toLowerCase().split(" ");
  //     for(let j = 0; j < words.length; j++) {
  //       if(words[j].charAt(0).match(/[aiouy]/) && words[j].charAt(words[j].length -1) == "a") {
  //         let newString = words[j].substring(0, (words[j].length -1))
  //         newString += " a";
  //         let syllables = newString.match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm);
  //         count[i] += syllables.length;
  //       }
  //       else if(words[j].charAt(0) == "a" && words[j].charAt(words[j].length -1) == "e") {
  //         words[j] += " ";
  //         let syllables = words[j].match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm);
  //         count[i] += syllables.length;
  //       }
  //       else if (words[j].charAt(words[j].length - 1) == "e" && words[j].match(/[aiouy]/)) {
  //         let syllables = words[j].match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm);
  //         count[i] += syllables.length;
  //       } else {
  //         words[j] += " ";
  //         let syllables = words[j].match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm);
  //         count[i] += syllables.length;
  //       }
  //     }
  //   }
  //   return count
  // }

  isHaiku() {
    this.getSyllables();
    let valid = true;
    if (this.count[0] === 5 && this.count[1] === 7 && this.count[2] === 5) {
      return valid;
    } else {
      valid = false;
      return valid;
    }
  }

}

export class RandomHaiku {

  constructor() {
    this.phraseOne = "";
    this.phraseTwo = "";
    this.phraseThree = "";
  }

  setPhrase() {
    const phraseArray = txt.split("\n");
    console.log(phraseArray);

    for(let i = 0; i < 5; i++) {
      this.phraseOne += phraseArray[(Math.floor(Math.random) * 274000)];
    }
    for(let i = 0; i < 7; i++) {
      this.phraseTwo += phraseArray[(Math.floor(Math.random) * 274000)];
    }
    for(let i = 0; i < 5; i++) {
      this.phraseThree += phraseArray[(Math.floor(Math.random) * 274000)];
    }

    let haiku = new Haiku(this.phraseOne, this.phraseTwo, this.phraseThree);

    if(!haiku.isHaiku()) {
      this.setPhrase();
    } else {
      console.log("correct haiku");
    }

  }

}
