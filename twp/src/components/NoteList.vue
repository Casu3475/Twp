<script setup>

import { ref } from "vue"
import EditPopUp from '../components/EditPopUp.vue'

const PopUpNoteList = ref(false)
const SavedIdTaskNoteListNoteList = ''
</script>


<template>

    <div v-for="note in notes" :key="note.id" class="transition ease-in-out h-72 bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gray-500 hover:scale-20 duration-100 max-w-sm p-6 border rounded-lg bg-yellow-post-it border-gray-700">
        
            <a href="#" @click="PopUpNoteList = true; EditCategory=false ; SavedIdTaskNoteList=note.id;">
                <h5 class="mb-2 text-lg font-bold truncate tracking-tight text-gray-900 dark:text-gray-900">{{ note.title.rendered }}</h5>
            </a>
            <p class="mb-3 mt-4 truncate h-7 text-md text-gray-700 dark:text-gray-700" v-html="note.content.rendered"></p>
            <div class="grid overflow-hidden grid-cols-5 grid-rows-1 gap-x-2 gap-y-2.5">
                <div class="box">
                    <!-- <router-link :to="`/detail/${note.id}`">
                        <a href="#" class="float-left inline-flex items-center mt-3 px-2 py-2 text-sm border-gray-900 font-medium text-center rounded-lg hover:bg-blue-200 bg-yellow-post-it text-gray-900 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                        </a>
                    </router-link> -->
                </div>
                <div class="box"></div>
                <div class="box">
                    <!-- <router-link :to="`/edit/${note.id}`">
                        <a href="#" class="float-left inline-flex items-center mt-3 px-2 py-2 text-sm border-gray-900 font-medium text-center rounded-lg hover:bg-green-200 bg-yellow-post-it text-gray-900 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>
                        </a>
                    </router-link> -->
                </div>
                <div class="box"></div>
                <div class="box">
                    <!-- <button type="submit" @click="deleteNote(note.id)" class="float-left inline-flex items-center mt-3 px-2 py-2 text-sm border-gray-900 font-medium text-center rounded-lg hover:bg-red-400 bg-yellow-post-it text-gray-900 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                    
                    </button> -->
                </div>
                <button @click="PopUpNoteList = false" v-if="PopUpNoteList" class="absolute flex inset-0 h-full w-full bg-black opacity-10 z-40">
                            
                </button>
                <div v-if="PopUpNoteList && SavedIdTaskNoteList==note.id" class="absolute flex content-center justify-center inset-0 z-50 w-fit mx-auto my-auto overflow-hidden h-fit rounded-md">
                    <EditPopUp :task_id='note.id' :task_title='note.title.rendered' :task_content='note.content.rendered' :categories='category_names_notelist' :task_category='note.categories[0]' />
                </div>
            </div>
           
            
        
    </div>
    
</template> 

<script>
export default {
    props: ['notes'],
    data() {
        return {
            categories_notelist: [],
            category_names_notelist: {}
        }
    },
    methods: {
        getCategories() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(this.$path + "/categories", requestOptions)
                .then(response => response.json())
                .then(result => {
                    console.log('result');
                    console.log(result);
                    this.categories_notelist.push(result);

                    for (let category in result) {
                        // console.log(result[category].name);
                        this.category_names_notelist[result[category].id] = result[category].name;
                    }

                    
                })
                .catch(error => console.log('error', error));
        },
    },
    beforeMount(){
        this.getCategories();
    }
}
</script>


