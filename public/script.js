// hey andy excuse the mess


// client-side js, loaded by index.html
// run by the browser each time the page is loaded

console.log("hello world :o");

const andyThoughts = [
  'If I were a pilot, they would call me Falcon',
  'If I had a baby that didn’t mind the gap, I would just say "No, baby. No."',
  'I think next, I’ll be a surgeon.',
  'Did you hear about the tiniest baby in the world? They lost him. Almost immediately.',
  'I’m an advanced web user.',
  'I really like writing JavaScript. Its just so nice',
  'Im gonna write some Go this weekend and get some nice coffee :)',
  'Might watch some WoW speedruns later',
  'I actually like it when it rains',
  'I never realised how hard it was to put up wallpaper',
  'I might start posting really mundane things to overheard-at-tails and just pretend that I don’t understand the channel',
  'Madeline is against cow milk at home, so i am enjoying the heck out of it here',
  'I really like some of our views',
  'did you ever watch thereportoftheweek?',
  'going to celebrate this feature going live with a coffee and the brownie that madeline bought me',
  'Haha thinkdowsxp. Thats funny',
  'JavaScript is so cool. It makes me so happy to write it and reason about it',
  'gently caresses laptop',
  'picks up a leaf from his desk plant and ponders on how God made plants and what is our purpose in life',
  'We do not deserve this round'
];

const andyImages = [
  "https://i.imgflip.com/2ayq9c.jpg",
  "https://www.kindpng.com/picc/m/106-1065472_harold-thumbs-up-png-download-thumbs-up-meme.png",
  "https://i.imgflip.com/22zhdm.jpg",
  "https://cdn.ebaumsworld.com/mediaFiles/picture/718392/84890888.png",
  "https://www.memesmonkey.com/images/memesmonkey/c8/c8a465985f0bc7f29472502e6072d599.jpeg"
];

const currentImage = document.getElementById("andyimage");
const rerollAndyButton = document.getElementById("andybutton");
const andyQuote = document.getElementById("andyquote");
const andyAudioContainer = document.getElementById("andyaudiocontainer");
const dogsongplayer = document.getElementById("dogsongplayer");

let ttsBuffer;

rerollAndyButton.addEventListener("click", event => {
  rollAndyImage();
});

function rollAndyImage() {
    var quote = andyThoughts[(andyThoughts.length * Math.random()) | 0];
    fetch(`https://ijvbf58yui.execute-api.eu-west-1.amazonaws.com/default/andythoughts?quote=${quote}`).then(response => response.json()).then(data => andyThings(data, quote));
    dogsongplayer.play();
}

function andyThings(data, quote) {
    currentImage.src = data.image;
    andyQuote.innerHTML = quote;
    andyAudioContainer.innerHTML = `<audio controls autoplay>
    <source id="andyaudio" src="${data.audio}" type="audio/mpeg">
  </audio>`
}
