import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`Your Text : <input type = 'text' [(ngModel)] = 'userText'/>
              <br/><br/>
              <question2 [hobbyInput] ='userText'></question2> `,
})
export class AppComponent {
  userText: string = '';
}
   
