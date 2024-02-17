import { Component } from "@angular/core";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {
  isBasketIconVisible: boolean = true;
  emptyIcon = ShoppingBasketIcon;

  onButton1Click() {
    console.log("ok1");
  }

  onButton2Click() {
    console.log("ok2");
  }
}
