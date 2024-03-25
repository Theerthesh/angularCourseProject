import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddNumComponent } from './odd-num.component';

describe('OddNumComponent', () => {
  let component: OddNumComponent;
  let fixture: ComponentFixture<OddNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OddNumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OddNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
