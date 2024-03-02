import { Component } from '@angular/core';
import { Camera } from '../../models/camera';
import { CAMERAS } from '../../data/camera-data';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-selection',
  standalone: true,
  imports: [ButtonModule, TableModule],
  templateUrl: './selection.component.html',
  styleUrl: './selection.component.scss'
})
export class SelectionComponent {

  cameras: Camera[] = CAMERAS;
  selectedCamera: Camera = this.cameras[0];

  constructor() { }

  ngOnInit(): void {
  }

  handleSelect(camera: any){
    this.selectedCamera = camera;
  }

}
