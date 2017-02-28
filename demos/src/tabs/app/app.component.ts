import { Component } from '@angular/core';
import { ApiDemoPage } from '../pages/demo-page';

@Component({
  template: '<ion-nav [root]="root"></ion-nav>',
  selector: 'api-demo-app'
})
export class ApiDemoApp {
  root = ApiDemoPage;
}