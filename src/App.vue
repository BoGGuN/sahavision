<script setup lang="ts">
import { useModal } from '@/shared/composables/useModal'
import ArticleModal from '@/components/ArticleModal.vue'
import { ref, computed } from 'vue'
import { useMockStore } from '@/stores/mock-store'
import { findArticleById } from './shared/lib/findArticleById'

const mockStore = useMockStore()
const selectedArticleId = ref<number | null>(null)
const selectedArticle = computed(() => findArticleById(mockStore.mockData, selectedArticleId.value))

const { open: handleOpenModal, close, patchParams, isModalOpened } = useModal({
   component: ArticleModal,
   attrs: {
      mockData: mockStore.mockData,
      selectedArticleId: selectedArticleId.value,
      onClose: () => close(),
      onConfirmArticle: (articleId: number | null) => {
         selectedArticleId.value = articleId
         close()
         patchParams({
            selectedArticleId: selectedArticleId.value,
         })
      }
   },
})
</script>

<template>
   <div class="w-screen h-screen flex justify-between p-20">
      <div class="max-w-1/4 flex flex-col gap-20 h-min">
         <button
            class="border-solid border-2 border-black p-2 rounded-lg active:bg-slate-200 hover:bg-slate-100 transition-colors"
            @click="handleOpenModal">
            Открыть
         </button>
         <span class="underline">Открыто ли модальное окно - {{ isModalOpened ? 'да' : 'нет' }}</span>
      </div>
      <div v-if="selectedArticleId && selectedArticle"
         class="w-1/2 flex flex-col gap-[18px] bg-amber-300 p-10 rounded-[24px]">
         <span class="font-bold mb-8 text-[18px]">Последний выбранный абзац</span>
         <span class="font-bold pl-8 text-[16px]">{{ selectedArticle.title }}</span>
         <p class="whitespace-pre-wrap font-medium pl-16" v-html="selectedArticle.content"></p>
      </div>
   </div>
</template>
