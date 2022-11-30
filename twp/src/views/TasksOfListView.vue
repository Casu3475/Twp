<script setup>
import NoteList from '../components/NoteList.vue'
</script>


<template lang="">
    <main class="bg-board h-screen">
        <div class="bg-board">
            <div class="grid overflow-hidden grid-cols-1 grid-rows-30 sm:grid-cols-2 sm:grid-rows-6 md:grid-cols-3 md:grid-rows-6 lg:grid-cols-4 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-3 2xl:grid-cols-4 2xl:grid-rows-3 gap-x-2.5 gap-y-3 px-5 py-5">
                <NoteList :notes="this.notes"/>
            </div>
        </div>
    </main>
</template>


<script>
export default {
    components: {
        NoteList
    },
    data(){
        return {
            id: this.$route.params.id,
            notes: []
        }
    },
    methods: {
        getListNotes(){
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Basic cm9vdDpyb290");
            myHeaders.append("Cookie", "wordpress_test_cookie=WP%20Cookie%20check");

            var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
            };

            fetch(this.$path + "/posts?categories=" + this.$route.params.id, requestOptions)
            .then(response => response.json())
            .then(result => {
                for (const i in result) {
                    console.log(result[i]);
                    this.notes.push(result[i]);
                }
                console.log(this.notes);
                
            })
            .catch(error => console.log('error', error));

        }
        
    },
    beforeMount(){
        this.getListNotes();
    }
}
</script>


