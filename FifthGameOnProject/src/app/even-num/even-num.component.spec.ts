import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenNumComponent } from './even-num.component';

describe('EvenNumComponent', () => {
  let component: EvenNumComponent;
  let fixture: ComponentFixture<EvenNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EvenNumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvenNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
