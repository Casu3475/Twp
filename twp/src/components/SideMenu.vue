<template>


    <div class="flex h-screen flex-col justify-between bg-side-menu bg-opacity-95">
        <div class="px-4 py-6">
            <!-- <span class="block h-10 w-32 rounded-lg bg-gray-200"></span> -->

            <nav aria-label="Main Nav" class="mt-6 flex flex-col space-y-1 ">
                <a href="#" class="flex items-center rounded-lg px-4 py-2 text-gray-700  hover:bg-gray-100 hover:text-gray-700 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />

                    </svg>

                    <span class="ml-3 text-sm font-medium"> General </span>
                </a>

                <details class="group">
                    <summary
                        class="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-700  hover:bg-gray-100 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                        </svg>


                        <span class="ml-3 text-sm font-medium "> Lists </span>

                        <span class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180 ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </summary>

                    <nav v-for="category in categories_navbar[0]" aria-label="Teams Nav" class="mt-1.5 ml-5 flex flex-col  hover:bg-gray-100 hover:text-gray-700 rounded-lg">
                        <router-link :to="`/detail/${category.id}`">
                            <div class="flex items-center rounded-lg px-4 py-2 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z" />
                                </svg>
                                <span class="ml-3 text-sm font-medium"> {{category.name}} </span>
                            </div>
                        </router-link>

                    </nav>
                </details>


                <details class="group">
                    <summary

                        class="flex cursor-pointer items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>

                        <span class="ml-3 text-sm font-medium"> Account </span>

                        <span class="ml-auto shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </summary>

                    <nav aria-label="Account Nav" class="mt-1.5 ml-8 flex flex-col">
                        <a href="#"
                            class="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>

                            <span class="ml-3 text-sm font-medium"> Details </span>
                        </a>

                        <a href="#"
                            class="flex items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-700">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>

                            <span class="ml-3 text-sm font-medium"> Security </span>
                        </a>

                        <form action="/logout">
                            <button type="submit"
                                class="flex w-full items-center rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 opacity-75" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>

                                <span class="ml-3 text-sm font-medium"> Logout </span>
                            </button>
                        </form>
                    </nav>
                </details>
            </nav>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            categories_navbar: [],
            category_names_navbar: {}
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

                    this.categories_navbar.push(result);

                    for (let category in result) {
                        // console.log(result[category].name);
                        this.category_names_navbar[result[category].id] = result[category].name;
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