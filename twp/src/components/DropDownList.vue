<template >
    <div class="flex-col flex place-items-end">
        <button @click="isOpen = !isOpen" class=" h-8 w-8 pt-2 pr-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-5 h-5 float-right">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
        </button>
        <button v-if="isOpen" @click="isOpen = false"
            class="absolute top-0 bottom-0 left-0 right-0 h-full w-full bg-black opacity-50"></button>
        <div v-if="isOpen" class=" bg-white rounded-lg px-2 py-2 text-base font-medium space-y-2 shadow-2xl z-10 ">
            <a href="#" @click="deleteList(category_id)"
                class="flex flex-row space-x-10 hover:bg-gray-600 hover:text-white rounded-lg hover:drop-shadow-xl">
                <span>Delete</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                    </path>
                </svg>
            </a>
            <a href="#"
                class="flex flex-row space-x-9 hover:bg-gray-600 hover:text-white rounded-lg hover:drop-shadow-xl">
                <span>Modify</span>
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z">
                    </path>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ['category_id'],
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        deleteList(id) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("force", "true");

            var requestOptions = {

                method: 'DELETE',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(this.$path + "/categories/" + id, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            setTimeout(() => { document.location.reload(); }, 1000);
        }
    },
}
</script>
