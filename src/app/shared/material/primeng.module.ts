import { NgModule } from "@angular/core";
import { ToolbarModule } from "primeng/toolbar";
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { SelectModule } from "primeng/select";
import { InputTextModule } from "primeng/inputtext";
import { InputIconModule } from "primeng/inputicon";
import { IconFieldModule } from "primeng/iconfield";
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  imports: [
    ToolbarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    SelectModule,
    ToastModule,
    ConfirmPopupModule,
    ConfirmDialogModule
  ],
  exports: [
    ToolbarModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    SelectModule,
    ToastModule,
    ConfirmPopupModule,
    ConfirmDialogModule
  ]
})
export class PrimengModule { }