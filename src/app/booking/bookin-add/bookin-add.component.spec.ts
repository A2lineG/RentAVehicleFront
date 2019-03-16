import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookinAddComponent } from './bookin-add.component';

describe('BookinAddComponent', () => {
  let component: BookinAddComponent;
  let fixture: ComponentFixture<BookinAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookinAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookinAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
