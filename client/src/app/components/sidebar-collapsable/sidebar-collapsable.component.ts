import { Component, Input, HostBinding } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngleRight, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const COLLAPSABLE = 'collapsable';
const COLLAPSED = 'collapsed';
const EXPANDED = 'expanded';

@Component({
  selector: 'app-sidebar-collapsable',
  templateUrl: './sidebar-collapsable.component.html',
  styleUrls: ['./sidebar-collapsable.component.css']
})
export class SidebarCollapsableComponent {
  @Input() name = 'Category';
  @HostBinding("class.expanded") @Input() isExpanded: boolean = false;

  // icons
  faAngleRight = faAngleRight;
  faAngleDown = faAngleDown;

  toggleCollapse() {
    this.isExpanded = !this.isExpanded;
  }

  getCollapsableIcon(): IconDefinition {
    return this.isExpanded ? faAngleDown : faAngleRight;
  }
}
