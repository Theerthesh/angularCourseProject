import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorringComponent } from './worring.component';

describe('WorringComponent', () => {
  let component: WorringComponent;
  let fixture: ComponentFixture<WorringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
