<script setup>
import { ref } from "vue"
import AddTaskButton from '../components/AddTaskButton.vue'
import AddTask from '../components/AddTask.vue'
import AddListButton from '../components/AddListButton.vue'
import DropDownList from '../components/DropDownList.vue'
import CategoryEditForm from '../components/CategoryEditForm.vue'
import EditPopUp from '../components/EditPopUp.vue'


const AddTaskButtonPressed = ref(false)
const AddTaskButtonCategory = ''
const EditCategory = ref(false)
const EditCategoryButtonCateg = ''
const PopUp = ref(false)
const SavedIdTask = ''

</script>

<template lang="">



<!-- <div v-if="PopUp" class="absolute flex content-center justify-center inset-0 mt-60 z-30">
                            <EditPopUp />
                        </div> -->
    <div class="flex flex-nowrap overflow-x-scroll gap-x-2 mx-7 my-7 pb-96">
    <!-- <div :class="[ num_cols ]" class=" "> -->
    <!-- <div class="grid overflow-hidden grid-cols-5 grid-rows-1 gap-x-7 gap-y-2.5 mx-7 my-7"> -->
        <div v-for="category in categories[0]">

            <div class="box border border-gray-100 rounded-sm bg-category-table w-72">
                <div @click="EditCategory=false; EditCategory = true; EditCategoryButtonCateg = category" class="bg-gray-300 cursor-pointer font-bold text-lg px-2 rounded-sm grid grid-cols-2 pb-2">
                    <!-- <div @click="EditCategory = true"> -->
                        <div v-if="EditCategory && EditCategoryButtonCateg == category">
                            <CategoryEditForm :category_name='category.name' :category_id='category.id'/>
                        </div>  
                        <div v-else>
                            {{ category.name }}
                        </div>
                    <DropDownList :category_id='category.id'/>
                </div>
                <!-- Button for closing list editing windows -->
                <div v-for="task in tasks[0]">
                    <div v-if="task.categories[0] == category.id" class="my-4 py-2 px-2 mx-3 bg-white shadow-md rounded-sm">
                        <button @click="PopUp = true; EditCategory=false ; SavedIdTask=task.id" class="ml-1">
                            {{ task.title.rendered }}
                        </button>
                        <svg @click="deleteTask(task.id)" class="flex float-right cursor-pointer w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                            </path>
                        </svg>
                        <button @click="PopUp = false" v-if="PopUp" class="absolute flex inset-0 h-full w-full bg-black opacity-10 z-20">
                            
                        </button>
                        <div v-if="PopUp && SavedIdTask==task.id" class="absolute flex content-center justify-center inset-0 z-30 w-fit mx-auto my-auto overflow-hidden h-fit rounded-md">
                            <EditPopUp :task_id='task.id' :task_title='task.title.rendered' :task_content='task.content.rendered' :categories='category_names' :task_category='task.categories[0]' />
                        </div>
                        <div class="flex items-center mt-2 ml-1">
                            <div class="mr-3" v-if="task.content.rendered != ''">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" /></svg>
                            </div>
                            <div class="flex items-center" v-if="Object.values(this.data[0]).includes(String(task.id))">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                                <div class="ml-1 text-sm font-light">{{this.comment_counter[0][task.id]}}</div>
                            </div>
                        </div>
                        
                    </div>  
                </div>

                <div class="flex flex-row px-2 space-x-1 w-full" v-if="AddTaskButtonPressed && AddTaskButtonCategory == category">
                    <AddTask :category_id='category.id'/>
                    <button type="button" v-if="AddTaskButtonPressed && AddTaskButtonCategory == category" @click="AddTaskButtonPressed = false" class="mb-2 ml-2 mt-2 border border-gray-800 text-gray-100 bg-blue-500 rounded-sm hover:bg-blue-300 hover:text-gray-400">
                        <span class="cursor-pointer text-sm font-normal px-1 py-1 rounded-sm hover:bg-transparent hover:text-white">Close</span>
                    </button>
                </div>

                <div v-if="AddTaskButtonPressed == false || AddTaskButtonCategory != category" @click="AddTaskButtonPressed = true; AddTaskButtonCategory = category;">
                    <AddTaskButton />
                </div>
            </div>
            
        </div>

        <div class = "bg-gray-200 font-medium text-[15px] pl-3 pr-2 rounded-sm h-9 opacity-80">

            <AddListButton />
        </div>
    </div>


    
</template>


<script>
export default {
    components: { AddTask },
    components: { DropDownList },
    components: { CategoryEditForm },
    components: { EditPopUp },

    data() {
        return {
            tasks: [],
            categories: [],
            category_names: {},
            comment_counter: [],
            data: [],
        }
    },
    methods: {

        getNotes() {

            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            // FETCH RETRIEVING EACH TASK FROM API
            fetch(this.$path + "/posts", requestOptions)
                .then(response => response.json())
                .then(result => {
                    this.tasks.push(result);
                })
                .catch(error => console.log('error', error));

            console.log('TASKS');
            console.log(this.tasks);
        },
        getCategories() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(this.$path + "/categories?orderby=description", requestOptions)
                .then(response => response.json())
                .then(result => {

                    this.categories.push(result);

                    for (let category in result) {
                        // console.log(result[category].name);
                        this.category_names[result[category].id] = result[category].name;
                    }


                    console.log('CATEGORIES');
                    console.log(this.categories);
                    
                })
                .catch(error => console.log('error', error));
        },
        deleteTask(id) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(this.$path + "/posts/" + id, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            setTimeout(() => { document.location.reload(); }, 1000);
        },
        getNumberComment() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");

            var urlencoded = new URLSearchParams();

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(this.$path + "/comments", requestOptions)
                .then(response => response.json())
                .then(result => {
                    let table_postId = []
                    let table_countCommentPostId = {}
                    for (let elem in result) {
                        console.log(result[elem]);
                        table_postId.push(result[elem].post);
                    }
                    let newArray = table_postId.filter((element, index, table_postId) => table_postId.indexOf(element) === index);
                    console.log('postID');
                    console.log(newArray);
                    for (let unique in newArray) {
                        let count = 0;
                        for (let elem in result) {
                            if (result[elem].post == newArray[unique]) {
                                count += 1;
                            }
                        }
                        table_countCommentPostId[newArray[unique]] = count;
                    }
                    console.log('ici')
                    // console.log(table_countCommentPostId)
                    this.comment_counter.push(table_countCommentPostId)
                    // console.log('this.table_countCommentPostId')    ;
                    // console.log (typeof this.comment_counter[0]);
                    console.log(this.comment_counter[0]);
                    // console.log (Object.keys(this.comment_counter[0]));
                    this.data.push(Object.keys(this.comment_counter[0]));
                    // console.log(this.data);
                    // console.log(Object.values(this.data[0]));
                })
                .catch(error => console.log('error', error));
        }
    },
    beforeMount() {
        this.getNotes();
        this.getCategories();
        this.getNumberComment();
    }
}
</script>
