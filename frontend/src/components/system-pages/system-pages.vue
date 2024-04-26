<template>
    <!-- START TOP BAR  -->
    <div class=" bg-gradient-to-b from-[#1ca556] to-[#147452] w-auto py-3">
        <div class="flex justify-between">
            <div class="font-inter md:text-lg font-semibold text-white ml-5 tracking-wider mt-2">
                DNSC Information Systems Gateway
            </div>

            <div>
                <button @click="open = true">
                    <img src="../../assets/sytemImages/his.png" alt="" class="w-[45px] h-[45px] rounded-full mr-5" />
                </button>
            </div>
        </div>
    </div>

    <!-- START MODAL  -->
    <div>
        <div v-if="open" class="fixed z-40 inset-0 h-dvh">
            <!-- BG OPACITY  -->
            <!-- <div class="absolute inset-0 bg-black opacity-50"></div> -->
            <!-- END OF BG OPACITY  -->
            <div
                class="bg-[#ffffff] fixed top-0 right-0 z-50 p-7 rounded-[25px] w-[400px] md:mt-[100px] md:mr-5 drop-shadow-[5px_5px_2.6px_rgba(150,150,150,5.6)]">

                <svg @click="open = false" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor"
                    class="w-6 h-6 right-0 absolute top-0 md:mt-5 md:mr-5 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <div class="flex items-center justify-center">
                    <img src="../../assets/sytemImages/his.png" alt="" class="w-[80px] h-[80px] rounded-full" />
                </div>
                <p class="font-sans text-base font-medium flex justify-center mt-2">
                    Hi, User!
                </p>

                <div class="flex justify-center items-center">
                    <button
                        class="bg-[#ffffff] tracking-wider px-10 py-3 text-sm font-semibold rounded-[30px] md:mt-2 flex justify-center items-center outline-none focus:outline-none border-2 border-green-700 focus:border-green-800">
                        Manage your Accounts
                    </button>
                </div>

                <div class="flex flex-col">
                    <div
                        class="bg-[#f3f2f2] font-inter px-15 py-4 text-sm md:mt-5 rounded-xl flex justify-between items-center">

                        <p class="text-sm md:ml-4 md:mt-1 font-medium">
                            {{ showMoreAccountsExpanded ? 'Hide more accounts' : 'Show more accounts' }}
                        </p>
                        <div class="md:mr-[60px] md:mt-1 fixed right-0 absolute">
                            <img src="../../assets/sytemImages/his.png" alt="" class="w-[20px] h-[20px] rounded-full" />
                        </div>

                        <svg @click="toggleShowMore" class="mr-7  right-0 h-7 w-7 cursor-pointer fixed"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd" />
                        </svg>

                    </div>
                    <div v-if="showMoreAccountsExpanded"
                        class="bg-[#f3f2f2] font-inter py-4 rounded-xl mt-2 px-2 flex flex-row justify-start space-x-2 items-start">
                        <div class="mx-2 my-1 py-1 ">
                            <img src="../../assets/sytemImages/his.png" alt="" class="w-[35px] h-[34px] rounded-full">
                        </div>
                        <div class="flex flex-col items-start justify-start ">
                            <div>
                                <p class="text-left font-inter font-semibold text-[16px]">Human Resource Info. System
                                </p>
                            </div>
                            <div>
                                <p class="text-left font-inter text-[14px]">lastname.firstname@dnsc.edu.ph</p>
                            </div>
                            <div class="flex flex-row space-x-2 mt-2 ml-5 justify-center">
                                <button class=" bg-[#1CA556] px-6 py-2 text-white rounded-full text-[14px]">Sign
                                    in</button>
                                <button
                                    class="bg-[#BC1414] px-6 py-2 text-white rounded-full text-[14px]">Remove</button>
                            </div>
                        </div>
                    </div>
                    <div v-if="showMoreAccountsExpanded"
                        class="bg-[#f3f2f2] font-inter py-4 rounded-xl mt-2 px-2 flex flex-row justify-start space-x-2 items-start">
                        <div class="mx-2 my-1 py-1 ">
                            <img src="../../assets/sytemImages/pms.png" alt="" class="w-[35px] h-[34px] rounded-full">
                        </div>
                        <div class="flex flex-col items-start justify-start ">
                            <div>
                                <p class="text-left font-inter font-semibold text-[16px]">Procurement & Supply MIS</p>
                            </div>
                            <div>
                                <p class="text-left font-inter text-[14px]">lastname.firstname@dnsc.edu.ph</p>
                            </div>
                            <div class="flex flex-row space-x-2 mt-2 ml-5 justify-center">
                                <button class=" bg-[#1CA556] px-6 py-2 text-white rounded-full text-[14px]">Sign
                                    in</button>
                                <button
                                    class="bg-[#BC1414] px-6 py-2 text-white rounded-full text-[14px]">Remove</button>
                            </div>
                        </div>

                    </div>
                    <div v-if="showMoreAccountsExpanded"
                        class="bg-[#f3f2f2] font-inter px-15 py-4 text-sm mt-2 rounded-xl flex flex-row items-center cursor-pointer">
                        <div class="flex flex-row space-x-2">
                            <div class="ml-2 justify-between">

                                <svg @click="toggle = true, open = false" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                    class="w-[24px] h-[24px] cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>


                            </div>
                            <div class="pb-[1px] -mb-0 justify-center">
                                <p class="text-[14px] font-inter font-medium">Add another account</p>
                            </div>
                        </div>

                    </div>

                </div>

                <!-- SIGN OUT  -->
                <router-link to="/login">
                    <p
                        class="font-inter inset-x-0 tracking-normal text-center mt-5 cursor-pointer hover:text-green-600">

                        Sign out
                    </p>
                </router-link>

            </div>
        </div>
    </div>

    <!-- ADDING ANOTHER ACCOUNT MODAL -->
    <div>
        <div v-if="toggle" class="fixed z-50 inset-0 h-dvh">
            <div
                class="bg-[#EDEBEB] fixed top-0 right-0 z-50 p-7 rounded-[25px] w-[450px] md:mt-[100px] md:mr-5 drop-shadow-[5px_5px_2.6px_rgba(150,150,150,5.6)]">
                <svg @click="toggle = false, open = true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                    class="w-6 h-6 right-0 absolute top-0 md:mt-5 md:mr-5 cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>

                <p class="font-inter text-lg font-bold flex justify-center mt-2">
                    Register New Account
                </p>
                <!-- System Selection -->
                <div class="mt-5 flex flex-col">
                    <button
                        class="ml-2 w-[380px] h-[40px] px-4 py-2 rounded-[8px] flex justify-between items-center text-[12px] font-inter bg-white border-[2px] font-semibold">
                        {{ selectedOptions }}
                        <svg @click="openDropdown" class=" mr-10  right-0 h-7 w-7 cursor-pointer fixed border"
                            viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                    <div v-if="toggleDropdown"
                        class="ml-2 bg-white border rounded divide-y w-[380px] inline-block z-[100] divide-gray-95 ">
                        <a v-for="(option, index) in selectOption" :key="index"
                            @click="selectsOption(index), toggleDropdown = !toggleDropdown"
                            class="block px-4 py-2 text-left cursor-pointer text-[14px] font-inter hover:bg-gray-100 hover:text-gray-900">
                            {{ option }}
                        </a>
                    </div>
                    <div class="ml-1 mt-4" v-if="!toggleDropdown">
                        <input type="email" placeholder="Email"
                            class="px-3 py-2 rounded-[8px] w-[380px] h-[36px] border border-gray-300 placeholder:text-[14px] placeholder:font-inter text-[14px] font-inter">
                    </div>
                    <div class="ml-1 mt-4" v-if="!toggleDropdown">
                        <input type="password" placeholder="Password"
                            class="px-3 py-2 rounded-[8px] w-[380px] h-[36px] border border-gray-300 placeholder:text-[14px] placeholder:font-inter text-[14px] font-inter">
                    </div>
                    <div class="mt-4 ">
                        <button
                            class="ml-2 w-[380px] h-[40px] px-4 rounded-[8px] text-center text-[16px] text-white font-inter border-[2px] bg-[#1CA556] hover:bg-[#157d41] transition ease-in-out duration-300">
                            <span>Add
                                Account</span>
                        </button>
                    </div>

                    <div class="ml-3 mt-4 px-4 py-2 flex items-center space-x-4">
                        <hr class=" bg-gray-400 w-1/2 h-[2px]">
                        <span class="font-inter font-semibold">Or</span>
                        <hr class=" bg-gray-400 w-1/2 h-[2px]">
                    </div>
                    <div class="ml-3 mt-4">
                        <button
                            class="w-[380px] h-[42px] py-2 px-4 flex items-center justify-center bg-white text-center rounded border font-inter font-medium hover:bg-gray-200 transition ease-in-out duration-300">
                            <img src="https://accounts.google.com/favicon.ico" class="w-[28px] h-[28px] mr-[2px]">
                            <span>DNSC Google</span>
                        </button>
                    </div>
                    <div class="ml-3 mt-2 ">
                        <button
                            class="w-[380px] h-[42px] py-2 px-4 flex items-center justify-center bg-white text-center rounded border font-inter font-medium hover:bg-gray-200 transition ease-in-out duration-300">
                            <img src="https://www.microsoft.com/favicon.ico" class="w-6 h-6 mr-[5px]">
                            <span>DNSC Microsoft</span>
                        </button>
                    </div>


                </div>
                <!-- End of system selection -->


            </div>
        </div>
    </div>

    <!-- END MODAL  -->


    <!-- END TOP BAR  -->
    <!-- ------------------------------------------------------------------------------------------------------------------- -->
    <!-- START CARD  -->
    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-15 md:mt-[70px]">
        <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 mx-auto md:mx-auto">
            <!-- Card 1 -->
            <div class="overflow-hidden mx-[20px] sm:mx-[10px]">
                <a href="#"></a>
                <div class="relative">
                    <a href="https://his.dnsc.edu.ph/login">
                        <img class="h-auto max-w-full mx-[2px] sm:mx-[5px]" src="../../assets/sytemImages/his.png"
                            alt="Human Resource Information System" />
                    </a>
                </div>
                <div class="px-4 py-2">
                    <a href="#"
                        class=" font-h3 font-semibold text-lg inline-block hover:text-green-600 transition duration-450 ease-in-out text-center">
                        Human Resource Information System</a>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="overflow-hidden mx-[20px] sm:mx-[10px]">
                <a href="https://qce.dnsc.edu.ph/evaluator"></a>
                <div class="relative w-full">
                    <a href="https://qce.dnsc.edu.ph/evaluator">
                        <img class="max-w-full h-auto mx-[4px] sm:mx-[4px]" src="../../assets/sytemImages/fpe.png"
                            alt="Faculty Performance Evaluation System" />
                    </a>
                </div>
                <div class="px-6 py-4">
                    <a href="https://qce.dnsc.edu.ph/evaluator"
                        class=" font-semibold text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out font-h3 text-center">Faculty
                        Performance Evaluation System</a>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="overflow-hidden mx-[20px] sm:mx-[10px]">
                <a href="https://pms.dnsc.edu.ph/"></a>
                <div class="relative">
                    <a href="https://pms.dnsc.edu.ph/">
                        <img class="max-w-full h-auto mx-[6px] sm:mx-[4px]" src="../../assets/sytemImages/pms.png"
                            alt="PMS Logo" />
                    </a>
                </div>
                <div class="px-6 py-2">
                    <a href="https://pms.dnsc.edu.ph/"
                        class=" font-semibold text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out font-h3 text-center">Procurement
                        & Supply Management Information System</a>
                </div>
            </div>

            <!-- Card 4 -->
            <div class="overflow-hidden mx-[20px] sm:mx-[10px]">
                <a href="https://lms.dnsc.edu.ph/my/"></a>
                <div class="relative">
                    <a href="https://lms.dnsc.edu.ph/my/">
                        <img class="max-w-full h-auto mx-[6px] sm:mx-[4px]" src="../../assets/sytemImages/lms.png"
                            alt="Learning Management System" />
                    </a>
                </div>
                <div class="px-6 py-4">
                    <a href="https://lms.dnsc.edu.ph/my/"
                        class=" font-semibold text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out font-h3 text-center">Learning
                        Management System</a>
                </div>
            </div>

            <!-- Card 5-->
            <div class="overflow-hidden mx-[20px] sm:mx-[10px]">
                <a href="#"></a>
                <div class="relative">
                    <a href="https://mis.dnsc.edu.ph/akred">
                        <img class="max-w-full h-auto mx-[6px] sm:mx-[5px]" src="../../assets/sytemImages/akred2.png"
                            alt="Accreditation Management System" />
                    </a>
                </div>
                <div class="px-6 py-4">
                    <a href="https://mis.dnsc.edu.ph/akred"
                        class=" font-semibold text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out font-h3 text-center">Accreditation
                        Management System</a>
                </div>
            </div>

            <!-- Card 6 -->
            <div class="overflow-hidden mx-[20px] sm:mx-[10px]">
                <a href="https://redmas.dnsc.edu.ph/landing/home"></a>
                <div class="relative">
                    <a href="https://redmas.dnsc.edu.ph/landing/home">
                        <img class="max-w-full h-auto mx-[6px] sm:mx-[5px]" src="../../assets/sytemImages/redmas.png"
                            alt="Sunset in the mountains" />
                    </a>
                </div>
                <div class="px-6 py-4">
                    <a href="https://redmas.dnsc.edu.ph/landing/home"
                        class=" font-semibold text-lg inline-block hover:text-green-600 transition duration-500 ease-in-out font-h3 text-center">Research
                        Database Management System</a>
                </div>
            </div>
        </div>
    </div>

    <div class="z-[-1] top-0 absolute right-0 h-screen w-screen overflow-hidden opacity-[.10]">
        <img src="../../assets/image/ab.png" alt="" class="object-cover w-auto" />
    </div>
    <!-- BACKGORUND  -->
    <!-- <div
      class="z-[-1] top-0 bottom-0 absolute right-0 h-screen w-screen overflow-hidden"
    >
      <img
        src="../../../assets/sytemImages/building.png"
        alt=""
        class="object-cover w-full"
      />
    </div> -->
</template>


<script>
export default {
    name: "systemsPages",
    data() {
        return {
            open: false,
            toggle: false,
            toggleDropdown: false,
            showMoreAccountsExpanded: false,

            selectedOptions: 'Select a DNSC System..',
            selectOption: ['Human Resource Information System',
                'Faculty Performance Evaluation System',
                'Procurement & Supply Management Information System',
                'Learning Management System', 'Accreditation Management System',
                'Research Database Management System']
        };
    },
    methods: {
        toggleShowMore() {
            this.showMoreAccountsExpanded = !this.showMoreAccountsExpanded;
            // If you want to toggle the modal as well, uncomment the following line
            // this.open = !this.open;
        },

        openDropdown() {
            this.toggleDropdown = !this.toggleDropdown;
        },

        selectsOption(index) {
            if (index >= 0 && index < this.selectOption.length) {
                return this.selectedOptions = this.selectOption[index];
            } else {
                console.error('invalid', index);
            }
            /* this.selectedOptions = selectOption; */

        }
        /*  this.selectedOptions = selectOption;
         
         this.toggleDropdown = false; */


    },
}
</script>

<style lang="scss" scoped></style>