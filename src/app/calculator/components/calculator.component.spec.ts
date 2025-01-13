import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CalculatorComponent } from "./calculator.component";
import { CalculatorService } from "../services/calculator.service";

class MockCalculatorService {
  public resultText = jasmine.createSpy('resultText').and.returnValue('100.00');
  public subResultText = jasmine.createSpy('subResultText').and.returnValue('0');
  public lastOperator = jasmine.createSpy('lastOperator').and.returnValue('+');

  public constructNumber = jasmine.createSpy('constructNumber');
}

describe('CalculatorComponent', () => {
  let fixture: ComponentFixture<CalculatorComponent>;
  let compiled: HTMLElement;
  let component: CalculatorComponent;
  let mockCalculatorService: MockCalculatorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CalculatorComponent ],
      providers: [
        { provide: CalculatorService, useClass: MockCalculatorService }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;
    mockCalculatorService = TestBed.inject(CalculatorService) as unknown as MockCalculatorService;

    //fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should display calculated values', () => {
    expect(component.resultText()).toBe('100.00');
    expect(component.subResultText()).toBe('0');
    expect(component.lastOperator()).toBe('+');
  });

  it('should render the initial values', () => {
    mockCalculatorService.resultText.and.returnValue('123');
    mockCalculatorService.subResultText.and.returnValue('456');
    mockCalculatorService.lastOperator.and.returnValue('*');
    fixture.detectChanges();

    expect(compiled.querySelector('span')?.innerText).toBe('456 *');

    expect(component.resultText()).toBe('123');
    expect(component.subResultText()).toBe('456');
    expect(component.lastOperator()).toBe('*');
  });

  it('should have 19 calculator-button components', () => {
    expect(component.calculatorButtons()).toBeTruthy();
    expect(component.calculatorButtons().length).toBe(19);
  });

  it('should have 19 calculator-button with content projection', () => {

    //other way
    //const buttonsByDirective = fixture.debugElement.queryAll(By.directive(CalculatorButtonComponent));
    const buttons = compiled.querySelectorAll('calculator-button');

    expect(buttons).toBeTruthy();
    expect(buttons.length).toBe(19);

    expect(buttons[0].textContent).toBe('C');
  });

  it('should handle keyboard events correctly', () => {

      const eventEnter = new KeyboardEvent('keyup', { key: 'Enter' });
      document.dispatchEvent(eventEnter);
      expect(mockCalculatorService.constructNumber).toHaveBeenCalledWith('=');

      const eventEsc = new KeyboardEvent('keyup', { key: 'Escape' });
      document.dispatchEvent(eventEsc);
      expect(mockCalculatorService.constructNumber).toHaveBeenCalledWith('C');
  });

  it('should display resultText correctly', () => {
    mockCalculatorService.resultText.and.returnValue('678');
    fixture.detectChanges();

    expect(component.resultText()).toBe('678')
  })

});
