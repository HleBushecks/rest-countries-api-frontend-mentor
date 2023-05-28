import { useCallback, useRef } from "react"

interface ICallback {
  (...args: unknown[]): void
}

export const useDebounce = (callback: ICallback, delay: number) => {
  const timer = useRef<number>(0)

  const debouncedCallback = useCallback((...args: unknown[]) => {
    if (timer.current) {
      clearTimeout(timer.current)
    }
    timer.current = setTimeout(() => {
      callback(...args)
    }, delay)
  }, [callback, delay])

  return debouncedCallback
}