import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent {

  scrollToSection(sectionId: string) {

    const element = document.getElementById(sectionId);

    if (element) {

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  }
  selectedFileName: string = '';
  selectedFile: File | null = null;

  onFileSelected(event: any) {

    const file = event.target.files[0];

    if (file) {

      // File Size Validation (5MB)
      const maxSize = 5 * 1024 * 1024;

      if (file.size > maxSize) {
        alert('File size should be less than 5MB');
        return;
      }

      // Allowed Types
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];

      if (!allowedTypes.includes(file.type)) {
        alert('Only PDF/DOC/DOCX files allowed');
        return;
      }

      this.selectedFile = file;

      this.selectedFileName = file.name;

      console.log(file);
    }
  }

  sendEmail(event: Event) {

    event.preventDefault();

    const form = event.target as HTMLFormElement;

    emailjs.sendForm(
      'service_l8nxa6d',  //Service Id
      'template_0zfhgp7',  // Template Id
      form,
      'h-OgB_ZELwY6SnxLu'  //Public Key form Emailjs
    ).then(
      () => {

        alert('Application submitted successfully');

        form.reset();

        this.selectedFileName = '';

      },
      (error) => {

        console.log(error);

        alert('Failed to send application');

      }
    );
  }
  // selectedFileName: string = '';

  // onFileSelected(event: any) {

  //   const file = event.target.files[0];

  //   if (file) {

  //     // File size validation (5MB)
  //     const maxSize = 5 * 1024 * 1024;

  //     if (file.size > maxSize) {
  //       alert('File size should be less than 5MB');
  //       return;
  //     }

  //     this.selectedFileName = file.name;

  //     console.log('Selected File:', file);
  //   }
  // }


  // sendEmail(event: Event) {
  //   event.preventDefault();

  //   emailjs.sendForm(
  //     'service_l8nxa6d',       // e.g., service_xxxxxx
  //     'template_0zfhgp7',      // e.g., template_yyyyyy
  //     event.target as HTMLFormElement,
  //     'h-OgB_ZELwY6SnxLu'        // e.g., public_zzzzzz
  //   ).then(
  //     () => {
  //       alert('Enquiry sent successfully!');
  //     },
  //     (error) => {
  //       console.error('FAILED...', error);
  //       alert('Failed to send enquiry.');
  //     }
  //   );

  //   (event.target as HTMLFormElement).reset();
  // }



  // selectedFile: any;

  // // File Upload
  // onFileChange(event: any) {

  //   const file = event.target.files[0];

  //   // Only PDF
  //   if (file.type !== 'application/pdf') {
  //     alert('Only PDF files allowed');
  //     return;
  //   }

  //   this.selectedFile = file;
  // }

  // // Convert File to Base64
  // convertToBase64(file: File): Promise<string> {

  //   return new Promise((resolve, reject) => {

  //     const reader = new FileReader();

  //     reader.readAsDataURL(file);

  //     reader.onload = () => {
  //       resolve(reader.result as string);
  //     };

  //     reader.onerror = error => reject(error);

  //   });
  // }


}
