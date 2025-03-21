names=['Paul', 'John', 'George', 'Ringo'];

names.forEach(name => {
    console.log(name);
});



//mapping function
marks=[18,17,10,5,25];//marks out of 25

//out of 100

final_marks=marks.map(function(mark){
    return mark*4;
})

console.log(final_marks);


//uppercase names
u_names=names.map(function(name){
    return name.toUpperCase();
});
console.log(u_names);


//filter function
numbers=[1,2,3,4,5,6,7,8,9,10];

//filtr and keep only even numbers


even_numbers=numbers.filter(function(number){
    if (number%2==0){
        return true;
    }else{
        return false;
    }
});

console.log(even_numbers);

//reduce
student_marks=[10,8,9,7,3]

total_marks=student_marks.reduce(function(total,mark){
    return total+mark;
});

console.log(total_marks);