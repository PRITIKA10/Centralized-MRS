const synth=window.SpeechSynthesis;

const answer=prompt('Enter the text: ');

const utterance=new SpeechSynthesisUtterance(answer);

synth.speak(utterance);