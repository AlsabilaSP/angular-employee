import { NgModule } from "@angular/core";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [
    ToolbarModule,
    ButtonModule
  ],
  exports: [
    ToolbarModule,
    ButtonModule
  ]
})
export class PrimengModule { }