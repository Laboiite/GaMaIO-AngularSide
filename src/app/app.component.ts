import { Component } from '@angular/core';
import { PingService } from './ping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private pingService: PingService) {
  }
  title = 'Front';

  public test() {
    const testPing = this.pingService.pingBackend().subscribe(
      data => {
        console.log('data :', data);
        return data;
      }
    );
    console.log('testPing :', testPing);
  }
}
