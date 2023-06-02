import { Component } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  ngOnInit() {
    this.loadJsFile("../../../assets/select.js");
  }
  public loadJsFile(url: any) {  
    let js0 = document.createElement('script');  
    js0.src = url;  
    js0.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(js0);
  }
}
