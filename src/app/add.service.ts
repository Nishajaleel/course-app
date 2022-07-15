import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http:HttpClient) { }
  getcourse() {
    return this.http.get('https://mylinkurcodesapp.herokuapp.com/getcourses');
  }
  addcourse(course:any){
    return this.http.post<any>('https://mylinkurcodesapp.herokuapp.com/addcourse ',course);

  }
  

}
