import { Component, OnInit } from '@angular/core';
import { TourService } from 'ngx-ui-tour-ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'my-app';
  constructor(
    private tour: TourService
  ) {}
  
  ngOnInit() {
    this.tour.initialize([{
      anchorId: "start",
      title: "DO THIS",
      content: "1",
      route: '',
      placement: "below",
      enableBackdrop: true
    }, {
      anchorId: "end",
      title: "1",
      content: "1",
      route: '/home',
      placement: "below",
      enableBackdrop: true
    }]);
    this.tour.start();
  }
}
