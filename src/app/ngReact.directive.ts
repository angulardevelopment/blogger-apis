import {
  Directive,
  ElementRef,
  Input,
  OnDestroy
} from '@angular/core'

import { createRoot, Root } from 'react-dom/client'

@Directive({
  selector: '[ngReact]'
})
export class NgReactDirective implements OnDestroy {

  @Input() set ngReact(path: string) {

    import(`${path}`)
      .then((comp) => this.root.render(comp.default))
      .catch((e) => console.error(`Error while importing ${path}, Error: ${e}`))
  }

  private root: Root

  constructor(
    private el: ElementRef
  ) {
    this.root = createRoot(el.nativeElement)
  }

  ngOnDestroy(): void {
    this.root.unmount()
  }
}