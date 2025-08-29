import { Component, inject} from '@angular/core';
import { StudentService } from '../../student-service';
@Component({
  selector: 'app-students',
  imports: [],
  templateUrl: './students.html',
  styleUrl: './students.css'
})
export class Students {
  studentList = inject(StudentService).getAllStudents()

  constructor() {

  }
}