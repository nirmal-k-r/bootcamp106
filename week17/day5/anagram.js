function anagram_check(str1,str2){
    str1=str1.trim();
    str2=str2.trim();
    console.log(str1);
    console.log(str2);

    characters_str1=str1.toLowerCase().split('');
    characters_str2=str2.toLowerCase().split('');
   
    characters_str1=characters_str1.sort();
    characters_str2=characters_str2.sort();

    console.log(characters_str1);
    console.log(characters_str2);

    //remove the spaces
    cleaned_str1_chars=characters_str1.filter(function(char) {
        if (char!=' '){
            return true;
        }
    });

    cleaned_str2_chars=characters_str2.filter(function(char) {
        if (char!=' '){
            return true;
        }
    });

    console.log(cleaned_str1_chars);
    console.log(cleaned_str2_chars);

   //convert back to string
    cleaned_str1=cleaned_str1_chars.join('');
    cleaned_str2=cleaned_str2_chars.join('');
    console.log(cleaned_str1);
    console.log(cleaned_str2);

    if (cleaned_str1==cleaned_str2){
        return true;
    }else{
        return false;
    }
}


word1='The Morse Code';
word2='Here come dots';


// anagram_check(word1,word2);

if (anagram_check(word1,word2)){
    console.log(`${word1} and ${word2} are anagrams`);
}else{
    console.log(`${word1} and ${word2} are not anagrams`);
}