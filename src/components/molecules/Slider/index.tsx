/* eslint-disable @next/next/no-img-element */
'use client';
import * as React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import styles from './index.module.scss';
import { ISliderProps } from './types';
const { slider__wrapper, slider__img } = styles;

export const Slider = ({ images }: ISliderProps) => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );

  return (
    <div className={slider__wrapper}>
      <div ref={sliderRef} className="keen-slider">
        {images.map((image, index) => {
          return (
            <div className={`keen-slider__slide number-slide${index}`} key={crypto.randomUUID()}>
              <img src={image} alt="" className={slider__img} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
