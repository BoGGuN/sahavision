<script setup lang='ts'>
import { defineEmits, defineProps, computed, ref } from 'vue'
import CloseIcon from '@/assets/icons/CloseIcon.vue'
import type { MockTextData } from '@/shared/types/textData'
import ArticleItem from './ArticleItem.vue'

const emit = defineEmits(['close', 'confirmArticle'])
const props = defineProps<{
   mockData: MockTextData
   selectedArticleId: number | null
}>()

const title = computed(() => props.mockData.title)
const articleIdToConfirm = ref<number | null>(null)
const handleSelectArticle = (articleId: number) => articleIdToConfirm.value = articleId

const handleConfirm = (articleId: number | null) => emit('confirmArticle', articleId)
const сonfirmLabel = computed(() => articleIdToConfirm.value ? 'Применить' : 'Очистить')
</script>

<template>
   <div
      class="bg-white rounded-[16px] w-[800px] flex flex-col justify-between gap-8 h-[700px] p-5 pr-2 border-solid border-black border-[2px]">
      <div class="flex flex-col gap-8">
         <div class="w-full flex justify-between items-center pr-3">
            <span class="text-[22px] font-semibold">{{ title }}</span>

            <button class="active:bg-slate-200 hover:bg-slate-100 p-2 rounded-[8px]" @click="emit('close')">
               <CloseIcon />
            </button>
         </div>

         <div class="w-full max-h-[530px] overflow-y-auto pr-10">
            <ArticleItem v-bind="props" @select-topic="handleSelectArticle" />
         </div>
      </div>

      <div class="w-full pr-3 flex justify-end gap-20">
         <span v-if="articleIdToConfirm">
            Выбран элемент с id: {{ articleIdToConfirm }}
         </span>

         <div class="flex gap-10">
            <button
               class="border-solid border-[#6d6d6d7c] border-2 rounded-[8px] px-4 bg-[#d1d1d18e] hover:bg-[#b4b4b488] active:bg-[#8686868c]"
               @click="emit('close')">
               Закрыть
            </button>

            <button
               class="border-solid border-[#0099ff73] border-2 rounded-[8px] px-4 bg-[#79b5ee81] hover:bg-[#4caeff86] active:bg-[#4c8bff86]"
               @click="handleConfirm(articleIdToConfirm)">
               {{ сonfirmLabel }}
            </button>
         </div>
      </div>
   </div>
</template>