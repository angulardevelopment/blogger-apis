import Select from 'react-select';
import type { ComponentProps } from 'react';
import { CommonModule } from '@angular/common';
import { ReactComponentDirective } from '../directives/react.directive';
import { Component, ElementRef, inject } from '@angular/core';
import { LazyReactComponentDirective } from '../directives/lazyreact.directive';
import { NgReact } from '../services/useInjector-hook.service';
import { App } from '../react-components/NxWelcome.component';
import { TestReact } from '../react-components/TestReact.component';
import { LogService } from '../services/log.service';

const template = `
<p>Child 1 Count = {{log.getCount()}}</p>
<button (click)="update()">Update Count </button>
`

const template1 = `
<h1>Todos page</h1>
    <!-- <div [reactComponent]="Select" [props]="selectProps"></div> -->

    <div [reactComponent]="TestReact"></div>


    <!-- <button (click)="showSelect = true">Show React Component</button>
    <ng-container *ngIf="showSelect">
      <button (click)="changeProps()">Change</button>
      <div [lazyReactComponent]="Select" [props]="selectProps"></div>
    </ng-container> -->`
@Component({
  selector: 'app-page',
  standalone: true,
  // imports: [CommonModule, ReactComponentDirective], // ReactComponentDirective, LazyReactComponentDirective
  template: template,
  
})
export class TodosPageComponent {
    log = inject(LogService);
  update() {
this.log.setCount();
}
  // normal loading
  // Select = Select;
  // selectProps: ComponentProps<Select> = {
  //   onChange(v) {
  //     console.log(v)
  //   },
  //   options: [
  //     { value: 'chocolate', label: 'Chocolate' },
  //     { value: 'strawberry', label: 'Strawberry' },
  //     { value: 'vanilla', label: 'Vanilla' }
  //   ]
  // }

  // lazy load
  // showSelect = false;
  // selectProps: ComponentProps<typeof import('react-select').default> = {
  //   onChange(v) {
  //     console.log(v)
  //   },
  //   options: [
  //     { value: 'chocolate', label: 'Chocolate' },
  //     { value: 'strawberry', label: 'Strawberry' },
  //     { value: 'vanilla', label: 'Vanilla' }
  //   ]
  // }

  // Select = () => import('react-select').then(m => m.default);
  
  // changeProps() {
  //   this.selectProps = {
  //     ...this.selectProps,
  //     options: [{ value: 'changed', label: 'Changed' }]
  //   }
  // }

  TestReact = TestReact;

  // using hook
  private ngReact = inject(NgReact);
  private root = this.ngReact.createRoot(inject(ElementRef).nativeElement);

  ngOnInit() {
    // this.ngReact.render(this.root, App)
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}