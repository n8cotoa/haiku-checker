export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }


  countSyllables(){
    let lines = [this.line1, this.line2, this.line3];
    let count = [0, 0, 0];
    for(let i = 0; i < lines.length; i++) {
      let words = lines[i].toLowerCase().split(" ");
      console.log(words);
      for(let j = 0; j < words.length; j++) {
        console.log(words[j]);
        if (!words[j].match(/e/)) {
          let syllables = words[j].match(/[(aa)(ii)(oo)(uu)]+/gm)
          count[i] += syllables.length
        }
      }
    }
    console.log(count);
  }
}


// |(ded)|(ted)
