import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOrginComponent } from './test-orgin.component';

describe('TestOrginComponent', () => {
  let component: TestOrginComponent;
  let fixture: ComponentFixture<TestOrginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOrginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOrginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
