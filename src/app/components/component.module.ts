import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MytabsComponent } from './mytabs/mytabs.component';


const components = [
    MytabsComponent
];
@NgModule({
    declarations: [
        components
    ],
    imports: [
        CommonModule,
        IonicModule,
    ],
    exports: [
        ...components,
    ]
})
export class ComponentModule { }
