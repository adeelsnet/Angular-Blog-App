import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { PostService } from '../post.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  // CKEDITOR-5 START
  //   public Editor = DecoupledEditor;
  //   public onReady(editor) {
  //     editor.ui.getEditableElement().parentElement.insertBefore(
  //         editor.ui.view.toolbar.element,
  //         editor.ui.getEditableElement()
  //     );
  // }
  // CKEDITOR-5 END

  // enteredTitle = '';
  // enteredBody = '';

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

  addPost(form: NgForm) {
    if (form.invalid) {
      return;
    } else {
      const post = {
        title: form.value.title,
        body: form.value.body,
        date: new Date()
      }
      // console.log(post);
      this.postService.addPost(post);
      form.reset();
    }
  }
}
