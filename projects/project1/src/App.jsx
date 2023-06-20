import React from 'react'
import ReactDOM from 'react-dom/client'
import { TwitterFollowCard } from './TwitterFollowCard.jsx';
import "./App.css"

export function App(){
    const formatUsername=(username)=>`@${username}`;
    return(
    <>
        <TwitterFollowCard formatUsername={formatUsername} username="alejoevilches">
          Alejo Vilches
        </TwitterFollowCard>
        <TwitterFollowCard formatUsername={formatUsername} >
          Gonzalo Pozzo
        </TwitterFollowCard>
        <TwitterFollowCard formatUsername={formatUsername}  username="midudev">
          Miguel Angel Duran
        </TwitterFollowCard>
      </>
    )
}