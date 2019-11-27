import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostUserBoxComponent } from './components/post-user-box/post-user-box.component';
import { PostComponent } from './pages/post/post.component';



@NgModule({
  declarations: [PostUserBoxComponent, PostComponent],
  imports: [
    CommonModule
  ]
})
export class PostModule { }
