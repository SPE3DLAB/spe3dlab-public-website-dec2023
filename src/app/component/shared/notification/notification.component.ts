import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  notificationOption: any = {
    type: 'primary',
    position: 'position-fixed bottom-0 end-0',
    closable: true,
    title: '',
    content: '',
    timeout: 2000, // 0: never close
  };

  openNotification = false;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notificationService.notificationOption$.subscribe({
      next: (data: any) => {
        console.log('data: ', data);
        this.notificationOption = {
          ...this.notificationOption,
          ...data,
        };
        this.onOpen();
      },
    });
  }

  onOpen() {
    this.openNotification = true;
    if (this.notificationOption.timeout > 0) {
      setTimeout(() => {
        this.onClose();
      }, this.notificationOption.timeout);
    }
  }

  onClose() {
    this.openNotification = false;
  }
}
