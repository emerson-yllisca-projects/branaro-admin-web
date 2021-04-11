import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [ './register.component.css'
  ]
})
export class RegisterComponent implements OnInit {

  constructor(private slide: ElementRef, 
    private step1: ElementRef,
    private step2: ElementRef,
    private step3: ElementRef) { }

ngOnInit(): void {
}

// efectos

current = 1;

nextBtnFirst (e:any) {
const slidePage = this.slide.nativeElement.querySelector('.slide-page');
const progressText = this.step1.nativeElement.querySelectorAll('.step p');
const progressCheck = this.step2.nativeElement.querySelectorAll('.step .check');
const bullet = this.step3.nativeElement.querySelectorAll('.step .bullet');
e.preventDefault();
console.log(slidePage);
slidePage.style.marginLeft = "-25%";
bullet[this.current - 1].classList.add("active");
progressCheck[this.current - 1].classList.add("active");
progressText[this.current - 1].classList.add("active");
this.current += 1;
};
submitBtn() {
// this.bullet[this.current - 1].classList.add("active");
// this.progressCheck[this.current - 1].classList.add("active");
// this.progressText[this.current - 1].classList.add("active");
// this.current += 1;
// setTimeout(function() {
//     alert("Your Form Successfully Signed up");
//     location.reload();
// }, 800);
};

prevBtnFourth(e:any) {

const slidePage = this.slide.nativeElement.querySelector('.slide-page');
const progressText = this.step1.nativeElement.querySelectorAll('.step p');
const progressCheck = this.step2.nativeElement.querySelectorAll('.step .check');
const bullet = this.step3.nativeElement.querySelectorAll('.step .bullet');

e.preventDefault();
slidePage.style.marginLeft = "0%";
bullet[this.current - 2].classList.remove("active");
progressCheck[this.current - 2].classList.remove("active");
progressText[this.current - 2].classList.remove("active");
this.current -= 1;
};

}
