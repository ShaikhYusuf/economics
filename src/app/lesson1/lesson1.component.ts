import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lesson1',
  imports: [],
  templateUrl: './lesson1.component.html',
  styleUrl: './lesson1.component.css'
})
export class Lesson1Component {

  @ViewChild('textDiv') textDiv!: ElementRef;

  private utterance: SpeechSynthesisUtterance | null = null;
  isPlaying = false; // Track play/pause state

  ngAfterViewInit(): void {
    if (!this.textDiv) {
      console.error('textDiv not found!');
    }
  }

  toggleVoice(): void {
    const text = this.textDiv?.nativeElement?.innerText || '';
    if (!this.utterance) {
      // Create and start the utterance if it doesn't exist
      this.utterance = new SpeechSynthesisUtterance(text);
      this.utterance.lang = 'en-US';
      this.utterance.onend = () => {
        // Reset state when speech ends
        this.isPlaying = false;
        this.utterance = null;
      };
      speechSynthesis.speak(this.utterance);
      this.isPlaying = true;
    } else if (speechSynthesis.paused) {
      // Resume if paused
      speechSynthesis.resume();
      this.isPlaying = true;
    } else if (speechSynthesis.speaking) {
      // Pause if currently speaking
      speechSynthesis.pause();
      this.isPlaying = false;
    }
  }

}
