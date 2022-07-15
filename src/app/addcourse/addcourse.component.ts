import { Component, OnInit } from '@angular/core';
import { AddService } from '../add.service';



@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {
  course={
       courseTitle:"",
       courseDuration:"",
       courseDescription:"",
       courseDate:"",
       courseVenue:""
  }

  constructor(private service:AddService) { }

  ngOnInit(): void {
  }
  Addcourse(){
    this.service.addcourse(this.course)
    .subscribe((data)=>{
    })
    console.log(this.course);
    alert("Success");
  
  }
}
