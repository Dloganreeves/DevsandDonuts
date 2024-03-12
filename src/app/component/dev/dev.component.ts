import { Component } from '@angular/core';
import { ShareDevsService } from '../../Service/share-devs.service';
import { DevModel } from '../../Models/dev-model';
import { SingledevComponent } from '../singledev/singledev.component';

@Component({
  selector: 'app-dev',
  standalone: true,
  imports: [SingledevComponent],
  templateUrl: './dev.component.html',
  styleUrl: './dev.component.css'
})
export class DevComponent {
  
    constructor(private devservice: ShareDevsService) {}
    
    devresult: DevModel = {} as DevModel;
    ngOnInit () {
      this.callApi();
    }
    callApi(){
      this.devservice.getDev().subscribe((response:DevModel) => {
        console.log(response);
        this.devresult = response
      });
    }
}
