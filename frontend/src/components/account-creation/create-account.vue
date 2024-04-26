<template>
    <div
        class="font-inter login-container w-[400px] md:w-[450px] md:mt-[80px] mr-[15px] md:mr-[150px] bg-white shadow-xl rounded-xl absolute right-0 top-0 p-7 md:left-auto z-0 md:z-auto w-[350px]">
        <div class="flex justify-center items-center md:mt-1">
            <img src="../../assets/image/dnsc1.png" alt="" class="md:w-[160px] w-[160px]" />
        </div>
        <div class="flex justify-center items-center md:mt-2">
            <div class="text-4xl font-bold">Register Information</div>
        </div>
        <form @submit.prevent="submitGatewayForm">
            <!-- USERNAME  -->
            <div class="form-group flex justify-center">
                <div class="w-full md:w-[400px]">
                    <label class="block">
                        <input v-model="username" type="username"
                            class="mt-5 px-4 py-3 font-semibold bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-md sm:text-md focus:ring-1"
                            placeholder="Username" />
                    </label>
                </div>
            </div>

            <!-- EMAIL  -->
            <div class="form-group flex justify-center">
                <div class="w-full md:w-[400px]">
                    <label class="block">
                        <input v-model="email" type="email"
                            class="mt-5 px-4 py-3 font-semibold bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-md sm:text-md focus:ring-1"
                            placeholder="Email" />
                    </label>
                </div>
            </div>

            <!-- PASSWORD  -->
            <div class="form-group flex justify-center">
                <div class="w-full md:w-[400px]">
                    <label class="block">
                        <input type="password" v-model="password" placeholder="Password"
                            class="mt-3 px-4 py-3 bg-white font-semibold border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-md sm:text-md focus:ring-1" />
                    </label>
                </div>
            </div>

            <div class="form-group flex justify-center">
                <div class="w-full md:w-[400px]">
                    <label class="block">
                        <input type="file" v-on="picture" placeholder="picture"
                            class="mt-3 px-4 py-3 bg-white font-semibold border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-md sm:text-md focus:ring-1" />
                    </label>
                </div>
            </div>

            <!-- SUBMIT BUTTON  -->
            <div class="form-group flex justify-center md:mt-[50px]">
                <div class="w-full md:w-[400px]">
                    <label class="block">

                        <button @click="submitForm"
                            class="bg-[#1CA556] px-4 py-3 font-bold bg-green border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-lime-600 block w-full rounded-md sm:text-md focus:ring-1 text-white cursor-pointer">
                            SUBMIT
                        </button>

                    </label>
                </div>
            </div>

            <div class="text-[#1AA412] font-sans flex justify-center mt-3 cursor-pointer font-semibold">
                <router-link to="/login">
                    <button>Already have an account ?</button>
                </router-link>
            </div>
        </form>
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
    components: {
        sideLogin
    },
    data(){
        return{

            
        };
    },
    methods: {

    }  
}
</script>

<style lang="scss" scoped></style>