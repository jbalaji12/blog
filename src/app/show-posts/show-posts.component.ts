import { Component, OnInit } from '@angular/core';
import { PostsService } from '../posts.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { interval } from 'rxjs';

@Component({
  selector: 'app-show-posts',
  templateUrl: './show-posts.component.html',
  styleUrls: ['./show-posts.component.scss']
})
export class ShowPostsComponent implements OnInit {

  blogs: any = {};
  post: any;
  modalReference;

  constructor(private postsService: PostsService,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.getBlog();
    this.getBlogInInterval()
  }

  getBlog(){
    this.postsService.getAllBlogs().subscribe(
      (res: any)=>{
        if(this.blogs.hits){
          this.blogs.hits = [...res.hits, ...this.blogs.hits]
        }
        else
          this.blogs = res
      },
      error=>{ console.log(error)}
    )
  }
  getBlogInInterval(){
    interval(10000).subscribe((counter)=>{
      this.getBlog();
    })
  }

  showSinglePost(post, content){
    this.post = post
    this.openModal(content)
  }

  openModal(content){
    this.modalReference = this.modalService.open(content, {size: 'lg'})
  }

  closeModal(){
    this.modalReference.close();
  }
}
