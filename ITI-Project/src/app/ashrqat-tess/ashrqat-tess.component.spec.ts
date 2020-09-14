import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AshrqatTessComponent } from './ashrqat-tess.component';

describe('AshrqatTessComponent', () => {
  let component: AshrqatTessComponent;
  let fixture: ComponentFixture<AshrqatTessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AshrqatTessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AshrqatTessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
