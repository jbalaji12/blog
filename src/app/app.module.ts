import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowPostsComponent } from './show-posts/show-posts.component';
import { PostsService } from './posts.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [NgbActiveModal, PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
