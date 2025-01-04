import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalculatorButtonComponent } from "./calculator-button.component";

@Component({
  selector: 'calculator',
  imports: [CalculatorButtonComponent],
  template: `
    <div class="w-screen h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right" style="max-width: 300px;">
              <div class="w-full py-5 px-6 text-6xl text-white font-thin">340.0</div>
    </div>
    <div class="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
        <div class="flex w-full">
            <!-- <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">C</button>
            </div> -->
            <calculator-button> C </calculator-button>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">+/-</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light">%</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-2xl font-light">÷</button>
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">7</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">8</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">9</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">⨉</button>
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">4</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">5</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">6</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">-</button>
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">1</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">2</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">3</button>
            </div>
            <div class="w-1/4 border-r border-b border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light">+</button>
            </div>
        </div>
        <div class="flex w-full">
            <div class="w-1/4 border-r border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">0</button>
            </div>
            <div class="w-1/4 border-r border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light">.</button>
            </div>
            <div class="w-2/4 border-r border-indigo-400">
                <button class="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light">=</button>
            </div>
        </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent { }
