<template>
  <div class="w-full overflow-hidden px-2 py-2">
    <AccordionRoot
      class=""
      default-value="item-1"
      type="single"
      :collapsible="true"
    >
      <template
        v-for="item in accordionItems"
        :key="item.value"
      >
        <AccordionItem
          class="mt-10 overflow-hidden first:mt-0 focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] rounded-xl relative"
          :value="item.value"
        >
          <AccordionHeader class="flex bg-Bg flex-col">
            <div
              class="text-center flex flex-col justify-center h-32 bg-[url('/images/project-card-bg.svg')] bg-cover pt-24 pb-24"
            >
              <h3 class="row-start-1 col-start-1 uppercase">
                {{ item.projectTitle }}
              </h3>
              <NuxtImg
                class="row-start-1 col-start-1 w-10 self-center mt-3"
                :src="item.projectIcon"
                sizes="100vw sm:10vw md:0px"
              />
            </div>
            <div class="p-4 bg-Sc flex justify-between">
              <h5>{{ item.title }}</h5>
              <AccordionTrigger
                class="bg-Sc flex flex-1 cursor-default items-center bg-white outline-none group justify-end"
              >
                <span
                  class="bg-St w-10 h-10 rounded-md flex justify-center items-center group-data-[state=open]:bottom-3 group-data-[state=open]:absolute group-data-[state=open]:right-3 group-data-[state=closed]:absolute group-data-[state=closed]:bottom-3 group-data-[state=closed]:right-3"
                >
                  <ArrowRightIcon
                    class="rotate-45 size-8 text-green10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] transition-transform duration-300 group-data-[state=open]:-rotate-45"
                  />
                </span>
              </AccordionTrigger>
            </div>
          </AccordionHeader>
          <AccordionContent
            class="text-mauve11 bg-mauve2 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden"
          >
            <div class="px-5 py-4 bg-Sc text-Tx font-paragraphAc flex flex-col">
              <p>{{ item.content }}</p>
              <div class="flex flex-row mt-5 mb-8">
                <div
                  v-for="image in item.stackImages"
                  :key="image"
                  class="mr-2"
                >
                  <NuxtImg
                    class="w-6 h-6 text-Ac"
                    :src="image"
                    sizes="100vw sm:10vw md:50px"
                  />
                </div>
              </div>
              <a
                :href="item.link"
                class="underline font-semibold text-lg hover:text-Ac w-fit"
                >Link</a
              >
            </div>
          </AccordionContent>
        </AccordionItem>
      </template>
    </AccordionRoot>
  </div>
</template>

<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'radix-vue';
import { ChevronDownIcon } from '@heroicons/vue/24/solid';
import { ArrowRightIcon } from '@heroicons/vue/24/solid';

const accordionItems = [
  {
    value: 'item-1',
    projectTitle: 'Project #1',
    title: 'Is it accessible?',
    projectIcon: '/images/Bolt.svg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'www.google.com',
    stackImages: [
      '/images/stack-icons/html.svg',
      '/images/stack-icons/visual-studio.svg',
    ],
  },
  {
    value: 'item-2',
    projectTitle: 'Project #2',
    title: 'Is it unstyled?',
    projectIcon: '/images/Bolt.svg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'www.google.com',
    stackImages: ['/images/stack-icons/vuejs.svg'],
  },
  {
    value: 'item-3',
    projectTitle: 'Project #3',
    title: 'Can it be animated?',
    projectIcon: '/images/Bolt.svg',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    link: 'www.google.com',
    stackImages: [
      '/images/stack-icons/html.svg',
      '/images/stack-icons/vuejs.svg',
    ],
  },
];
</script>
