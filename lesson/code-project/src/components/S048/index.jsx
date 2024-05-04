{
    const grades = [10, 8, 9, 4, 16];
    // add 1 to all grades below 10
    const updatedGrades = grades.map(grade => {
        if (grade < 10){
            return grade + 1;
        }
        // in all other cases, keep it as it was
        return grade;
    });
    console.log(updatedGrades); 
    //[10, 9, 10, 5, 16]
}


{
    const grades = [10, 8, 9, 4, 16];

    // remove the first grade
    // think of it as: get all grades except the first one
    const subset1 = grades.slice(1); 
    //start from position 1
    console.log(subset1); // [8, 9, 4, 16]

    // remove the last 2 grades
    // think of it as: get all grades except the last 2
    // so start from 0 and stop after 5 - 2 = 3 items
    const subset2 = grades.slice(0, grades.length - 2); 
    console.log(subset2); // [10, 8, 9]
}

{
    const grades = [10, 8, 9, 4, 16];

    // return all grades >= 10
    const subset1 = grades.filter(grade => grade >= 10);
    console.log(subset1); // [10, 16]

    // remove the 2nd grade
    const subset2 = grades.filter(grade => grade !== 8);
    console.log(subset2); // [10, 9, 4, 16]
}