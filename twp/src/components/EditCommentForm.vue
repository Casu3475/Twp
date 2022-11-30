<template lang="">
    <div>
        <textarea class="bg-stone-200 w-full border rounded-md mt-4" v-model="content" @keyup.enter="modifyComment()"></textarea>
    </div>
</template>

<script>
export default {
    props: ['comment_id', 'comment_content'],
    data() {
        return {
            id: this.comment_id,
            content: this.comment_content
        }
    },
    methods: {
        modifyComment() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("content", this.content);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(this.$path + "/comments/" + this.id, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            setTimeout(() => { document.location.reload(); }, 1000);

        }
    },

}
</script>
