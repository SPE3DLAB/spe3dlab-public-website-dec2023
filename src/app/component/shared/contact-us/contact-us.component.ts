import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { TranslationService } from 'src/app/module/translation/service/translation.service';
import { NotificationService } from 'src/app/service/notification.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  // formspreeSecretKey: string = environment.formspreeKey;
  formspreeSecretKey: string = 'mwkdzkbv';

  contactForm = this.formBuilder.group({
    name: new FormControl(''),
    email: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl(''),
  });

  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private notificationService: NotificationService,
    private translationService: TranslationService
  ) {}

  sendEmail() {
    try {
      this.isLoading = true;

      if (!environment.allowedContactForm) {
        throw new Error(this.translationService.getTranslation('ctf_disabled'));
      }

      const name = this.contactForm.get('name')?.value;
      const email = this.contactForm.get('email')?.value || '';
      const subject = this.contactForm.get('subject')?.value;
      const message = this.contactForm.get('message')?.value;

      if (!name || !email || !subject || !message) {
        throw new Error(
          this.translationService.getTranslation('ctf_missing_data')
        );
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!emailRegex.test(email)) {
        throw new Error(
          this.translationService.getTranslation('ctf_invalid_email')
        );
      }

      let url = `https://formspree.io/f/${this.formspreeSecretKey}`;

      const data = `name=${name}&email=${email}&subject=${subject}&message=${message}`;

      const httpOptions = {
        headers: new HttpHeaders({
          Accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        }),
      };

      this.httpClient.post<any>(url, data, httpOptions).subscribe({
        next: (data) => {
          this.notificationService.showNotification({
            type: 'success',
            title: this.translationService.getTranslation('ctf_success'),
            content: this.translationService.getTranslation(
              'ctf_success_description'
            ),
          });
          this.isLoading = false;
          this.contactForm.reset();
        },
        error: (error) => {
          this.isLoading = false;
          this.notificationService.showNotification({
            type: 'danger',
            title: this.translationService.getTranslation('ctf_error'),
            content: error.message,
          });
        },
      });
    } catch (error: any) {
      this.isLoading = false;
      this.notificationService.showNotification({
        type: 'danger',
        title: this.translationService.getTranslation('ctf_error'),
        content: error.message,
      });
    }
  }
}
