import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledevComponent } from './singledev.component';

describe('SingledevComponent', () => {
  let component: SingledevComponent;
  let fixture: ComponentFixture<SingledevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingledevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingledevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
