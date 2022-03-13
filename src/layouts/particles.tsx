import React, { ReactElement } from 'react';
import Particles from 'react-particles-js';

interface Props {
  children?: ReactElement;
}

export default function MyParticles({ children }: Props): ReactElement {
  return (
    <Particles
      id="ts-particles"
      style={{ zIndex: -1, position: 'absolute', width: '100%)', height: '120vh' }}
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: false,
            },
          },
          size: {
            value: 1,
            random: true,
            anim: {
              speed: 5,
              size_min: 0.3,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            random: true,
            speed: 1,
            // eslint-disable-next-line
            direction: 'top',
            // eslint-disable-next-line
            out_mode: 'out',
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: true,
              mode: 'repulse',
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              size: 0,
              opacity: 0,
            },
            repulse: {
              distance: 400,
              duration: 4,
            },
          },
        },
      }}
    >
      {children}
    </Particles>
  );
}
