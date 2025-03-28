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
import { CardModule } from 'primeng/card';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { DatePickerModule } from 'primeng/datepicker';
import { TooltipModule } from 'primeng/tooltip';

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
    CardModule,
    ConfirmPopupModule,
    ConfirmDialogModule,
    InputNumberModule,
    InputGroupAddonModule,
    InputGroupModule,
    DatePickerModule,
    TooltipModule
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
    ConfirmDialogModule,
    CardModule,
    InputNumberModule,
    InputGroupAddonModule,
    InputGroupModule,
    DatePickerModule,
    TooltipModule
  ]
})
export class PrimengModule { }