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
                title: 'HOL UP I JUST PULLED UP INNA NEW MERCEDES!',
                width: 1000,
                color: '#ff0000',


            })
        } else {
            audio.pause();
        }
    }

}
