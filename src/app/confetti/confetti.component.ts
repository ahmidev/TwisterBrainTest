import { Component } from '@angular/core';

@Component({
  selector: 'app-confetti',
  templateUrl: './confetti.component.html',
  styleUrls: ['./confetti.component.css']
})
export class ConfettiComponent {
   container = document.querySelector('.container');
 totalConfetti = 100;
 colors = [
  '#F56620',
  '#00EAFF',
  '#EA8EE0',
  '#EBFF38',
  '#0582FF'
];

 createAnimatableConfetti() {
  var confetti = document.createElement("animatable-component")
  confetti.options = {
    duration: Math.random() * 3000 + 3000,
    delay: -(Math.random() * 5000),
    iterations: Infinity
  }
  
  var confettiRotation = document.createElement("animatable-component")
  confettiRotation.options = {
    duration: 1000,
    iterations: Infinity,
    easing: 'ease-in-out',
    fill: 'both'
  };
  confettiRotation.keyFrames = [
    { transform: 'rotateX(0)' },
    { transform: 'rotateX(359deg)' }
  ];
  confettiRotation.className = 'confetti';
  confettiRotation.style.color = colors[parseInt(Math.random() * colors.length)];
  confettiRotation.duration = Math.random() * 4000 + 1000;
  
  var confettiAskew = document.createElement("animatable-component")
  confettiAskew.options = {
    duration: 1000,
    iterations: Infinity,
    direction: 'alternate',
    easing: 'ease-in-out',
    fill: 'both'
  }
  confettiAskew.delay = Math.random() * -1000;
  confettiAskew.duration = Math.random() * 4000 + 800;
  confettiAskew.keyFrames = [
    { transform: 'skewY(10deg) translate3d(-250%, 0, 0)' },
    { transform: 'skewY(-12deg) translate3d(250%, 0, 0)' }
  ];
  confettiAskew.style.perspective = 1000;
  
  var confettiContent = document.createElement('div')
  confettiContent.style.transform = 'skewY(10deg)';
  confettiContent.style.width = '1rem';
  confettiContent.style.height = '1rem';
  confettiContent.style.background = 'currentColor';
  confettiContent.style.perspective = 1000;
  
  confettiAskew.appendChild(confettiContent);
  confettiRotation.appendChild(confettiAskew);
  confetti.appendChild(confettiRotation)
  
  confettiAskew.autoPlay = true;
  confettiRotation.autoPlay = true;
  confetti.autoPlay = true;
  
  return confetti
}

for (var i = 0; i < totalConfetti; i++) {
  var animatableConfetti = createAnimatableConfetti()
  var scale = Math.random() * .8 + .2;
  var position = i / totalConfetti * 100
  animatableConfetti.keyFrames = [
    {
      transform: 'translate3d(' + position + 'vw, 0, 0) scale(' + scale + ')',
      opacity: scale
    },
    {
      transform: 'translate3d(' + (position + 10) + 'vw, 100vh, 0) scale(' + scale + ')',
      opacity: 1
    }
  ]
  container.appendChild(animatableConfetti);
}
}
