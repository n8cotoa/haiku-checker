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
        if (words[j].charAt(words[j].length - 1) == "e" && words[j].match(/[aiouy]/)) {
          let syllables = words[j].match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm);
          console.log("if block: " + syllables);
          count[i] += syllables.length;
        } else {
          words[j] += " ";
          let syllables = words[j].match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm);
          console.log("else block: " + syllables);
          count[i] += syllables.length;
        }
      }
    }
    console.log(count);
  }
}


// let syllables = lines[i].toLowerCase().match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm);
// count[i] += syllables.length;
// |(ded)|(ted)


// (oo)|(oe)|(ia)|(ai)|(oi)|[(aa)(oo)(ii)(uu)]|(le)$|(ted)$|(ded)$


// if (!words[j].match(/e/)) {
//   let syllables = words[j].match(/[(aa)(ii)(oo)(uu)]+/gm)
//   count[i] += syllables.length;
// } else if(words[j].match(/(ded)$/ || /(ted)$/ || /(le)$/) {
//   let syllables = words[j].match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm)
//   count[i] += syllables.length;
// }
