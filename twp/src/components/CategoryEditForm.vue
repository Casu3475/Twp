<template>
    <div class="z-40 flex items-center">
        <textarea v-model="cat_name" @keyup.enter="editCategory()" class="resize-none h-7 rounded-[4px] -ml-1 -mb-3 mt-2 w-[210px] border-2 border-blue-700"></textarea>
    </div>
</template>

<script>
export default {
    props: ['category_name', 'category_id'],
    data() {
        return {
            cat_name: this.category_name,
            cat_id: this.category_id
        }
    },
    methods: {
        editCategory() {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");
            myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

            var urlencoded = new URLSearchParams();
            urlencoded.append("name", this.cat_name);
            urlencoded.append("slug", this.cat_name.toLowerCase());

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: urlencoded,
                redirect: 'follow'
            };

            fetch(this.$path + "/categories/" + this.cat_id, requestOptions)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));

            setTimeout(() => { document.location.reload(); }, 1000);
        }
    },
}
</script>