$(document).ready(function () {
  // Define array of students
  var students = [
    { name: 'John', age: 22, major: 'Computer Science' },
    { name: 'Jane', age: 20, major: 'Biology' },
    { name: 'Bob', age: 21, major: 'Engineering' },
  ];

  // Loop through array of students and append rows to table
  $.each(students, function (index, student) {
    var row =
      '<tr><td>' +
      student.name +
      '</td><td>' +
      student.age +
      '</td><td>' +
      student.major +
      '</td></tr>';
    $('#student-table tbody').append(row);
  });
});
