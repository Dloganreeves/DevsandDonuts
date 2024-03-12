import { Component, Input } from '@angular/core';
import { DonutModel, Result } from '../../Models/donut-model';

@Component({
  selector: 'app-singledonut',
  standalone: true,
  imports: [],
  templateUrl: './singledonut.component.html',
  styleUrl: './singledonut.component.css'
})
export class SingledonutComponent {
@Input() displaydonut = {} as Result
}
