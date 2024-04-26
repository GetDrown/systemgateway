<template>
    <div
        class="font-inter w-[400px] md:w-[450px] md:mt-[50px] mr-[15px] md:mr-[150px] bg-white shadow-xl rounded-xl absolute right-0 top-0 p-7 md:left-auto z-0 md:z-auto">
        <div class="flex justify-center items-center md:mt-2">
            <img src="../../assets/image/dnsc1.png" alt="" class="md:w-[160px] w-[160px]" />
        </div>
        <form @submit.prevent="login">
            <!-- USERNAME  -->
            <div class="form-group flex justify-center">
                <div class="w-full md:w-[400px]">
                    <label class="block">
                        <input id="email" type="email" v-model="email"
                            class="mt-5 px-4 py-3 font-semibold bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-md sm:text-md focus:ring-1"
                            placeholder="Email" />
                    </label>
                </div>
            </div>
            <!-- Password -->
            <div class="form-group flex justify-center">
                <div class="w-full md:w-[400px]">
                    <label class="block">
                        <input id="password" type="password" v-model="password" placeholder="Password"
                            class="mt-3 px-4 py-3 bg-white font-semibold border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-md sm:text-md focus:ring-1" />
                        <!-- <div class="mt-2 right-0 absolute mr-7 space-x-1 ">
        <input type="checkbox" v-model="showPassword">
        <span>Show Password</span>
        </div> -->
                    </label>
                </div>
            </div>

            <!-- LOG IN BUTTON  -->
            <div class="form-group flex justify-center">
                <div class="w-full md:w-[400px]">
                    <label class="block">
                        <router-link to="/sysPages">
                            <button
                                class="bg-[#1CA556] mt-5 px-4 py-3 font-bold bg-green border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-md sm:text-md focus:ring-1 text-white cursor-pointer">
                                Login
                            </button>
                        </router-link>


                    </label>
                </div>
            </div>

        </form>

        <div class="text-[#1AA412] font-sans flex justify-center mt-3 md:mb-4 cursor-pointer font-semibold">
            Forgot Password?
        </div>

        <!-- LINE  -->
        <div class="flex justify-center items-center">
            <div class="border-t border-gray-400 w-[390px]"></div>
        </div>

        <!-- GOOGLE ACCOUNT  -->
        <div class="form-group flex justify-center md:mt-2">
            <div class="w-full md:w-[400px]">
                <label class="block">
                    <button type="button"
                        class="bg-white text-[#1d2125] tracking-wider text-xl mt-3 px-4 py-3 font-semibold bg-green border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-lg sm:text-md focus:ring-1 cursor-pointer flex items-center justify-center">
                        <img src="../../assets//image/google.png" alt="" class="w-7 mr-3" />

                        DNSC Google
                    </button>
                </label>
            </div>
        </div>

        <!-- DNSC MICROSOFT ACCOUNT  -->
        <div class="form-group flex justify-center">
            <div class="w-full md:w-[400px]">
                <label class="block">
                    <button type="button"
                        class="bg-white text-[#1d2125] tracking-wider text-xl mt-3 px-4 py-3 font-semibold bg-green border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-lg sm:text-md focus:ring-1 cursor-pointer flex items-center justify-center">
                        <img src="../../assets//image/microsoft.png" alt="" class="w-7 mr-3" />
                        DNSC Microsoft
                    </button>
                </label>
            </div>
        </div>

        <!-- LINE  -->
        <div class="flex justify-center items-center md:mt-6">
            <div class="border-t border-gray-400 w-[390px]"></div>
        </div>

        <div class="text-[#1AA412] font-sans flex justify-center mt-3 md:mb-4 cursor-pointer font-semibold">
            Don't have an account yet?
        </div>
        <!-- CREATE GATEWAY ACCOUNT  -->
        <di class="form-group flex justify-center">
            <div class="w-full md:w-[400px]">
                <label class="block">
                    <router-link to="/createAccount">
                        <button
                            class="bg-[#1CA556] mt-1 px-4 py-3 font-bold bg-green border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-md sm:text-md focus:ring-1 text-white cursor-pointer">
                            Create Gateway Account
                        </button>
                    </router-link>
                </label>
            </div>
        </di>
    </div>
    <!-- BACKGORUND  -->
    <div class="z-[-1] top-0 absolute right-0 h-screen w-screen overflow-hidden">
        <img src="../../assets/image/building.png" alt="" class="object-cover w-auto" />
    </div>

    <div class="z-[-4] bottom-0 absolute md:left-[1000px] left-[200px]">
        <img src="../../assets/image/bg1-1.png" alt="" />
    </div>


    <sideLogin />

</template>

<script>
import sideLogin from '@/components/side-content/sideLogin.vue'
export default {
    name: 'LoginPage',
    components: {
        sideLogin
    }
}
</script>

<style lang="css"></style>