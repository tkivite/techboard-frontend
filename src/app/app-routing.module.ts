import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

import { LoginComponent } from "./pages/login/login.component";
import { UsersComponent } from "./pages/users/users.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { CreateComponent } from "./pages/users/create/create.component";

const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "users", component: UsersComponent },
  { path: "users/create", component: CreateComponent },
  { path: "contactus", component: ContactusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
