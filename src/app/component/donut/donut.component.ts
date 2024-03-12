import { Component } from '@angular/core';
import { ShareDonutService } from '../../Service/share-donut.service';
import { DonutModel } from '../../Models/donut-model';
import { SingledonutComponent } from '../singledonut/singledonut.component';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [SingledonutComponent],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {
constructor(private donutservice: ShareDonutService) {}

donutresult: DonutModel = {} as DonutModel;
ngOnInit () {
  this.callApi();
}
callApi(){
  this.donutservice.getDonut().subscribe((response:DonutModel) => {
    console.log(response);
    this.donutresult = response
  });
}
}
