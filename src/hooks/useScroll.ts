import { RefObject, useEffect, useRef } from "react"


export const useScroll = (
  targetRef: RefObject<Element>,
  callback: () => void
) => {
  const observer = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0
    }
    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        callback()
      }
    }, options)

    if (targetRef.current) {
      observer.current.observe(targetRef.current)
    }

    return function () {
      if (observer.current && targetRef.current) {
        observer.current.unobserve(targetRef.current)
      }
    }
  }, [callback, targetRef])
}
