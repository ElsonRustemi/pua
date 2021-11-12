import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmRicevutapagamentoAspComponent } from './frm-ricevutapagamento-asp.component';

describe('FrmRicevutapagamentoAspComponent', () => {
  let component: FrmRicevutapagamentoAspComponent;
  let fixture: ComponentFixture<FrmRicevutapagamentoAspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmRicevutapagamentoAspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmRicevutapagamentoAspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
