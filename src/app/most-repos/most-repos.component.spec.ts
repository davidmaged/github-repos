import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostReposComponent } from './most-repos.component';

describe('MostReposComponent', () => {
  let component: MostReposComponent;
  let fixture: ComponentFixture<MostReposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostReposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
