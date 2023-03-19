import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MytabsComponent } from './mytabs.component';

describe('MytabsComponent', () => {
  let component: MytabsComponent;
  let fixture: ComponentFixture<MytabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytabsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MytabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
