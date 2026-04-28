import { Component } from '@angular/core';
import { LogService } from './services/log.service';
import { TodosPageComponent } from './page/page.component';
import { BasicComponent } from './basic/basic.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  providers:[LogService],
  imports: [BasicComponent,
    TodosPageComponent]
})
export class AppComponent {
  title = 'blogger';
}
