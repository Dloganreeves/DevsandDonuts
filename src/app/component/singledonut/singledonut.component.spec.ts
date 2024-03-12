import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledonutComponent } from './singledonut.component';

describe('SingledonutComponent', () => {
  let component: SingledonutComponent;
  let fixture: ComponentFixture<SingledonutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingledonutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingledonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
