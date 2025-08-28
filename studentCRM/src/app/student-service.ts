import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  httpClient = inject(HttpClient)
  getAllStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>("test")
  }
}
