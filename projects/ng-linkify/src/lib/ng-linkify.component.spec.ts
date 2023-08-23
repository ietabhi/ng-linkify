import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLinkifyComponent } from './ng-linkify.component';

describe('NgLinkifyComponent', () => {
  let component: NgLinkifyComponent;
  let fixture: ComponentFixture<NgLinkifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgLinkifyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgLinkifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
