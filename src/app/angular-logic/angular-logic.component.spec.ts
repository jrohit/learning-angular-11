import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularLogicComponent } from './angular-logic.component';

describe('AngularLogicComponent', () => {
  let component: AngularLogicComponent;
  let fixture: ComponentFixture<AngularLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularLogicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
