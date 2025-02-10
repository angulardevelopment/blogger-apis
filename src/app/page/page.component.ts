import Select from 'react-select';
import type { ComponentProps } from 'react';
import { CommonModule } from '@angular/common';
import { ReactComponentDirective } from '../react.directive';
import { Component, ElementRef, inject } from '@angular/core';
import { LazyReactComponentDirective } from '../lazyreact.directive';
import { NgReact } from '../useInjector-hook.service';
import { App } from '../demo';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [CommonModule], // ReactComponentDirective, LazyReactComponentDirective
  template: `
    <!-- <h1>Todos page</h1> -->
    <!-- <div [reactComponent]="Select" [props]="selectProps"></div> -->

    <!-- <button (click)="showSelect = true">Show React Component</button>
    <ng-container *ngIf="showSelect">
      <button (click)="changeProps()">Change</button>
      <div [lazyReactComponent]="Select" [props]="selectProps"></div>
    </ng-container> -->
  `
})
export class TodosPageComponent {
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
  showSelect = false;
  selectProps: ComponentProps<typeof import('react-select').default> = {
    onChange(v) {
      console.log(v)
    },
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
  }

  Select = () => import('react-select').then(m => m.default);
  
  changeProps() {
    this.selectProps = {
      ...this.selectProps,
      options: [{ value: 'changed', label: 'Changed' }]
    }
  }

  private ngReact = inject(NgReact);
  private root = this.ngReact.createRoot(inject(ElementRef).nativeElement);

  ngOnInit() {
    this.ngReact.render(this.root, App)
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}