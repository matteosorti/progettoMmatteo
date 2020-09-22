import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcquistatoComponent } from './components/acquistato/acquistato.component';
import { CarrelloComponent } from './components/carrello.component';
import { SecondoStepComponent } from './components/secondo-step/secondo-step.component';
import { TerzoStepComponent } from './components/terzo-step/terzo-step.component';

const routes: Routes = [{ path: '', component: CarrelloComponent },
                        { path: 'secondo-step', component: SecondoStepComponent},
                        { path: 'terzo-step', component: TerzoStepComponent},
                        { path: 'acquistato', component: AcquistatoComponent}
                      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrelloRoutingModule { }
