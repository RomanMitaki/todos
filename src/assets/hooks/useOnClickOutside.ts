import { useEffect, type RefObject } from 'react'

type Handler = () => void

function useOnClickOutside<T extends HTMLElement = HTMLElement> (ref: RefObject<T>, handler: Handler): void {
  useEffect(
    () => {
      /* eslint-disable  @typescript-eslint/no-explicit-any */
      const listener = (event: any) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-member-access
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler()
      }
      const keyHandler = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
          handler()
        }
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      document.addEventListener('keydown', keyHandler)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
        document.removeEventListener('keydown', keyHandler)
      }
    },

    [ref, handler]
  )
}

export default useOnClickOutside
