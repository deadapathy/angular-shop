import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: "", component: ProductListComponent }]),
  ],
  declarations: [AppComponent, HeaderComponent, ProductListComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
