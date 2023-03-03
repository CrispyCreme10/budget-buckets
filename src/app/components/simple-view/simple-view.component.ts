import { Component } from '@angular/core';
import { faAngleDown, faAngleRight, faEllipsis, faGear, faHeadset, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-view',
  templateUrl: './simple-view.component.html',
  styleUrls: ['./simple-view.component.css']
})
export class SimpleViewComponent {
  faEllipsis = faEllipsis;
  faGear = faGear;
  faHeadset = faHeadset;
  faUser = faUser;
}
