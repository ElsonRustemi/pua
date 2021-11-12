import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialdataComponent } from './initialdata.component';

describe('InitialdataComponent', () => {
  let component: InitialdataComponent;
  let fixture: ComponentFixture<InitialdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
