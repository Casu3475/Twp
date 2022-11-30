<script setup>
import { ref } from "vue"

const AddListButtonPressed = ref(false)
</script>

<template>
    <div class="w-72 inline-flex items-center cursor-pointer pt-2 pl-2 " @click="AddListButtonPressed = true" v-if="AddListButtonPressed == false">

        <!-- <button type="button" @click="AddListButtonPressed = true"
            class="inline-flex items-center text-gray-900 bg-category-table hover:bg-gray-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"> -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            class="w-4 h-4 mr-2">

            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
        </svg>
        <span>Add another list</span>
        <!-- </button> -->
    </div>
    <div v-if="AddListButtonPressed" class="bg-gray-200 inline-flex items-center h-[30px] mt-1 space-x-2">
        <textarea placeholder="Enter list title... " v-model="title" class="mx-auto resize-none h-7 rounded-[4px] -ml-1 mb-2 mt-2 w-[230px] border-2 border-blue-700"></textarea>

        <button type="button" @click="createList()"
            class="inline-flex items-center text-gray-900 hover:bg-gray-500 hover:text-white font-medium rounded-full overflow-hidden text-xs  text-center px-1 py-1">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        </button>
    </div>

</template>

<script>
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        createList() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("name", this.title);

            var requestOptions = {

                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(this.$path + "/categories", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            setTimeout(() => { document.location.reload(); }, 1000);
        }
    },
}
</script>