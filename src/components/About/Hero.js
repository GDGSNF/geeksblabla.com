import React from "react"
import { Link } from "gatsby"

import PlayIcon from "assets/play.svg"
import AboutImage from "components/Images/AboutImage"

export default () => {
  return (
    <div className="container about-hero">
      <div className="description">
        <h1 className="b"> We Believe</h1>
        <h1>Community Matters </h1>
        <p>
          Geeksblabla is a webinar where we meet to share and learn about
          awesome topics from the best.
        </p>
        <p>
          We Invite knowledgable and interesting people who are not always known
          to the public so that they share with us their experience.
        </p>
        <p>
          We talk about the hottest new topics and explain it to the community
          in a way that is simple and approachable.
        </p>
        <div className="actions">
          <a to="/blablas" className="button left" target="_blank">
            Join The Group
          </a>
        </div>
      </div>
      <AboutImage />
    </div>
  )
}
