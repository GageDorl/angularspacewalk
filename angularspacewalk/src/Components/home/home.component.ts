import { Component, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    @ViewChild('audio') audioPlayer!: ElementRef<HTMLAudioElement>;
    audioUrl = 'https://sp4cew4lk4.net/assets/holupijustpulledupinanewmercedes.mp3';

    toggleAudio() {
        const audio = this.audioPlayer.nativeElement;
        if(audio.paused){
            audio.play();
            Swal.fire({
                html: `<center><h1 style="color:red; font-size:100px; font-family:'Comic Sans MS';"><blink>HOL UP I JUST PULLED UP INNA NEW MERCEDES!</blink></h1><img src="https://sp4cew4lk4.net/assets/fire.gif"></center>`,
                background: "url(https://sp4cew4lk4.net/assets/1star.gif)",
                width:1000,
                showConfirmButton: false

            })
        } else {
            audio.pause();
        }
    }

}
