import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ServicesComponent } from './main/services/services.component';
import { TeamComponent } from './main/team/team.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { RecentPostsComponent } from './main/recent-posts/recent-posts.component';
import { FeatureComponent } from './main/feature/feature.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { CreateAdminsComponent } from './admin/admins/create-admins/create-admins.component';
import { ListAdminsComponent } from './admin/admins/list-admins/list-admins.component';
import { UpdateAdminsComponent } from './admin/admins/update-admins/update-admins.component';
import { CreateBlogComponent } from './admin/admin-blog/create-blog/create-blog.component';
import { ListBlogComponent } from './admin/admin-blog/list-blog/list-blog.component';
import { UpdateBlogComponent } from './admin/admin-blog/update-blog/update-blog.component';
import { CreateServiceComponent } from './admin/admin-services/create-service/create-service.component';
import { ListServiceComponent } from './admin/admin-services/list-service/list-service.component';
import { UpdateServiceComponent } from './admin/admin-services/update-service/update-service.component';
import { StaticBlogComponent } from './static-blog/static-blog.component';
import { StaticAdminComponent } from './static-admin/static-admin.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  // user ui routes
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'team', component: TeamComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'recent', component: RecentPostsComponent },
  { path: 'feature', component: FeatureComponent },
  { path: 'pricing', component: PricingComponent },
  // admin ui routes
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'admin', component: AdminHomeComponent },
  // admins routes
  { path: 'create-admin', component: CreateAdminsComponent },
  { path: 'list-admin', component: ListAdminsComponent },
  { path: 'update-admin/:id', component: UpdateAdminsComponent },
  // blog routs
  { path: 'create-blog', component: CreateBlogComponent },
  { path: 'list-blog', component: ListBlogComponent },
  { path: 'update-blog/:id', component: UpdateBlogComponent },
  // services routes
  { path: 'create-services', component: CreateServiceComponent },
  { path: 'list-services', component: ListServiceComponent },
  { path: 'update-services/:id', component: UpdateServiceComponent },
  { path: 'static/:id', component: StaticBlogComponent },
  { path: 'static-admin/:id', component: StaticAdminComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
