import useSounds from 'hooks/useSounds'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Home = () => {
  const { btnsList, toggleNote } = useSounds()

  useEffect(() => {
    
  })

  return (
    <Grid>
      {
        btnsList.map(({soundPlay, isPlaying}, k) => {
          return <Gbutton key={k} onClick={soundPlay} className={isPlaying ? "active" : null}/>
        })
      }
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: auto;
  column-gap: .8em;
  row-gap: .8em;
  padding: .7em;
  @media (min-width: 928px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media (max-width: 604px) {
    grid-template-columns: 1fr 1fr;
  }
  
`

const Gbutton = styled.div`
  /* important */
  width: calc(100% - 2px);
  aspect-ratio: 1 / 1;
  margin: auto;
  position: relative;

  /* design */
  border-radius: 8px;
  background-color: lightgrey;
  overflow: hidden;
  transition: 100ms;
  border: outset 2px white;
  box-shadow: 0 0 4px 2px black;
  &::before {
    transition: 100ms;
    content: "";
    display: block;
    width: 70%;
    height: 70%;
    background-color: grey;
    margin: auto;
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    filter: blur(15px);
  }

  &:hover {
    background-color: hsl(20, 90%, 75%);
    border: outset 2px hsl(20, 90%, 95%);
    &::before {
      background-color: hsl(20, 90%, 65%);
    }
  }
  &:active {
    &::before {
      background-color: hsl(20, 90%, 55%);
    }
  }
`

export default Home