import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavComponent } from './components/nav/nav.component';
import { FrmRicevutapagamentoAspComponent } from './components/frm-ricevutapagamento-asp/frm-ricevutapagamento-asp.component';
import { FrmSedutaSegrComponent } from './components/frm-seduta-segr/frm-seduta-segr.component';
import { FrmVerificarsaSegrComponent } from './components/frm-verificarsa-segr/frm-verificarsa-segr.component';

const routes = [
  {
    path: 'nav', component: NavComponent,
    children: [
      { path: '', redirectTo: 'nav', pathMatch: 'full' },
      { path: '1', component: FrmRicevutapagamentoAspComponent, data: { title: "Ricevuta Pagamento" } },
      { path: '2', component: FrmSedutaSegrComponent, data: { title: "Seduta Segr" } },
      { path: '3', component: FrmVerificarsaSegrComponent, data: { title: "Verifica Segr" } }
    ]
  },
]




@NgModule({
  declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
