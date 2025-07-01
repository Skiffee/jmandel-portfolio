import { useEffect, useState } from 'react';

const words = ['networking.', 'embedded systems.', 'cybersecurity.', 'AI.', 'kubernetes.'];

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];

    const typeSpeed = deleting ? 50 : 100;
    const delay = deleting ? 800 : 2000;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentWord.length) {
        setDisplayedText(currentWord.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setDisplayedText(currentWord.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === currentWord.length) {
        setTimeout(() => setDeleting(true), delay);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, currentWordIndex]);

  return (
    <section className="hero">
      <h1>Justin Tayza Mandel</h1>
      <p className="subtitle animated-line">
        Student in Engineering and IT, learning{' '}
        <span className="typewriter highlight">
          {displayedText}
          <span className="cursor">|</span>
        </span>
      </p>
      <p>
        I’m a curious and dedicated problem solver with a passion for technology,
        innovation, and esports. This portfolio showcases my projects and experiences
        as I grow through engineering and my hobbies.
      </p>
    </section>
  );
}
