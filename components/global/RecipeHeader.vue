<template>
    <div class="w-full flex flex-col" v-if="tutorial != '' || discussion != '' || complexity != '' || compatibility.length > 0">
        <div class="flex items-center mb-6" v-if="tutorial != '' || discussion != ''">
            <a v-if="tutorial != ''" target="_blank" :href="tutorial" style="text-decoration: none !important; color: #3A66DB !important; font-weight: bold !important;" class="rounded-5 border border-tutorial-button-blue py-2 px-4 text-base leading-5 no-underline mr-2">
                👉 Read the tutorial
            </a>
            <a v-if="discussion != ''" target="_blank" :href="discussion" style="text-decoration: none !important; color: #718096 !important; font-weight: bold !important;" class="rounded-5 border border-discussion-button-gray py-2 px-4 text-base leading-5 no-underline">
                🗣 Leave a comment
            </a>
        </div>
        <div class="bg-recipe-header-background dark:bg-gray-900 border border-recipe-header-border rounded-5">
            <div class="px-4 py-5 flex items-start">
                <div v-if="complexity != ''" class="max-w-sm flex items-start">
                    <img src="/icons/clock.svg" class="mr-2 light-img" style="margin-top: 0px; margin-bottom: 0px;"/>
                    <img src="/icons/clock-dark.svg" class="mr-2 dark-img" style="margin-top: 0px; margin-bottom: 0px;"/>
                    <div class="flex flex-col">
                        <span class="text-recipe-meta-title dark:text-gray-400 text-sm leading-none mb-1">Complexity</span>
                        <span class="text-recipe-meta text-sm font-bold leading-none" v-text="complexity"></span>
                    </div>
                </div>
                <div v-if="compatibility.length > 0" class="max-w-sm flex items-start ml-20">
                    <img src="/icons/gears.svg" class="mr-2 light-img" style="margin-top: 0px; margin-bottom: 0px;"/>
                    <img src="/icons/gears-dark.svg" class="mr-2 dark-img" style="margin-top: 0px; margin-bottom: 0px;"/>
                    <div class="flex flex-col">
                        <span class="text-recipe-meta-title dark:text-gray-400 text-sm leading-none mb-1">Compatibility</span>
                        <span class="text-recipe-meta text-sm font-bold leading-none" 
                            v-for="( value, key ) in compatibility"
                            :key="'compatibility-'+key"
                            v-text="value"></span>
                    </div>
                </div>
            </div>
            <div class="p-4 border-t border-recipe-header-border flex items-center" v-if="tutorial != ''">
                <img style="margin-top: 0px; margin-bottom: 0px; margin-right: 14px;" class="light-img" src="/icons/lab.svg"/>
                <img style="margin-top: 0px; margin-bottom: 0px; margin-right: 14px; line-height: 19px;" class="dark-img" src="/icons/lab-dark.svg"/>
                <span>If you are looking for a detailed guide, <a :href="tutorial" style="color: #3A66DB !important; text-decoration: none !important;" target="_blank">read the tutorial related to this post</a></span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        compatibility: {
            type: Array,
            default: function(){
                return [];
            }
        },
        tutorial: {
            type: String,
            default: ''
        },
        discussion: {
            type: String,
            default: ''
        },
        complexity: {
            type: String,
            default: ''
        }
    }
}
</script>
