import { useEffect, useRef } from 'react';
import * as Tone from 'tone';

export default function useSounds() {
  const mySampler = useRef(null)
  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: {
        "C4": "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    Tone.loaded().then(() => {
      mySampler.current = sampler
    })
  }, []);

  const toggleNote = (note) => {
    return mySampler.current.triggerAttackRelease([note], 2)
  }

  const keyDown = ({ key }) => {
    let strArray = `&é"'(-è_`
    let keySet = strArray.indexOf(key)
    let noteList = [
      "C4","D4","E4","F4","G4","A4","B4","C5"
    ]
    if (keySet >= 0) {
      toggleNote(noteList[keySet], keySet)
    }
    
  }

  useEffect(() => {
    window.addEventListener('keydown', keyDown)

    return () => {
      window.removeEventListener('keydown', keyDown)
    }
  }, [])


  const btnsList = [
    {
      soundPlay: () => toggleNote("C4"),
      isPlaying: false
    }, {
      soundPlay: () => toggleNote("D4"),
      isPlaying: false
    }, {
      soundPlay: () => toggleNote("E4"),
      isPlaying: false
    }, {
      soundPlay: () => toggleNote("F4"),
      isPlaying: false
    }, {
      soundPlay: () => toggleNote("G4"),
      isPlaying: false
    }, {
      soundPlay: () => toggleNote("A4"),
      isPlaying: false
    }, {
      soundPlay: () => toggleNote("B4"),
      isPlaying: false
    }, {
      soundPlay: () => toggleNote("C5"),
      isPlaying: false
    }
  ]

  

  return { btnsList };
}