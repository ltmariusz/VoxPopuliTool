import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent {
  @Input()
  url?: string;
  @Input()
  icon: string = 'chevron_right';
  @Input()
  iconType: string = 'material-icons-outlined';
  @Input()
  name: string = 'brak nazwy';
}
