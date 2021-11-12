import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmSedutaSegrComponent } from './frm-seduta-segr.component';

describe('FrmSedutaSegrComponent', () => {
  let component: FrmSedutaSegrComponent;
  let fixture: ComponentFixture<FrmSedutaSegrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrmSedutaSegrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmSedutaSegrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
