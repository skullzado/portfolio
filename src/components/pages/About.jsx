import { useState } from 'react';
import { accordionData, contactEls } from '../../data/data';
import { poorId } from '../../utils/utils';
import './About.css';

export const About = () => {
  document.title = 'skullzado - Contact';
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div className="about">
      <div className="about-main">
        <div className="about__me">
          <h2 className="about__name">Paul Calzado</h2>
          <p className="about__description">Frontend Web Developer</p>
        </div>
        <div className="about__faq-container">
          {accordionData.map(({ heading, content }, index) => (
            <div
              key={heading}
              className="about__faq"
              onClick={() => toggle(index)}
            >
              <div className="about__faq-header">
                <p className="about__faq-heading">{heading} </p>
                {selected === index ? (
                  <img
                    className="about__faq--selected"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA3UlEQVRIS+2TywnCQBRFE7AHBRW/TYgo1mED4tZG3LlwbyEiYhMRFT9oDy48FyYQNJlMFgEXM3BIMnlz73s3JAxKXmHJ+oE3yE3YR/T/ES1ocQOvjFar7E9hmTWK7SPPObSCI4zh8SVS53kLPZjBOs3EZlDjwA76cIEh3I2IxPfQgghG8CxqoHqZHKCdMNF+LH7mfpAlrkKX/6BhouhyPUEFmqDoJnBL6zzeczFQrUwUlybRUueKxSruOkHcjEwU19tVvKiB6jvG4GqLJfnONSJXvZ86b5AbnY8oN6IPTiYfGTwiuUYAAAAASUVORK5CYII="
                    alt="Chevron Down"
                  />
                ) : (
                  <img
                    className="about__faq--selected"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAx0lEQVRIS2NkoDFgpLH5DKMWEAzhkRdE8tAweUgwbKAKSAkiGaCew1B9tkD6CTGWEGsBzHAFqKEPgDRRlhBjAcjwQ0CsCMQgg0EAZNE9ILYn5BNCFiC7HBTu1lALjgJpUHyALLQE4he4ggufBdgMfwo1SBpIwyy5Aw0urJbgsyATqHEaEIMMcABimOEwx4IsOQjEykCcAcQzsfmCUBAVAzUtA+LnOIIAZEkoEE8gJ4hw6SFJnJAPSDKMnCAatWC0RiOcBmieTAF4cR0Zi+GIGAAAAABJRU5ErkJggg=="
                    alt="Chevron Up"
                  />
                )}
              </div>
              <div
                className={
                  selected === index
                    ? 'about__faq-body show'
                    : 'about__faq-body'
                }
              >
                {content.map((c) => (
                  <p key={heading + poorId()} className="about__faq-content">
                    {c}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="about__links">
        {contactEls.map(({ name, route, icon }) => (
          <a
            key={name}
            className="about__link"
            href={route}
            target="_blank"
            rel="noreferrer"
          >
            <span className="about__link-icon">{icon}</span>
            <span className="about__link-name">{name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
