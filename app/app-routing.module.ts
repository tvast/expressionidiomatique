import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExpressionComponent }   from './expression.component';


const routes: Routes = [
  { path: '', redirectTo: '/expressions', pathMatch: 'full' },
  { path: 'expressions',     component: ExpressionComponent }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/