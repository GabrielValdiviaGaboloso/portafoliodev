import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del proyecto 1',
      image: 'assets/project1.jpg',
      technologies: ['Angular', 'Node.js', 'MongoDB'],
      links: {
        demo: '#',
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del proyecto 2',
      image: 'assets/project2.jpg',
      technologies: ['React', 'Firebase', 'Tailwind'],
      links: {
        demo: '#',
        github: '#',
        live: '#'
      }
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción del proyecto 3',
      image: 'assets/project3.jpg',
      technologies: ['Vue.js', 'Express', 'PostgreSQL'],
      links: {
        demo: '#',
        github: '#',
        live: '#'
      }
    }
  ];
}
