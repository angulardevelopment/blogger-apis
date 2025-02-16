import * as React from 'react';

export function App() {
  return (
    <>
      <NxWelcome title="react-platform" />
    </>
  );
}

import { Router } from '@angular/router';
import { useInjector } from './useInjector-hook.service';

export function NxWelcome({ title }: { title: string }) {
  const injector = useInjector();
console.log(title, 'title')
  return <>
    ....
    <button onClick={() => injector.get(Router).navigateByUrl('/')}>Home</button>
    ...
  </>
}