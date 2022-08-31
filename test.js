
var myStringArray = ["a", "b", "c"]



var arrayLength = myStringArray.length;
var base_st = myStringArray[0]

for (var i = 1; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    base_st = base_st.concat(myStringArray[i])  
}

console.log(base_st)