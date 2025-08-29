import { HttpClient, httpResource } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  httpClient = inject(HttpClient)


  getAllStudents() {
    return httpResource<Student[]>(() => "https://jsonplaceholder.typicode.com/users")
  }
}
