import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHeader } from './my-header';

describe('MyHeader', () => {
  let component: MyHeader;
  let fixture: ComponentFixture<MyHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
