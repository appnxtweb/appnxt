import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import splitTextIntoSpans from '../../../util/split';

const Content = ({ heading, content }) => {
  const headingRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.fromTo(headingRef.current, {
      opacity: 0,
      x: -50
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

    gsap.registerPlugin(ScrollTrigger);

    // Heading animation
    gsap.fromTo(contentRef.current, {
      opacity: 0,
      x: 150
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top bottom-=100",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });

  }, [content]);

  return (
    <>
      <div className="container pt-cs">
        <div className="row gap-10">
          <div className="col-md-4">
            <h4 ref={headingRef} className='font-md fw-600'>{heading}</h4>
          </div>
          <div className="col-md-8">
            <h4 ref={contentRef} className="font-md fs-20">
              {content}
            </h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content