import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PaginatorModule } from 'primeng/paginator';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ], 
  exports: [
    ButtonModule,
    InputTextModule,
    MenubarModule,
    MenuModule,
    ScrollPanelModule,
    PaginatorModule,
    DropdownModule,
    SliderModule,
  ]
})
export class PrimengModule { }


