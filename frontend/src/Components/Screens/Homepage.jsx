import React from 'react'
import { NavLink } from 'react-router-dom'
import ImageCod from '../../assets/JavaScript frameworks-rafiki.svg'
import HtmlCod from '../../assets/Website Creator-amico.svg'
import Pycod from '../../assets/Man reading-pana.svg'
import SpeechCod from '../../assets/Speech to text-bro.svg'
import CodJava from '../../assets/Coding-bro.svg'
import ImagCod from '../../assets/Writing on the wall-rafiki.svg'

function Homepage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="home-hero__title">Build, Run and Learn Faster</h1>
          <p className="home-hero__subtitle">Code By Bit is a lightweight web IDE for JavaScript, Python and Dart with real-time tools that help you iterate quickly.</p>
          <div className="home-hero__actions">
            <NavLink to="/editor/javascript" className="btn">Open JavaScript Editor</NavLink>
            <NavLink to="/register" className="btn btn--ghost">Create Account</NavLink>
          </div>
        </div>
        <div className="home-hero__backdrop" />
      </section>

      <section className="home-features">
        <h2 className="home-section__title">Editors and Tools</h2>
        <p className="home-section__subtitle">Everything you need to prototype ideas and practice coding, right in your browser.</p>
        <div className="home-grid">
          <article className="home-card">
            <img src={ImageCod} alt="JavaScript" className="home-card__img"/>
            <h3 className="home-card__title">JavaScript Editor</h3>
            <p className="home-card__desc">Write and run JS instantly with an output console. Great for quick tests and learning.</p>
            <NavLink className="home-card__link" to="/editor/javascript">Try JavaScript →</NavLink>
          </article>

          <article className="home-card">
            <img src={Pycod} alt="Python" className="home-card__img"/>
            <h3 className="home-card__title">Python Editor</h3>
            <p className="home-card__desc">Server-executed Python with friendly error messages to help you debug faster.</p>
            <NavLink className="home-card__link" to="/editor/python">Run Python →</NavLink>
          </article>

          <article className="home-card">
            <img src={CodJava} alt="Dart" className="home-card__img"/>
            <h3 className="home-card__title">Dart Editor</h3>
            <p className="home-card__desc">Experiment with Dart syntax and output directly in the browser.</p>
            <NavLink className="home-card__link" to="/editor/java">Run Dart →</NavLink>
          </article>

          <article className="home-card">
            <img src={HtmlCod} alt="HTML" className="home-card__img"/>
            <h3 className="home-card__title">Live Website Editor</h3>
            <p className="home-card__desc">Edit HTML/CSS/JS and see results instantly without manual refresh.</p>
            <NavLink className="home-card__link" to="/editor/html">Open Web Editor →</NavLink>
          </article>

          <article className="home-card">
            <img src={ImagCod} alt="Image to Text" className="home-card__img"/>
            <h3 className="home-card__title">Image to Text</h3>
            <p className="home-card__desc">Extract readable text from images using in-browser OCR (Tesseract.js).</p>
            <NavLink className="home-card__link" to="/editor/image2text">Convert Image →</NavLink>
          </article>

          <article className="home-card">
            <img src={SpeechCod} alt="Voice to Text" className="home-card__img"/>
            <h3 className="home-card__title">Voice to Text</h3>
            <p className="home-card__desc">Transcribe your speech to text, then copy it to any editor.</p>
            <NavLink className="home-card__link" to="/editor/voice2text">Start Speaking →</NavLink>
          </article>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta__content">
          <h2>Ready to Code Faster?</h2>
          <p>Create a free account to save your progress and get started with the editors.</p>
          <div className="home-cta__actions">
            <NavLink to="/register" className="btn">Get Started</NavLink>
            <NavLink to="/login" className="btn btn--ghost">Sign In</NavLink>
          </div>
        </div>
      </section>

      <section className="home-highlights">
        <div className="home-highlights__grid">
          <div className="home-highlight">
            <div className="home-highlight__title">Fast Iteration</div>
            <div className="home-highlight__desc">Run code instantly in the browser or server with one click.</div>
          </div>
          <div className="home-highlight">
            <div className="home-highlight__title">Clean UI</div>
            <div className="home-highlight__desc">Minimal, modern design focused on reading and writing code.</div>
          </div>
          <div className="home-highlight">
            <div className="home-highlight__title">Beginner Friendly</div>
            <div className="home-highlight__desc">Helpful messages and simple flows to learn quickly.</div>
          </div>
          <div className="home-highlight">
            <div className="home-highlight__title">Free to Use</div>
            <div className="home-highlight__desc">No cost for core features. Start practicing today.</div>
          </div>
        </div>
      </section>

      <section className="home-steps">
        <h2 className="home-section__title">How it works</h2>
        <p className="home-section__subtitle">Three simple steps to get started with Code By Bit.</p>
        <div className="home-steps__grid">
          <div className="home-step">
            <div className="home-step__title">1. Pick a tool</div>
            <div className="home-step__desc">Choose an editor or utility: JavaScript, Python, Dart, Live Web, or OCR/Voice.</div>
          </div>
          <div className="home-step">
            <div className="home-step__title">2. Write your code</div>
            <div className="home-step__desc">Use the editor to create, copy, or paste code. Adjust as you go.</div>
          </div>
          <div className="home-step">
            <div className="home-step__title">3. Run and iterate</div>
            <div className="home-step__desc">Run your program and read results instantly. Fix, refine, and learn.</div>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div className="home-stats__grid">
          <div className="home-stat">
            <div className="home-stat__num">3</div>
            <div className="home-stat__label">Programming Languages</div>
          </div>
          <div className="home-stat">
            <div className="home-stat__num">2</div>
            <div className="home-stat__label">Productivity Tools</div>
          </div>
          <div className="home-stat">
            <div className="home-stat__num">1s</div>
            <div className="home-stat__label">Average Run Start</div>
          </div>
          <div className="home-stat">
            <div className="home-stat__num">∞</div>
            <div className="home-stat__label">Ideas to Explore</div>
          </div>
        </div>
      </section>

      <section className="home-faq">
        <h2 className="home-section__title">Frequently Asked Questions</h2>
        <div className="home-faq__grid">
          <div className="home-faq__item">
            <div className="home-faq__q">Is Code By Bit free?</div>
            <div className="home-faq__a">Yes. The core editors and tools are free to use.</div>
          </div>
          <div className="home-faq__item">
            <div className="home-faq__q">Do I need to install anything?</div>
            <div className="home-faq__a">No. Everything runs in your browser, with server support for Python and Dart.</div>
          </div>
          <div className="home-faq__item">
            <div className="home-faq__q">Can I save my work?</div>
            <div className="home-faq__a">You can download files locally; account-based saving can be added later.</div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Homepage