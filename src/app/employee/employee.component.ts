import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Employee } from "./employee.model"

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  emp:Employee = new Employee()
  language:String[] = []
  qualification:String[] = []
  experience:String[]=[]
  selectedLanguage : String[] = []
  foorm: FormGroup;

  constructor() { 
    this.foorm = new FormGroup({
      firstName : new FormControl(''),
      lastName : new FormControl(''),
      email : new FormControl(''),
      phone : new FormControl(''),
      address : new FormControl(''),
      uname : new FormControl(''),
      password : new FormControl(''),
      gender : new FormControl(''),
      qual : new FormControl(''),
      exp : new FormControl(''),
      lang :  new FormControl()
    })
  }
  
  ngOnInit(): void {
    this.language = ['C','C++','Java',"Python"]
    this.qualification = ['BE','BTECH','BCA','BCCA','MCA']
    this.experience = ['0','1','2','3','4','5+']
  }
  Submit(){
    console.log({...this.foorm.value , lang:this.selectedLanguage});
  }
  onCheck(e:any){
    if(e.target.checked){
      this.selectedLanguage.push(e.target.value)
      // console.log("THE CHECKED VALUE IS " , e.target.value);
      // console.log("THE CHECKED VALUE ARRAY " , this.selectedLanguage);
    }else{
      let index = this.selectedLanguage.findIndex(value => value === e.target.value)
      this.selectedLanguage.splice(index , 1);
      // console.log("UNCHECKED VALUE IS ", e.target.value);
      // console.log(this.selectedLanguage);
    }
  }
  
}
