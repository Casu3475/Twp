<script setup>
import { ref } from "vue"
import EditCommentForm from "../components/EditCommentForm.vue"
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const EditComment = ref(false)
const EditCommentButtonCom = ''
</script>

<template>

    <div class="h-[600px] w-[700px] bg-white p-7 overflow-y-scroll">
        <div class="border border-gray-300 rounded-sm px-4 py-3 bg-gray-100">
            <div class="mb-6">
                <label for="large-input"
                    class="block mb-2 text-md font-medium text-gray-900 rounded-md pl-2">Task
                    Title</label>
                <input v-model="title" type="text" id="large-input"
                    class="block px-3 py-2 w-full border border-gray-200  text-gray-900 bg-gray-50 rounded-sm  text-md focus:ring-blue-500 focus:border-blue-500">
            </div>
            <div class="mb-6">
                <label for="base-input"
                    class="block mb-2 text-md font-medium text-gray-900 rounded-md pl-2">Task
                    Content</label>
                <input v-model="content" type="text" id="base-input"
                    class="bg-gray-50 border border-gray-200  text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
            </div>
        
            <div class="flex space-x-2 ">
                <span class="text-md font-medium rounded-md pl-2">Category:</span>
                <select v-model="category_name" class="border border-gray-200 rounded-md">
                    <option v-for="category in listcategories">
                        {{ category }}
                    </option>
                </select>
            </div>
        </div>
        <div
            class="cursor-pointer mt-5 mb-6 ml-2 w-fit flex items-center border border-gray-900 rounded-lg">
            <div @click="editTask()"
                class="inline-flex items-center cursor-pointer text-md font-medium px-3 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mr-2 w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
                </svg>
                <p>
                    Submit
                </p>
                
            </div>
        </div>
        <hr>
        <div class="flex space-x-2 mt-6">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01">
                </path>
            </svg>
            <span class="font-bold">Activity</span>
        </div>
        <textarea class="bg-stone-200 w-full border rounded-md mt-4 mb-3" v-model="newcomment" @keyup.enter="createComment()"
            placeholder=" Write your comment..."></textarea>
        <div class="mb-6 flex flex-col px-3 py-1 pb-1 bg-blue-100 rounded-sm border border-gray-200" v-for="comment in comments[0]">
            <div class="inline-flex items-center space-x-5">
                <div class="text-md font-semibold pb-1">{{ comment.author_name }} </div>
                <div class="text-xs">Posted at: {{ comment.formatedDate }} </div>
            </div>
            <div v-if="EditComment == false || EditCommentButtonCom != comment.id" v-html="comment.content.rendered"
                class="border border-gray-300 rounded-sm px-2 py-2"></div>
            <div v-if="EditComment && EditCommentButtonCom == comment.id">
                <EditCommentForm :comment_id='comment.id' :comment_content='comment.content.rendered' />
            </div>

            <div class="flex space-x-8  text-xs mt-2">
                <!-- <div class="flex underline hover:no-underline cursor-pointer"
                    @click="EditComment = false; EditComment = true">
                    
                </div> -->
                <span @click="EditComment = false; EditComment = true; EditCommentButtonCom = comment.id"
                    class="underline hover:no-underline cursor-pointer">Modify</span>
                <div class="underline hover:no-underline cursor-pointer" @click="deleteComment(comment.id)">Delete</div>
            </div>
        </div>
    </div>
    <!-- ceci est un commentaire pour test les merge -->
</template>

<script>

export default {
    props: ['task_id', 'task_title', 'task_content', 'categories', 'task_category'],
    components: { EditCommentForm },
    components: { Datepicker },
    data() {
        return {
            id: this.task_id,
            title: this.task_title,
            content: this.task_content,
            category_name: this.categories[this.task_category],
            listcategories: this.categories,
            comments: [],
            newcomment: '',
            date_pick: '',
        }
    },
    methods: {
        editTask() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("title", this.title);
            urlencoded.append("content", this.content);
            urlencoded.append("categories", Object.keys(this.categories).find(key => this.categories[key] === this.category_name));
            // urlencoded.append("meta", String(this.date_pick));

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(this.$path + "/posts/" + this.id, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log('Date');
                    console.log(this.date_pick);
                })
                .catch(error => console.log('error', error));

            setTimeout(() => { document.location.reload(); }, 1000);
            

            
        },
        getAllComments() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");

            var urlencoded = new URLSearchParams();

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(this.$path + "/comments/?post=" + this.task_id, requestOptions)
                .then(response => response.json())
                .then(result => {
                    let data = []
                    for (let elem in result) {
                        console.log('ici');
                        let date = new Date(result[elem].date);
                        const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                        let formatedDate = month[date.getMonth()] + ' ' + date.getDate() + ' at ' + date.getHours() + ':' + date.getMinutes();
                        result[elem]['formatedDate'] = formatedDate;
                        data.push(result[elem]);
                    }
                    this.comments.push(data)
                })
                .catch(error => console.log('error', error));

            console.log(this.comments);
            console.log(this.category_name);
            console.log(this.categories);
        },
        deleteComment(id) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");

            var requestOptions = {
                method: 'DELETE',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch(this.$path + "/comments/" + id, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            setTimeout(() => { document.location.reload(); }, 1000);
        },
        createComment() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("content", this.newcomment);
            urlencoded.append("post", this.task_id);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(this.$path + "/comments", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            setTimeout(() => { document.location.reload(); }, 1000);
        }
    },
    beforeMount() {
        this.getAllComments();
    }
}  
</script>