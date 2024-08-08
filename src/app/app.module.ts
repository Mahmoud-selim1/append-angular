import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './main/about/about.component';
import { BlogComponent } from './main/blog/blog.component';
import { ContactComponent } from './main/contact/contact.component';
import { FeatureComponent } from './main/feature/feature.component';
import { HomeComponent } from './main/home/home.component';
import { PortfolioComponent } from './main/portfolio/portfolio.component';
import { PricingComponent } from './main/pricing/pricing.component';
import { RecentPostsComponent } from './main/recent-posts/recent-posts.component';
import { ServicesComponent } from './main/services/services.component';
import { TeamComponent } from './main/team/team.component';
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
import { AdminNavComponent } from './admin/shared/admin-nav/admin-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StaticBlogComponent } from './static-blog/static-blog.component';
import { StaticAdminComponent } from './static-admin/static-admin.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FeatureComponent,
    HomeComponent,
    PortfolioComponent,
    PricingComponent,
    RecentPostsComponent,
    ServicesComponent,
    TeamComponent,
    AdminHomeComponent,
    CreateAdminsComponent,
    ListAdminsComponent,
    UpdateAdminsComponent,
    CreateBlogComponent,
    ListBlogComponent,
    UpdateBlogComponent,
    CreateServiceComponent,
    ListServiceComponent,
    UpdateServiceComponent,
    AdminNavComponent,
    StaticBlogComponent,
    StaticAdminComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
