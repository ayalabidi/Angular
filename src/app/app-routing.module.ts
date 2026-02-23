import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ListSuggestionComponent } from './suggestion/list-suggestion/list-suggestion.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthUserComponent } from './auth-user/auth-user.component';

const routes: Routes = [
  { path : 'home',component: HomeComponent},
  { path : '',redirectTo:'home',pathMatch:'full'},//path par defaut
  { path : 'product',component: ProductComponent},
   // { path : 'suggestion',component: ListSuggestionComponent},
   { path : 'suggestion',loadChildren:() =>import('./suggestion/suggestion.module').then(m=>m.SuggestionModule)},
   { path : 'user',component: AuthUserComponent},
   { path : '**',component:NotFoundComponent}//not found


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
