import { NgModule } from "@angular/core";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SelectModule } from "primeng/select";

@NgModule({
  imports: [
    ToolbarModule,
    ButtonModule,
    TableModule,
    SelectModule
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    TableModule,
    SelectModule,
  ]
})
export class PrimengModule { }