import {Root} from 'react-dom/client';
// import React, { Component }  from 'react';

import * as React from 'react';

export function TestReact() {
    return <p>Hello World from React!</p>;
}

export function renderRoot(root: Root) {
    root.render(<TestReact />);
}