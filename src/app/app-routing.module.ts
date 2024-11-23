import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [

  { path: '',loadChildren:()=>import('./modules/cv/cv.module').then(mod=>mod.CvModule) },
  { path: '**', component: NotFoundComponent,outlet:'base' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
