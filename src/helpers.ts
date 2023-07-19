import { SpecialStateT } from './REDUX/special/specialReducerT'

// Helpers for siteMode "special"
export const modifiedClass = (
  cl: string,
  siteMode: SpecialStateT['siteMode']
) =>
  `${cl} ${
    siteMode === 'default' ? cl + '--default' : cl + '--special'
  }` as `${typeof cl} ${typeof cl}${'--default' | '--special'}`
//-------------------------------------------------------------------

// Media queries strings for reusing
export const queries = {
  desktop: '(min-width: 768px) and (min-height: 500px)',
  mobile:
    '(max-width: 767.5px), (max-height: 500px) and (-webkit-min-device-pixel-ratio: 2)',
} as const

// Scroll up functions
export const scrollToTop = () => window.scrollTo(0, 0)
export const scrollToNavigation = () => window.scrollTo(0, 200)

// Delay promise
export const delay = (ms: number) => {
  return new Promise<void>(res => setTimeout(() => res(), ms))
}

// after decorator (invokes function after it is called necessary amount of times)
export function after(times: number, func: (arg0: IArguments) => unknown) {
  return function () {
    if (--times < 1) {
      return func.apply(this, arguments)
    }
  }
}
