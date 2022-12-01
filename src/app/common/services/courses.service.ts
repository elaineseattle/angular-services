import { Injectable } from '@angular/core';
import { Course } from '../models/course';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses: Course[] = [
    {
      id: '1',
      title: 'Vol 1: Angular 14 Fundamentals',
      description: 'Learn the fundamentals of Angular 14',
      percentComplete: 12,
      favorite: true
    },
    {
      id: '2',
      title: 'Vol 2: Angular 14 Intermediate',
      description: 'Learn Intermediate Angular 14',
      percentComplete: 50,
      favorite: false
    },
    {
      id: '3',
      title: 'Vol 3: Angular 14 Advanced',
      description: 'Learn advanced Angular 14',
      percentComplete: 98,
      favorite: true
    },
    {
      id: '4',
      title: 'Rapid Application Development Patterns',
      description: 'Rapid Prototyping',
      percentComplete: 80,
      favorite: true
    }  
  ];
}
