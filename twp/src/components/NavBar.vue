<script>

</script>

<template>
    <nav class="bg-navbar border-gray-200 px-2 sm:px-4 py-2.5">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
            <router-link to="/">
                <a href="#" class="flex items-center">
                    <img src="/public/logo.png" class="h-10" alt="Bordello Logo" />
                    <!-- <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span> -->
                </a>
            </router-link>
            <div class="flex md:order-2">
                <router-link to="/">
                    <button v-if="this.$route.name === 'detail'" type="button" class="inline-flex items-center border border-gray-900 text-gray-900 bg-yellow-post-it hover:bg-blue-600 hover:text-white hover:border-2 hover:border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 mr-2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        <span>Return home</span>
                    </button>
                </router-link>
            </div>
            <div class="flex md:order-2 items-center">
                <div class="text-sm mr-3">Welcome <br>root</div>
                <div class="rounded-full border border-black h-11 w-11 overflow-hidden">
                    <img src="/public/avatar.jpeg" class="h-11" alt="User image" />
                </div>
            </div>
            <!-- <div class="w-1/3">
                <form>   
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your note..." required>
                        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>
            </div> -->
        </div>
    </nav>
</template>