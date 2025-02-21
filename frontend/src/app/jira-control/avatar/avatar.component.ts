import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'j-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  @Input() avatarUrl!: string;
  @Input() size = 40;
  @Input() name = '';
  @Input() rounded = true;
  @Input() className = '';
  constructor() {}
  ngOnInit(): void {}

  get style() {
    return {
      width: `${this.size}px`,
      height: `${this.size}px`,
      borderRadius: this.rounded ? '100%' : '3px',
      'background-image': `url(${this.avatarUrl})`,
    };
  }
}
