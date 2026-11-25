import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CanonicalService {
  private readonly document = inject(DOCUMENT);

  setCanonicalURL(url?: string): void {
    // Falls back to the current window location if no specific URL is provided
    const canonicalUrl = url || this.document.location.href;

    // Find an existing canonical tag or create a new one
    let link: HTMLLinkElement | null = this.document.head.querySelector(
      "link[rel='canonical']"
    );

    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }

    link.setAttribute('href', canonicalUrl);
  }
}
