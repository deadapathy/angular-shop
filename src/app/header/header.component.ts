import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  onButton1Click() {
    console.log("ok1");
  }

  onButton2Click() {
    console.log("ok2");
  }
}
