import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorComponent } from "@/calculator/components/calculator.component";

@Component({
  selector: 'calculator-view',
  imports: [CalculatorComponent],
  template: `
    <div class="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden" >
      <calculator />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CalculatorViewComponent { }
