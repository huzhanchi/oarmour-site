'use client'

import React from 'react';
import CytoscapeComponent from 'react-cytoscapejs';

export function Graph() {
  const elements = [
    { data: { id: 'one', label: 'Node 1' }, position: { x: 0, y: 0 } },
    { data: { id: 'two', label: 'Node 2' }, position: { x: 100, y: 0 } },
    { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
 ];
  return <CytoscapeComponent className = 'dark:invert' cy={(cy) => { cy.center }} elements={elements}   style={ { width: '100%', height: '100%' } } pan={ { x: 400, y: 100 } } />
};