import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {TreeTableModule} from 'primeng/treetable';
import {TreeModule} from 'primeng/tree';
import { NodeService } from './services/nodeservice.service';
import { EventService } from './services/eventservice.service';
import {RadioButtonModule} from 'primeng/radiobutton';
import {FullCalendarModule} from 'primeng/fullcalendar';
import {CheckboxModule} from 'primeng/checkbox';
import { MessageService } from 'primeng/api';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import { FormsModule } from '@angular/forms';
import {TooltipModule} from 'primeng/tooltip';






import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FrmSedutaSegrComponent } from './components/frm-seduta-segr/frm-seduta-segr.component';
import { FrmVerificarsaSegrComponent } from './components/frm-verificarsa-segr/frm-verificarsa-segr.component';
import { FrmRicevutapagamentoAspComponent } from './components/frm-ricevutapagamento-asp/frm-ricevutapagamento-asp.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { InitialdataComponent } from './components/initialdata/initialdata.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrmSedutaSegrComponent,
    FrmVerificarsaSegrComponent,
    FrmRicevutapagamentoAspComponent,
    FooterComponent,
    NavComponent,
    HeaderComponent,
    BreadcrumbComponent,
    InitialdataComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,
    BreadcrumbModule,
    InputTextModule,
    CalendarModule,
    TabViewModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    FileUploadModule,
    HttpClientModule,
    TreeTableModule,
    TreeModule,
    RadioButtonModule,
    FullCalendarModule,
    CalendarModule,
    CheckboxModule,
    AppRoutingModule,
    TableModule,
    DialogModule,
    FormsModule,
    TooltipModule

  ],
  providers: [NodeService, EventService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
