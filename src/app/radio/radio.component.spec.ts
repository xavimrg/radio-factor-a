import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioComponent } from './radio.component';
import { input } from '@angular/core';
import { By, Title } from '@angular/platform-browser';

describe('RadioComponent', () => {
  let component: RadioComponent;
  let fixture: ComponentFixture<RadioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('should show radiosingular title', () => {
    it('should show radiosingular title', () => {
      expect(component.title).toBe('radiosingular');
    });

    it('should create', () => {
      fixture.detectChanges();
      const title = fixture.nativeElement.querySelector('h1');
      expect(title.textContent).toBe(title);
    });

    describe('it shoudl search radio station by name', () =>
      it(
        "should a am imput with the placeholder, 'escribe el nombre de la emisora'"
      ));
    const placeholder =
      fixture.nativeElement.querySelector('input').placeholder; // caputar el elemento ipunt a traves del dom - .placeholder para caputar el place holder dentro del input
    const valuePlaceholder = 'escribe el nombre de la emisora';
    expect(placeholder).toBe(valuePlaceholder);
  });

  it('shouldh have a button named search', () => {
    const button = fixture.nativeElement.querySelector('button'); // con el queryselector traigo el botton o el intu o el elemento que quiero traer
    const buttontextvalue = 'search';
    expect(button).toBe(buttontextvalue);
  });
  it('search function should be runned one time', () => {
    const radionStationSpy = jest.spyOn(component, 'searchRadio'); // funcion espia, ya que no puedo testear la funcion real
    const button = fixture.debugElement.query(By.css('#searchButton')); // query/By.css ES LA funcion de Agunlar = queryselector - IMPORTAR EL By
    
    
    button.triggerEventHandler('click', null);
    expect(radionStationSpy).toHaveBeenCalledTimes(1); // se puede usar toHaveBeencalled - matcher// cuando le doy al boton no llama al metodo real sino que llama al metodo espia
  });
  describe('Radio station list', () => {
    it('it shoudl have a list', () => {
      const radioStationList = fixture.nativeElement.querySelector('ul');
      console.log(radioStationList); // para ver que es radioStationList y ver que devuelve, devuelve un NULL
      expect(radioStationList).not.toBeNull;
    });
    it('the list shoudl be initializated empty', () => {
      const liArray = fixture.nativeElement.querySelectorAll('li');
      expect(liArray.length).toBe(0); // no hay elementos en el Array, 0 elementos

      it('a succesulf search shoudl return one resut', () => {
        component.filterArray=[{
          name: "Test",
          url: "Test",
          country: "Test"
        }]
        const radionStationSpy = jest.spyOn(component,'searchRadio') mockImplementation((=> {
          return radio.name.includes('t')
        }))


        const liArray = fixture.nativeElement.querySelector('li')
        const button = fixture.debugElement.query(By.css('#searchButton'));
        
        
        component.inputValue="8"
        button.triggerEventHandler('click', null);
      
        fixture.detectChanges();

        expect(liArray.lenght).toBeGreaterThan(0)
      });
    });
  });
});
