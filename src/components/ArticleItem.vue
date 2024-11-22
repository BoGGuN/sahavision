<script setup lang='ts'>
import { defineProps, defineEmits, computed, ref } from 'vue'
import type { MockTextData } from '@/shared/types/textData.ts'
import ArticleItem from './ArticleItem.vue'

const emit = defineEmits(['selectTopic'])
const props = defineProps<{
   mockData: MockTextData,
   selectedArticleId: number | null
}>()

const isFinalNode = computed(() => typeof props.mockData.content === 'string')

const isContentVisible = ref(false)
const toggleContentVisibility = () => {
   isContentVisible.value = !isContentVisible.value
}
const handleSelectTopic = (topicId: number) => {
   emit('selectTopic', topicId)
}
</script>

<template>
   <div class="pl-4 flex flex-col gap-1">
      <template v-if="!isFinalNode">
         <div class="flex hover:bg-[#2998ff2f] group">
            <div class="flex w-full" @click="toggleContentVisibility">

               <p class="font-medium pl-2 cursor-pointer"
                  :class="{ 'bg-amber-400': selectedArticleId === props.mockData.id }">
                  {{ props.mockData.title }}
               </p>
               <div class="flex-grow border-dotted border-b-[2px] border-black mb-1"></div>
            </div>

            <button
               class="hidden px-2 cursor-pointer bg-[#2998ff2f] rounded-full hover:bg-[#2998ff4d] active:bg-[#2998ff79] group-hover:block"
               @click="handleSelectTopic(props.mockData.id)">выбрать</button>
         </div>

         <ArticleItem v-show="isContentVisible" v-for="article in (props.mockData.content as MockTextData[])"
            :key="article.id" v-bind="{ mockData: { ...article }, selectedArticleId: props.selectedArticleId }"
            @select-topic="handleSelectTopic" />
      </template>

      <div v-else :class="{ 'bg-amber-400': selectedArticleId === props.mockData.id }">
         <div class="flex hover:bg-[#2998ff2f] pl-2 group">
            <p class="w-full font-medium pl-2 cursor-pointer"
               :class="{ 'bg-amber-400': selectedArticleId === props.mockData.id }" @click="toggleContentVisibility">
               {{ props.mockData.title }}
            </p>

            <button
               class="hidden px-2 cursor-pointer bg-[#2998ff2f] rounded-full hover:bg-[#2998ff4d] active:bg-[#2998ff79] group-hover:block"
               @click="handleSelectTopic(props.mockData.id)">выбрать</button>
         </div>
         <p v-show="isContentVisible" class="pl-10 text-wrap hover:bg-[#2998ff2f]"
            @click="handleSelectTopic(props.mockData.id)">
            {{ props.mockData.content }}
         </p>
      </div>
   </div>
</template>