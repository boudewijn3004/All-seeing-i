
    let AssistantImg;
    let mouseElement;
    let eyes;
  let eyeLeft, eyeRight, eyeInnerLeft, eyeInnerRight;
  let eyeWhite = document.createElement('div')

  eyeInnerLeft = document.createElement('div');
  eyeInnerRight = document.createElement('div');
  eyeInnerLeft.classList.add('eye-inner')
  eyeInnerRight.classList.add('eye-inner')

    eyes = document.createElement('div');
    eyes.classList.add("eyes-container")
    eyeLeft = document.createElement("div");
    eyeRight = document.createElement("div");
    
    eyeLeft.appendChild(eyeInnerLeft)
    eyeRight.appendChild(eyeInnerRight)

    eyeLeft.classList.add("eye-left", "eye")
    eyeRight.classList.add("eye-right", "eye")


    let singleEye = {
      
    }
    
    Object.assign(eyeLeft.style, singleEye )
    Object.assign(eyeRight.style, singleEye )

    eyes.style
    let eyesStyle = {
      
      
    }

    Object.assign(eyes.style, eyesStyle);
    // mouseElement.appendChild(eyes);
    eyes.appendChild(eyeLeft)
    // eyes.appendChild(eyeRight)


  

window.addEventListener('load', function () {

  // document.querySelector('body').style.cursor = "none";
    mouseElement = document.createElement('div')
    
      mouseElement.style.width = "270px";
      mouseElement.style.height = "200px";
      mouseElement.style.bottom = "20px";
      mouseElement.style.right = "50px";
      // mouseElement.style.backgroundColor =  "red";
      mouseElement.style.position =  "fixed";
      mouseElement.style.display =  "block";
      // mouseElement.style.pointerEvents =  "none";


      document.body.appendChild(mouseElement);
      mouseElement.classList.add('outer-assistant-wrap');

    // document.body.style.fontSize = "100px";

    let imgUrl = chrome.runtime.getURL("/images/eyeouter.png");
    let eyePupilsrc = chrome.runtime.getURL("/images/eyepupil.png");
    let eyeWhitesrc = chrome.runtime.getURL("/images/eyewhite.png");
    AssistantImg = document.createElement("img");
    
    // AssistantImg.src =  "/images/get_started128.png";
    AssistantImg.src =  imgUrl;
    eyeWhite.style.backgroundImage = 'url(' + eyeWhitesrc + ')';;
    AssistantImg.classList.add("eye-outer-img");
    eyeWhite.classList.add('eye-white');
    let imgStyles = {
      // 
    }
    Object.assign(AssistantImg.style, imgStyles);
    mouseElement.appendChild(AssistantImg);
    mouseElement.appendChild(eyeWhite);
    mouseElement.appendChild(eyes);
    let alldivs = document.querySelectorAll("div");
    alldivs.forEach(div => {
      // div.style.borderColor = "red";
    });


    let allEyesInner = document.querySelectorAll('.eye-inner')
    allEyesInner.forEach( inner => {
      // inner.style.backgroundColor = 'black';
      inner.style.backgroundImage = 'url(' + eyePupilsrc + ')';


      // inner.style.height = '20px';
      // inner.style.width = '20px';
      inner.style.display = 'block';
      inner.style.borderRadius = '100%';
      inner.style.position = 'absolute';


    });


    document.addEventListener("mousemove", e => {
      let x = e.clientX;
      let y = e.clientY;
      
      // as
      // mouseElement.style.left = x + "px";
      // mouseElement.style.top = y + "px";
      mouseElement.style.zIndex = "99999";

      // AssistantImg.style.left = x + "px";
      // AssistantImg.style.top = y + "px";
      // AssistantImg.style.transform = "translate(" + x + 'px,' + y + 'px)';



    })


    passwordInputs.forEach(input => {
      console.log(input);
      input.addEventListener("focus", e => {
        
        // let utterThis = new SpeechSynthesisUtterance(randomPasswordSpeech[randomPasswordSpeech.length * Math.random() | 0]);
        // synth.speak(utterThis);
        outputSpeechbubble(randomPasswordSpeech[randomPasswordSpeech.length * Math.random() | 0]);
        console.log(e);
      })
    });
    


    let searchInputs = document.querySelectorAll("input[type='search'], input[aria-label='Search'], input[name='q'], input#search" );
    console.log(searchInputs);

    searchInputs.forEach(input => {
      // console.log(input);
      input.addEventListener("click", e => {
        console.log("search click");
        outputSpeechbubble(randomSearchSpeech[randomSearchSpeech.length * Math.random() | 0]);

      })
    });

});

let assistantOverlay = document.createElement("div");
assistantOverlay.classList.add("assistant-overlay")
// assistantOverlay.style.height = '100vh';
// assistantOverlay.style.width = '100%';
assistantOverlay.style.position = 'fixed';
assistantOverlay.style.zIndex = '9999';
assistantOverlay.style.top = '0';
// assistantOverlay.style.pointerEvents = 'none';

// assistantOverlay.style.height = '100vh';

document.body.appendChild(assistantOverlay);
console.dir(assistantOverlay)
document.addEventListener("mousemove", e => {

  const eyes = document.querySelectorAll('.eye');

    var x = e.clientX * 100 / window.innerWidth + "%";
    var y = e.clientY * 100 / window.innerHeight + "%";
    //event.e => get the horizontal coordinate of the mouse
    //event.clientY => get the Vertical coordinate of the mouse
    //window.innerWidth => get the browser width
    //window.innerHeight => get the browser height

    for(var i=0;i < eyes.length;i++){
      eyes[i].style.left = x;
      eyes[i].style.top = y;
      eyes[i].style.transform = "translate(-"+x+",-"+y+")";
    }




  // [].forEach.call(eyes, function(eye) {
  //   // Get the mouse position on the horizontal axis
  //   let mouseX = eye.getBoundingClientRect().right;
  //   // If it's the left eye we need the left offset instead the right
  //   if (eye.classList.contains('eye-left')) {
  //     mouseX = eye.getBoundingClientRect().left;
  //   }
  //   // Now we also need the vertical offset
  //   let mouseY = eye.getBoundingClientRect().top;
  //   // Now we are going to calculate the radian value of the offset between the mouse and the eye
  //   let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
  //   // Let's convert this into a degree based value so we can use it in CSS
  //   let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
  //   // Now all we have to do is add this degrees to our eye!
  //   eye.style.transform = `rotate(${rotationDegrees}deg)`;
  // });
  AssistantImg.addEventListener("click", () => {
    popupElement.classList.add("showpopup");
  })  
  

})



// let synth = window.speechSynthesis;

let randomPasswordSpeech = ["Nice password!", "You sure that is safe?", "Waow very creative password you got there!"]
let randomSearchSpeech = ["What are you looking for?", "What about...", "Interesting... <a href='https://google.nl'></a>"]
let randomStandardSpeech = ["Can I help you with something?", "I am bored", "Always be careful with your personal data", "Lets surf on the internet", "What are you looking at?", "You wanna go spy on some people?"]
let passwordInputs = document.querySelectorAll("input[type='password']");




console.log('test');


let speechbubble = document.createElement('div');
speechbubble.className = "assistant-speechbubble";
assistantOverlay.appendChild(speechbubble);

let speech = new p5.Speech();
// speech.listVoices()

setInterval( function() {
  if (document.hasFocus()) {
    outputSpeechbubble(randomStandardSpeech[randomStandardSpeech.length * Math.random() | 0])
  }
  
}, 20000)


console.log(chrome.runtime)
function outputSpeechbubble(text) {
  // console.log(speech.listVoices())
  speech.setVoice("Daniel")
  setTimeout(function() {
    speechbubble.style.display = "block";
    speechbubble.innerHTML = text;
    text =  text.replace(/<[^>]*>?/gm, '');

    speech.speak(text);

  }, 800)

  setTimeout(function() {
    speechbubble.style.display = "none";

  }, 3000)
}


//popup

let popupElement = document.createElement("div");
let popupElementContent = document.createElement("div");
let popupElementClose = document.createElement("div");
popupElement.classList.add('eye-assistant-popup');
// popupElement.classList.add('showpopup');
popupElementClose.classList.add('eye-assistant-popup-close');
popupElementContent.classList.add('eye-assistant-popup-content')

assistantOverlay.appendChild(popupElement);
popupElement.appendChild(popupElementClose);
popupElement.appendChild(popupElementContent);

popupElementClose.innerHTML = 'X';



popupElementClose.addEventListener("click", () => {
  console.log('ja');
  popupElement.classList.remove("showpopup");
})  

let iframeCam = document.createElement("iframe");
iframeCam.src = "https://www.earthcam.com/usa/newyork/midtown/skyline/?cam=midtown4k";
iframeCam.classList.add("eye-iframe-cam");
popupElementContent.appendChild( iframeCam);





// about this project content
let aboutThisProjectContent = "";
let pagePath = chrome.runtime.getURL("/page.html")
console.log(pagePath);
fetch(pagePath)
  .then(data => data.text())
  .then(html =>  {
    // console.log(html)
    popupElementContent.innerHTML = html;

    popupContentLoaded();
  });

// console.log('einde')


let securityFeatures = {};

let myStorage = window.localStorage;
let storageFeatures;
let featureTogglers
// facebook like click
function popupContentLoaded() {
  // localStorage.clear();
  console.log(localStorage.securityFeatures);


  console.dir(myStorage);

  featureTogglers = document.querySelectorAll(".feature-toggle");
  featureTogglers.forEach(featureToggler => {
    let featureKey = featureToggler.dataset.feature;
    console.log("feature key" + featureKey)
    console.log(storageFeatures);
    storageFeatures = localStorage.getItem("securityFeatures");
    storageFeatures = JSON.parse(storageFeatures);
    if (storageFeatures == undefined) {
      let tempFeatures = {};
       tempFeatures = JSON.stringify(tempFeatures);
      localStorage.setItem("securityFeatures",tempFeatures);
      storageFeatures = localStorage.getItem("securityFeatures");
      storageFeatures = JSON.parse(storageFeatures);
      securityFeatures[featureKey] = false;
      tempFeatures = JSON.stringify(securityFeatures);
      localStorage.setItem("securityFeatures",tempFeatures);
    } 
    else if (storageFeatures[featureKey] == undefined) {
      securityFeatures[featureKey] = false;
      let tempFeatures = JSON.stringify(securityFeatures);
      localStorage.setItem("securityFeatures",tempFeatures);
    }
    

    featureToggler.addEventListener("click", () => {
      // let disabledtext = 
    //  console.log(featureToggler.children);
      if (featureToggler.classList.contains("disabled")) {
        featureToggler.classList.remove("disabled")
        featureToggler.classList.add("enabled")
        featureToggler.children[0].classList.remove("show");
        featureToggler.children[1].classList.add("show");
        securityFeatures[featureKey] = true;
        let tempFeatures = JSON.stringify(securityFeatures);
        console.log("temp Features: " + tempFeatures);
        localStorage.setItem("securityFeatures", tempFeatures);

      }
    
      else if (featureToggler.classList.contains("enabled")) {
        featureToggler.classList.remove("enabled")
        featureToggler.classList.add("disabled")
        featureToggler.children[1].classList.remove("show");
        featureToggler.children[0].classList.add("show");
        securityFeatures[featureKey] = false;
        let tempFeatures = JSON.stringify(securityFeatures);
        console.log("temp Features: " + tempFeatures);
        localStorage.setItem("securityFeatures",tempFeatures);

      }
      
      if ( featureKey == "displayCookies") {
          console.log(document.cookie);
          console.log(window.sessionStorage);
      }

    })
    
  })

  // console.log( storageFeatures)
  loadLocalStorage();
}

function loadLocalStorage() {
  console.log(localStorage);
  storageFeatures = localStorage.getItem("securityFeatures");
  storageFeatures = JSON.parse(storageFeatures);
  securityFeatures = storageFeatures;
  featureTogglers.forEach(featureToggler => {
    let feature = featureToggler.dataset.feature;
    console.log(securityFeatures);
    // for each feature 
    // localStorage
    if (storageFeatures[feature] == true) {
      featureToggler.classList.remove("disabled")
      featureToggler.classList.add("enabled")
      featureToggler.children[0].classList.remove("show");
      featureToggler.children[1].classList.add("show");

    }

    if (storageFeatures[feature] == false) {
      featureToggler.classList.remove("enabled")
      featureToggler.classList.add("disabled")
      featureToggler.children[1].classList.remove("show");
      featureToggler.children[0].classList.add("show");


    }
  })
  localStorage.setItem("securityFeatures",JSON.stringify(securityFeatures));
  // features on scroll
  document.addEventListener("scroll", facebookLike);
  document.addEventListener("mousemove", youtubeLike);
}


// let fbAutoLike = false;


function facebookLike() {
  let likeButtons = document.querySelectorAll("div[aria-label=Leuk]");
   
  if (Object.keys(securityFeatures) !== 0) {
    if (securityFeatures.fbAutoLiker) {
      likeButtons.forEach(likeButton => {
        likeButton.click();
       })
    }
  }
}

function youtubeLike() {
  let likeButton = document.querySelectorAll('.top-level-buttons #button[aria-pressed="false"]')
  if (Object.keys(securityFeatures) !== 0) {
    console.dir(likeButton)
    if (securityFeatures.ytAutoLiker) {
      console.dir(likeButton[0].ariaPressed)
      let ranIndex = Math.round(Math.random(0,1));
      console.log(ranIndex);
      if (likeButton[0].ariaPressed == "false" && likeButton[1].ariaPressed == "false") {
        likeButton[ranIndex].click();
      }
    }
  }
}

