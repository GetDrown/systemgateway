<template>
    <div class=" font-inter font-black mt-[100px] m-[80px] p-3 md:mr-10">
        <div class="block md:text-8xl tracking-normal text-[#147452]">DAVAO</div>
        <div class="block md:text-8xl tracking-normal text-[#147452]">DEL NORTE</div>

        <div class="block md:text-8xl tracking-normal text-[#147452]">STATE COLLEGE</div>
        <div class="block text-4xl md:mt-2 font-semibold text-[#147452]">Information Systems Gateway</div>

        <router-link to="/login">
            <button
                class="px-10 py-3 text-[#147452] bg-white font-semibold rounded-[15px] outline-none drop-shadow-[5px_5px_2.6px_rgba(150,150,150,5.6)] mt-[100px] focus:outline-none border-2 border-green-700 focus:border-green-800">
                GET STARTED
            </button>
        </router-link>

    </div>
    <div class="mt-[50px] w-[250px] grid grid-cols-3 gap-2 left-0 absolute m-20">

        <img src="../../assets/logo/bp.png" alt="Bp logo" class="h-[80px]" />
        <img src="../../assets/logo/ab.png" alt="Ab logo" class="mt-5 h-[60px]" />
        <img src="../../assets/logo/dpo.png" alt="Dpo logo" class="h-[100px]" />
    </div>
</template>

<script>

export default {
    name: 'SidePage',
}
</script>

<style></style>