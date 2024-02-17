import { Component, OnInit } from "@angular/core";
import { fetchProductData, Product } from "./products";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  ngOnInit() {
    fetchProductData().then((data) => {
      this.products = data;
    });
  }
}
