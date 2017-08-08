//function calculateGPA() {
//    var grade1 = document.getElementById("class1").value;
//    var grade2 = document.getElementById("class2").value;
//    var grade3 = document.getElementById("class3").value;
//    var grade4 = document.getElementById("class4").value;
//    var grade5 = document.getElementById("class5").value;

//    var grades = [grade1, grade2, grade3, grade4, grade5];

//    var totalPoints = 0;

//    for (var i = 0; i < grades.length; i++) {
//        switch (grades[i]) {
//            case 'A':
//                totalPoints += 4;
//                break;
//            case 'B':
//                totalPoints += 3;
//                break;
//            case 'C':
//                totalPoints += 2;
//                break;
//            case 'D':
//                totalPoints += 1;
//                break;
//            case 'F':
//                totalPoints += 0;
//                break;
//            default:
//                alert("Invalid Grade");
//                break;
//        }
//    }
//    var average = totalPoints / 5;
//    document.getElementById("GPA").innerHTML = "GPA: " + average;
//}


//function calculateGPA() {
//    var grade1 = document.getElementById("class1").value;
//    var gradeOne = grade1.toUpperCase();
//    var grade2 = document.getElementById("class2").value;
//    var gradeTwo = grade2.toUpperCase();
//    var grade3 = document.getElementById("class3").value;
//    var gradeThree = grade3.toUpperCase();
//    var grade4 = document.getElementById("class4").value;
//    var gradeFour = grade4.toUpperCase();
//    var grade5 = document.getElementById("class5").value;
//    var gradeFive = grade5.toUpperCase();

//    var grades = [gradeOne, gradeTwo, gradeThree, gradeFour, gradeFive];

//    var totalPoints = 0;

//    for (var i = 0; i < grades.length; i++) {
//        if (grades[i] == "A+")
//            totalPoints += 4.9;

//        else if (grades[i] == "A")
//            totalPoints += 4.5;

//        else if (grades[i] == "A-")
//            totalPoints += 4;

//        else if (grades[i] == "B+")
//            totalPoints += 3.9;

//        else if (grades[i] == "B")
//            totalPoints += 3.5;

//        else if (grades[i] == "B-")
//            totalPoints += 3;

//        else if (grades[i] == "C+")
//            totalPoints += 2.9;

//        else if (grades[i] == "C")
//            totalPoints += 2.5;

//        else if (grades[i] == "C-")
//            totalPoints += 2;

//        else if (grades[i] == "D+")
//            totalPoints += 1.9;

//        else if (grades[i] == "D")
//            totalPoints += 1.5;

//        else if (grades[i] == "D-")
//            totalPoints += 1;

//        else if (grades[i] == "F")
//            totalPoints += 0;

//        else
//            alert("Invalid entry");
//    }
//    var average = totalPoints / 5;
//    document.getElementById("GPA").innerHTML = "GPA: " + average;
//}

