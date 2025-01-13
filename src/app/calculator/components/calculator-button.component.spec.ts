import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CalculatorButtonComponent } from "./calculator-button.component";
import { Component } from "@angular/core";

@Component({
  imports: [ CalculatorButtonComponent ],
  template: `
    <calculator-button >
      <span class="projected-content underline">test content</span>
    </calculator-button>
  `,
})
class TestHostComponent {}

describe('CalculatorButtonComponent', () => {
  let fixture: ComponentFixture<CalculatorButtonComponent>;
  let compiled: HTMLElement;
  let component: CalculatorButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CalculatorButtonComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(CalculatorButtonComponent);
    compiled = fixture.nativeElement as HTMLElement;
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should render the component', () => {
    expect(component).toBeTruthy();
  });

  it('should apply w-1/4 when doubleSize is false', () => {
    const hostCssClasses: string[] = compiled.classList.value.split(' ');

    expect(hostCssClasses).toContain('w-1/4');
    expect(component.isDoubleSize()).toBeFalsy();
  });

  it('should apply w-2/4 when doubleSize is true', () => {
    fixture.componentRef.setInput('isDoubleSize', true);
    fixture.detectChanges();

    const hostCssClasses: string[] = compiled.classList.value.split(' ');

    expect(hostCssClasses).toContain('w-2/4');
    expect(component.isDoubleSize()).toBeTruthy();
  });

  it('should emit "onClick" when handledClick is called', () => {
    const spy = spyOn(component.onClick, 'emit');

    component.handledClick();

    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should set isPressed to true when keyboardPressedStyle is called', (done) => {
    component.contentValue()!.nativeElement.innerText = '1';

    component.keyboardPressedStyle('1');

    expect(component.isPressed()).toBeTrue();

    setTimeout(() => {
      expect(component.isPressed()).toBeFalse();
      done()
    }, 101);

  });

  it('should not set isPressed to true if key is not matching', () => {
    component.contentValue()!.nativeElement.innerText = '1';

    component.keyboardPressedStyle('2');

    expect(component.isPressed()).toBeFalse();
  });

  it('should display projected content', () => {
    const testHostFixture = TestBed.createComponent(TestHostComponent);

    const compiled = testHostFixture.nativeElement as HTMLElement;
    const projectedContent = compiled.querySelector('.projected-content');

    expect(projectedContent).not.toBeNull();
    expect(projectedContent!.classList.contains('underline')).toBeTrue();
  });

});
