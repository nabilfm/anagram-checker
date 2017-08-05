/**
 * Created by nabil on 8/5/2017.
 */
$(document).ready(function () {
    $('#showHere1').html('result: '+ multiplier(12,4));
    $('#showHere2').html(anagramChecker(
        ["cinema","kodok","perut","rain"],
        ["iceman","shot","erupt","rain"]));
});
var stringNotFound;
var stringFound;
var invalidAnagram = 0;
var charCounter={
    a:0,
    b:0,
    c:0,
    d:0,
    e:0,
    f:0,
    g:0,
    h:0,
    i:0,
    j:0,
    k:0,
    l:0,
    m:0,
    n:0,
    o:0,
    p:0,
    q:0,
    r:0,
    s:0,
    t:0,
    u:0,
    v:0,
    w:0,
    x:0,
    y:0,
    z:0
};

function multiplier(val,secondVal){
    if(val===null || !val || secondVal===null || !secondVal) return console.log('please provide a number');
    return Math.pow(parseInt(val),parseInt(secondVal)) ;
}

function anagramChecker(arrString, secondArrString) {
    var arrFoundAnagram =[];
    if(arrString===null || !arrString || secondArrString===null || !secondArrString || arrString.length !== secondArrString.length) return console.log('please provide a valid array of string');
    $.each(secondArrString, function (key, val) {
        deepCheck(val,arrString[key]);
        deepCheck(arrString[key],val);
        if (stringNotFound>0 || invalidAnagram>0) {
            arrFoundAnagram.push(0);
        }else{
            arrFoundAnagram.push(1);
        }
    });
    return arrFoundAnagram.toString();
}

function deepCheck(string,rival) {
    // var stringNotfound = 0;
    stringNotFound = 0;
    charCount(string); //count char in string1
    for(i=0;i<string.length;i++){
        var searchStr = rival.search(string[i]);
        if (searchStr===-1) {
            stringNotFound++
        }
        else{
            stringFound=0;
            for(j=0;j<rival.length;j++){// count char from string1 on string2
                if(string[i]===rival[j]){
                    stringFound++;
                }
            }
            if (stringFound !== charCounter[string[i]]) {// check if they're different
                invalidAnagram++;
            }
        }
    }
}

function resetCc(){
    $.each(charCounter,function (key,val) {//loop an object
        charCounter[key] = 0; //reset the value each property of charCounter object
    });
}
function charCount(string){
    resetCc();
    string = string.toLowerCase();
    invalidAnagram = 0;
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for(x=0;x<alphabet.length;x++){
        for(y=0;y<string.length;y++){
            if (alphabet[x]===string[y]) {
                charCounter[string[y]]++;
            }
        }
    }
}
