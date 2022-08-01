import { IS_NODE } from '@tiga/shared'

interface VisibilityOptions {
  show?: () => void
  hide?: () => void
}

/**
 * 监听页面的可见性
 * references: https://www.w3.org/TR/page-visibility/
 */
export function useVisibilityChange(options: VisibilityOptions): () => void {
  if (IS_NODE) {
    throw Error('请在浏览器环境使用该API~')
  }

  const { show, hide } = options
  const listeners: any[] = []

  let visibilityState = '',
    visibilityChange = ''
  if (typeof document.visibilityState !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    visibilityState = 'visibilityState'
    visibilityChange = 'visibilitychange'
    // @ts-ignore
  } else if (typeof document.msHidden !== 'undefined') {
    visibilityState = 'msVisibilityState'
    visibilityChange = 'msvisibilitychange'
    // @ts-ignore
  } else if (typeof document.webkitHidden !== 'undefined') {
    visibilityState = 'webkitVisibilityState'
    visibilityChange = 'webkitvisibilitychange'
  }

  const onShown = () => {
    if (show) {
      show()
    }
  }

  const onHidden = () => {
    if (hide) {
      hide()
    }
  }

  const handleVisibilityChange = () => {
    // @ts-ignore
    if (document[visibilityState] === 'visible') {
      onShown()
    } else {
      onHidden()
    }
  }

  const collectListeners = (...args: any[]) => {
    listeners.push(...args)
  }

  // 支持visibilityChange事件
  if (visibilityChange) {
    // 事件监听
    document.addEventListener(visibilityChange, handleVisibilityChange)
    collectListeners(() => {
      document.removeEventListener(visibilityChange, handleVisibilityChange)
    })
  } else {
    window.addEventListener('blur', onHidden)
    window.addEventListener('focus', onShown)
    collectListeners(
      () => {
        window.removeEventListener('blur', onHidden)
      },
      () => {
        window.removeEventListener('focus', onShown)
      }
    )
  }

  // 支持pageshow事件
  if ('onpageshow' in window && 'onpagehide' in window) {
    window.addEventListener('pageshow', onShown)
    window.addEventListener('pagehide', onHidden)
    collectListeners(
      () => {
        window.removeEventListener('pageshow', onShown)
      },
      () => {
        window.removeEventListener('pagehide', onHidden)
      }
    )
  }

  return () => {
    listeners.forEach((listener) => listener())
  }
}
