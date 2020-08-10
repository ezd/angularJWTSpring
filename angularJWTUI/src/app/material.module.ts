import { NgModel } from "@angular/forms";
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatSliderModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatListModule
        
],
    exports: [
        MatFormFieldModule,
        MatSliderModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        MatCardModule,
        MatProgressBarModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatMenuModule,
        MatListModule
        
]
  })
export class MaterialModule{

}