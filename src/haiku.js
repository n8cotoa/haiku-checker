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
      for(let j = 0; j < words.length; j++) {
        if (words[j].charAt(words[j].length - 1) == "e" && words[j].match(/[aiouy]/)) {
          let syllables = words[j].match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm);
          count[i] += syllables.length;
        } else {
          words[j] += " ";
          let syllables = words[j].match(/[aiouy]+e*|e(?!d$|ly).|[td]ed|le$/gm);
          count[i] += syllables.length;
        }
      }
    }
    return count
  }

  isHaiku() {
    let count = this.countSyllables()
    let valid = true
    if (count[0] === 5 && count[1] === 7 && count[2] === 5) {
      return valid
    } else {
      valid = false
      return valid
    }
  }

}
