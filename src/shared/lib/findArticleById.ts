import type { MockTextData } from '../types/textData'

export function findArticleById(data: MockTextData, id: number | null): MockTextData | undefined {
  if (!id) return

  let value

  if (data.id === id) value = data

  if (Array.isArray(data.content))
    for (const node of data.content) {
      const element = findArticleById(node, id)
      if (element) {
        value = element
        break
      }
    }

  if (!value) return

  if (Array.isArray(value.content))
    return {
      ...value,
      content: value.content.map((el: MockTextData) => `— ${el.title}`).join('</br>'),
    }
  else return value
}
