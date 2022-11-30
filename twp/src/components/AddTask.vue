
<template lang="">
    <textarea class="resize-none h-7 rounded-[4px] -mb-3 mt-2 w-[260px] border-2 border-blue-700" placeholder="Enter a title for this task..." v-model="title"></textarea>
    <button type="button" @click="createTask()" class=" text-gray-900 rounded-full p-2">
        <svg class="w-6 h-6 ml-[1px] mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    </button>
</template>


<script>
export default {
    props: ['category_id'],
    data() {
        return {
            title: ''
        }
    },
    // data: function() {
    //     var theData = {
    //         somevar: this.messageId,
    //         // other object attributes
    //     }

    //     return theData;
    // },
    methods: {
        createTask() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("title", this.title);
            urlencoded.append("categories", this.category_id);
            urlencoded.append("status", 'publish');

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(this.$path + "/posts", requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            setTimeout(() => { document.location.reload(); }, 1000);
        }
    },
}
</script>
