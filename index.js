//the spread operator (...) is used to seperate theelement from an iterable(array,string,object) into indivisual element

// const array=[1,2,3];
// console.log(...array);
// console.log(array);


//the rest operator is used in function parameters to collect all remaining arguments into an array

jagdish(1,2,3,4,5);
function jagdish(first,second, ...rest) 
{
 console.group(first);
 console.group(second);
 console.group(rest);
 

}