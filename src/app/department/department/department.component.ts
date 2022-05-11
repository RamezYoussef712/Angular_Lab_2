import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/_models/department';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  newDepartment: Department = new Department(0, "", "")

  shownDept: Department = new Department(0, "", "");

  editableDept: Department = new Department(0, "", "");


  departments: Department[] = [
    new Department(100, "Open Source", "Alexandria"),
    new Department(101, "Mobile App", "Cairo"),
    new Department(102, "System Development", "Mansoura"),
    new Department(103, "Software Intro", "Aswan"),
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

  Add() {
    this.departments.push(new Department(this.newDepartment.id, this.newDepartment.name, this.newDepartment.location));
    this.newDepartment.id = 0;
    this.newDepartment.name = "";
    this.newDepartment.location = "";
  }

  Show(id: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == id) {
        this.shownDept = this.departments[i];
        break;
      }
    }
  }

  Edit(id: number) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == id) {
        this.editableDept = this.departments[i];
        break;
      }
    }
  }


  Save(dep: Department) {
    for (let i = 0; i < this.departments.length; i++) {
      if (this.departments[i].id == dep.id) {
        this.departments[i].id = dep.id;
        this.departments[i].name = dep.name;
        this.departments[i].location = dep.location;
        break;
      }
    }
  }

  Delete(dep: Department){
    this.departments.forEach(item => {
      if(item.id == dep.id){
        this.departments.pop();
      }
    })
  }

}
