import { ref, h, render, onMounted, onUnmounted } from 'vue'
import type { ModalParams } from '../types/modal'

export function useModal(modalParams: ModalParams) {
  const modalKey = Symbol()
  let modalLifeTimeKey: string | null = null

  const component = modalParams.component
  const params = ref<ModalParams['attrs']>(modalParams.attrs)

  const isModalOpened = ref(false)

  const open = () => {
    const container = document.getElementById('modal-container') as HTMLDivElement | undefined

    if (isModalOpened.value || !container) return

    isModalOpened.value = true
    const modal = h(component, { key: modalKey, ...params.value })

    modalLifeTimeKey = Date.now().toString()
    const modalWrapper = document.createElement('div')
    modalWrapper.setAttribute('data-modal-key', modalLifeTimeKey)

    render(modal, modalWrapper)
    setModalContainerClass(container, isModalOpened.value)
    container.appendChild(modalWrapper)
  }

  const close = () => {
    const container = document.getElementById('modal-container') as HTMLDivElement | undefined

    if (!isModalOpened.value || !container || !modalLifeTimeKey) return

    const modalElement = container.querySelector(`[data-modal-key="${modalLifeTimeKey}"]`)
    if (!modalElement) return

    isModalOpened.value = false
    modalLifeTimeKey = null
    setModalContainerClass(container, isModalOpened.value)
    modalElement?.remove()
  }

  function setModalContainerClass(container: HTMLDivElement, flag: boolean) {
    const classList = container.classList
    const childrenAmount = container.childElementCount
    const isModalContainerDisplayed = classList.contains('flex') && !classList.contains('hidden')

    if (flag && !isModalContainerDisplayed) {
      classList.remove('hidden')
      classList.add('flex')
    } else if (!flag && isModalContainerDisplayed && childrenAmount <= 1) {
      classList.remove('flex')
      classList.add('hidden')
    }
  }

  const patchParams = (newParams: Record<string, unknown>) => {
    Object.assign(params.value, newParams)
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && isModalOpened.value) close()
  }

  /* 
  Можно было использовать onClickOutside из vueUse, 
  но по тз библиотеки нельзя использовать
  */
  const handleClick = (event: Event) => {
    const target = event.target as HTMLElement | undefined
    if (target?.id === 'modal-container') close()
  }

  onMounted(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('click', handleClick)
  })

  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeyDown)
    window.removeEventListener('click', handleClick)
  })

  return { open, close, patchParams, params, isModalOpened }
}
