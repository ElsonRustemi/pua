import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmVerificarsaSegrComponent } from './frm-verificarsa-segr.component';

describe('FrmVerificarsaSegrComponent', () => {
  let component: FrmVerificarsaSegrComponent;
  let fixture: ComponentFixture<FrmVerificarsaSegrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmVerificarsaSegrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmVerificarsaSegrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
