import { NgModule } from '@angular/core';
import { CarrelloRoutingModule } from './carrello-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { CarrelloComponent } from './components/carrello.component';
import { SecondoStepComponent } from './components/secondo-step/secondo-step.component';
import { TerzoStepComponent } from './components/terzo-step/terzo-step.component';
import { AcquistatoComponent } from './components/acquistato/acquistato.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CarrelloComponent, SecondoStepComponent, TerzoStepComponent, AcquistatoComponent],
  imports: [
    SharedModule,
    CarrelloRoutingModule,
    FormsModule
  ]
})
export class CarrelloModule { }
