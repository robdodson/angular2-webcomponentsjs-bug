import {Component, Template, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})

@Template({
  inline: '<h1>Hello {{ name }}</h1><content></content><h2>I am below</h2>'
})

// Component controller
class MyAppComponent {
  constructor() {
    this.name = 'Alice';
  }
}

bootstrap(MyAppComponent);
