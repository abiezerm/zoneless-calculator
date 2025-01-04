import { ChangeDetectionStrategy, Component, HostBinding, input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'calculator-button',
  imports: [],
  host: {
    class: 'w-1/4 border-r border-b border-indigo-400',
  },
  template: `
    <!-- <div class="w-1/4 border-r border-b border-indigo-400"> -->
        <button [class.is-command]="isCommand()">
          <ng-content></ng-content>
        </button>
    <!-- </div> -->
  `,
  styles: `
    button {
      @apply w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light;
    }

    .is-command {
      @apply bg-indigo-700 bg-opacity-20;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorButtonComponent{
  public isCommand = input(false, {
    transform: (value: boolean | string ) => typeof value === 'string' ? value === '' : value,
  });

  public isDoubleSize = input(false, {
    transform: (value: boolean | string ) => typeof value === 'string' ? value === '' : value,
  });

  @HostBinding('class.w-2/4') get commandStyle() {
    return this.isDoubleSize();
  }
}
