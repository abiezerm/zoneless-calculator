import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorButtonComponent } from "./calculator-button.component";

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  template: `
    <div class="w-screen h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right" style="max-width: 300px;">
        <div class="w-full py-5 px-6 text-6xl text-white font-thin">
          <span class="text-4xl">50 +</span>
          <br />
          <span>340.0</span>
        </div>
    </div>
    <div class="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
        <div class="flex w-full">
            <calculator-button>C</calculator-button>
            <calculator-button>+/-</calculator-button>
            <calculator-button>%</calculator-button>
            <calculator-button isCommand>÷</calculator-button>
        </div>
        <div class="flex w-full">
            <calculator-button>7</calculator-button>
            <calculator-button>8</calculator-button>
            <calculator-button>9</calculator-button>
            <calculator-button isCommand>x</calculator-button>
        </div>
        <div class="flex w-full">
            <calculator-button>4</calculator-button>
            <calculator-button>5</calculator-button>
            <calculator-button>6</calculator-button>
            <calculator-button isCommand>-</calculator-button>
        </div>
        <div class="flex w-full">
            <calculator-button>1</calculator-button>
            <calculator-button>2</calculator-button>
            <calculator-button>3</calculator-button>
            <calculator-button isCommand>+</calculator-button>
        </div>
        <div class="flex w-full">
            <calculator-button>0</calculator-button>
            <calculator-button>.</calculator-button>

            <calculator-button isCommand isDoubleSize>=</calculator-button>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent { }
