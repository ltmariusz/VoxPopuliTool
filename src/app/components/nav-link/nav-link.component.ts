import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-link',
  templateUrl: './nav-link.component.html',
  styleUrls: ['./nav-link.component.scss']
})
export class NavLinkComponent implements OnInit{

  currentRoute?: any

  constructor(
    private router: Router, private route: ActivatedRoute
  ) { 
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkUrl()
      }
    });
  }

  ngOnInit(): void {
    this.checkUrl()
  }

  checkUrl() {
    this.currentRoute = this.route!.snapshot!.firstChild!.routeConfig!.path!
    // console.log(this.currentRoute)
  }

  @Input()
  url?: string;
  @Input()
  icon?: string = 'chevron_right';
  @Input()
  iconType?: string = 'material-icons-outlined';
  @Input()
  name?: string = 'brak nazwy';
}
