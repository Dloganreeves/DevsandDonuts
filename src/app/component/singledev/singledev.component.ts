import { Component, Input } from '@angular/core';
import { Complete } from '../../Models/dev-model';

@Component({
  selector: 'app-singledev',
  standalone: true,
  imports: [],
  templateUrl: './singledev.component.html',
  styleUrl: './singledev.component.css'
})
export class SingledevComponent {
  @Input() displaydev = {} as Complete
}

