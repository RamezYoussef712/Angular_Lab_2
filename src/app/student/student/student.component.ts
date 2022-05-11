import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  newStudent: Student = new Student(0, "",0, 0)

  shownStud: Student = new Student(0, "",0, 0)

  editableStud: Student = new Student(0, "",0, 0)


  students: Student[] = [
    new Student(101, "Hassan Tawfik",25 , 201),
    new Student(102, "Ahmed Magdy",24, 202),
    new Student(103, "Yehya Shehata",31, 203),
    new Student(104, "Ramez Youssef",30, 204),
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  Add() {
    this.students.push(new Student(this.newStudent.id, this.newStudent.name, this.newStudent.age, this.newStudent.dept_no));
    this.newStudent.id = 0;
    this.newStudent.name = "";
    this.newStudent.age = 0;
    this.newStudent.dept_no = 0;
  }

  Show(id: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        this.shownStud = this.students[i];
        break;
      }
    }
  }

  Edit(id: number) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == id) {
        this.editableStud = this.students[i];
        break;
      }
    }
  }


  Save(dep: Student) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == dep.id) {
        this.students[i].id = dep.id;
        this.students[i].name = dep.name;
        this.students[i].age = dep.age;
        this.students[i].dept_no = dep.dept_no;
        break;
      }
    }
  }

  Delete(dep: Student){
    this.students.forEach(item => {
      if(item.id == dep.id){
        this.students.pop();
      }
    })
  }


}
