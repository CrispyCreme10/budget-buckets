import { Component, Input } from '@angular/core';
import { faAngleDown, faAngleRight, faCheck, faEllipsis, faGear, faHeadset, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-simple-view',
  templateUrl: './simple-view.component.html',
  styleUrls: ['./simple-view.component.css']
})
export class SimpleViewComponent {
  // header icons
  faEllipsis = faEllipsis;
  faCheck = faCheck;

  // footer icons
  faGear = faGear;
  faHeadset = faHeadset;
  faUser = faUser;

  @Input() showHeaderSettings = false;

  openHeaderSettings() {
    this.showHeaderSettings = !this.showHeaderSettings;
  }
}
