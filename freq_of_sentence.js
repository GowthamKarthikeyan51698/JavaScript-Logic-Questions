// we count the repetition of a word and if there are more than 1 words which has same repetition then count the length of letters in the words and select the word which has the maximum letters in the words.

// test case -1:

// input : "work like you do not need money,love like you have never been hurt and dance like no one is watching"
// output : the word is like and frequency is 3

// test-case -2

// input : "Bitter had a butter,which was bitter and he made the bitter butter better and the better butter was more bitter"
// output : the word is bitter and frequency is 4
function freq_sen(str){
    str = str.replace(','," ");
    str = str.toLowerCase();
    str = str.split(" ");
    var frequency = 0;
    var word;
    for(let i=0 ;i<str.length;i++){
        var freq = WordCount(str, str[i]);
        if (freq > frequency){
            frequency = freq;
            word = str[i];
        } else if(freq === frequency) {
            if (str[i].length > word.length){
                frequency = freq;
                word = str[i];
            }
        }
    }
    ans = console.log(`the word is ${word} and frequency is ${frequency}`);
    return ans;

    
}
function WordCount(str1 , str2) { 
  let count = 0;
  for(let i=0; i<str1.length ; i++){
    if(str1[i] === str2){
        count += 1;

    } else {
        continue;
        if(i === str1.length){
            break;
        }
    }
  }
  return count
}

var x = "Bitter had a butter which was bitter and he made the bitter butter better and the better butter was more bitter";
freq_sen(x);
