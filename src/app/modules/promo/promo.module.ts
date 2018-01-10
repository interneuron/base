import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromoComponent} from './promo.component';
import { PhonesComponent } from './phones/phones.component';

@NgModule({
    declarations: [
        PromoComponent,
        PhonesComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [],
    exports: [PromoComponent]
})
export class PromoModule {

}