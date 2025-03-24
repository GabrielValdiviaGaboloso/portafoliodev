import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  skills = ['HTML5', 'CSS3', 'JavaScript', 'Angular', 'Node.js', 'React'];
  experience = '5+';
  projects = '50+';
  clients = '30+';
}
