import type { Component } from 'vue'

export interface ModalParams {
  component: Component
  attrs: Record<string, unknown>
}
