import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Project2TableComponent } from './project2-table.component';

describe('Project2TableComponent', () => {
  let component: Project2TableComponent;
  let fixture: ComponentFixture<Project2TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Project2TableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Project2TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
