import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dropZone]'
})
export class DropZoneDirective {

  @Output() dropped = new EventEmitter<FileList>();
  @Output() hoverd = new EventEmitter<boolean>();



  constructor() { }

  @HostListener('drop',['$event'])
  onDrop($event){
    console.log("drop",$event);
    $event.preventDefault();
    this.dropped.emit($event.dataTransfer.files);
    this.hoverd.emit(false);
    
  }

  @HostListener('dragover',['$event'])
  onDragOver($event){
    console.log("dragover",$event);
    $event.preventDefault();
    this.hoverd.emit(true);

  }

  @HostListener('dragleave',['$event'])
  onDragLeave($event){
    console.log("dragleave",$event);
    $event.preventDefault();
    this.hoverd.emit(false);

  }

}
