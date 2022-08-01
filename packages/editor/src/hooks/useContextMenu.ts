/**
 * 自定义right menu
 * @param {EventTarget} context-禁用右键的dom对象
 * @param {String} targetEle-右键目标对象
 * reference: https://developer.mozilla.org/zh-CN/docs/Web/API/Element/contextmenu_event
 */
export function useContextMenu(
  context: HTMLElement,
  targetEle: string
): () => void {
  const scope = document.querySelector('body')
  const targetRightMenuContext = document.getElementById(targetEle)

  const normalizePosition = (mouseX: number, mouseY: number) => {
    if (scope && targetRightMenuContext) {
      let { left: scopeOffsetX, top: scopeOffsetY } =
        scope.getBoundingClientRect()

      scopeOffsetX = scopeOffsetX < 0 ? 0 : scopeOffsetX
      scopeOffsetY = scopeOffsetY < 0 ? 0 : scopeOffsetY

      const scopeX = mouseX - scopeOffsetX
      const scopeY = mouseY - scopeOffsetY

      // 限制元素移出屏幕外
      const outOfBoundsOnX =
        scopeX + targetRightMenuContext.clientWidth > scope.clientWidth

      const outOfBoundsOnY =
        scopeY + targetRightMenuContext.clientHeight > scope.clientHeight

      let normalizedX = mouseX
      let normalizedY = mouseY

      // x坐标位置
      if (outOfBoundsOnX) {
        normalizedX =
          scopeOffsetX + scope.clientWidth - targetRightMenuContext.clientWidth
      }

      // y坐标位置
      if (outOfBoundsOnY) {
        normalizedY =
          scopeOffsetY +
          scope.clientHeight -
          targetRightMenuContext.clientHeight
      }

      return {
        normalizedX,
        normalizedY
      }
    }
    return {
      normalizedX: 0,
      normalizedY: 0
    }
  }

  const handleContextMenu = (e: MouseEvent) => {
    // 禁用默认右键
    e.preventDefault()

    const { clientX: mouseX, clientY: mouseY } = e
    const { normalizedX, normalizedY } = normalizePosition(mouseX, mouseY)

    if (targetRightMenuContext) {
      targetRightMenuContext.style.top = `${normalizedY}px`
      targetRightMenuContext.style.left = `${normalizedX}px`
      targetRightMenuContext.style.visibility = 'visible'
    }
  }

  context.addEventListener('contextmenu', handleContextMenu)

  // 点击目标区域外面关闭right menu
  scope?.addEventListener('click', (e) => {
    if (e.currentTarget !== targetRightMenuContext && targetRightMenuContext) {
      targetRightMenuContext.style.visibility = 'hidden'
    }
  })

  return () => {
    context.removeEventListener('contextmenu', handleContextMenu)
  }
}
