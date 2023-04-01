import { Component } from '@angular/core';
//import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
//import { Storage } from '@ionic/storage';


@Component({
  selector: 'mp-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss']
})
export class CreatePostPage {
 /* title: string;
  caption: string;
  link: string;
  tag: string;
  photo: string;

  constructor(private camera: Camera, private storage: Storage) { }

  handleFileInput(event: any): void {
    const file: File = event.target.files[0];
    const reader: FileReader = new FileReader();
    reader.onloadend = () => {
      this.photo = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  submitPost(): void {
    /*const post = {
      title: this.title,
      caption: this.caption,
      link: this.link,
      tag: this.tag,
      photo: this.photo,
    };
    this.storage.get('posts').then(posts => {
      const newPosts = posts ? [...posts, post] : [post];
      this.storage.set('posts', newPosts);
    });
  }


}*/
}