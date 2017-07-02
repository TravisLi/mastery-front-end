import { Component, Input } from '@angular/core';

@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {
  dragging: boolean = false;
  imageLoaded: boolean = false;
  @Input()imageSrc: string = '';

  handleDragEnter() {
    console.log('drag enter');
    this.dragging = true;
  }

  handleDragLeave() {
    console.log('drag leave');
    this.dragging = false;
  }

  handleDrop(e) {
    console.log('handle drop');
    e.preventDefault();
    this.dragging = false;
    this.handleInputChange(e);
  }

  handleImageLoad(){
    console.log('image load');
    this.imageLoaded = true;
  }

  handleInputChange(e) {
    console.log('input change');
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];

    var pattern = /image-*/;
    var reader = new FileReader();

    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }

    //this.loaded = false;

    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }

  _handleReaderLoaded(e) {
    console.log('rader change');
    var reader = e.target;
    this.imageSrc = reader.result;
  }

}
