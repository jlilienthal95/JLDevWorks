<script lang='ts'>
    import { scrollY, scrollThreshold } from "../store.js";
    import { fade } from 'svelte/transition';
    import { derived } from "svelte/store";

    //styling classes
    const lgTextCont = "md:w-2/3 w-full"
    const lgTextClass = "text-[50px] sm:text-[60px] md:text-[72px] xl:text-[92px]"

    //background opacity from scrollY
    const bgOpacity = derived(scrollY, ($scrollY) =>  {
        const threshold = 1100
        if($scrollY > threshold){
            console.log('threshold met!')
            return ($scrollY - threshold) * 0.19
        } else{
            return 0;
        }
    })
</script>

<div class="flex flex-col h-full w-full justify-center items-center mt-4 lg:gap-40 gap-14" in:fade={{ duration: 500, delay: 300 }} >
    <div id="beautifulCont" class="flex md:flex-row flex-col w-full justify-start items-end px-6 pt-16 " >
        <div class="flex flex-1 w-full ">
            <div class={lgTextCont}>
                <div id="headline" class={lgTextClass}>
                    BEAUTIFUL, RESPONSIVE WEB AND MOBILE APPLICATIONS.
                </div>
            </div>
        </div>
    </div>
    <div id="joshuaCont" class="flex lg:flex-row flex-col w-full md:justify-between sm:items-end lg:items-center items-center px-6 gap-20 overflow-hidden">
        <div id="nameCont" class="flex flex-col md:w-min min-w-1/2 w-full h-[180px] sm:h-[310px] justify-center">
            <div class="flex flex-col lg:text-start text-end sm:text-[100px] text-[60px] space-x-2 overflow-hidden">
                <div class="animate-in slide-in-from-bottom duration-1200" class:hidden={$scrollY < 70} class:running={$scrollY > $scrollThreshold} class:paused={$scrollY <= $scrollThreshold}>
                    JOSHUA
                </div>
            </div>
            <div class="flex flex-col lg:text-start text-end sm:text-[100px] text-[60px] space-x-2 overflow-hidden">
                <div class="animate-in slide-in-from-bottom duration-1500" class:hidden={$scrollY < 70} class:running={$scrollY > $scrollThreshold} class:paused={$scrollY <= $scrollThreshold}>
                    LILIENTHAL
                </div>
            </div>
        </div>
        <div id="firstPhotoCont" class="relative flex rounded-4xl overflow-hidden">
            <img class="object-contain" src="/images/pointing-cropped.png" alt="People Pointing at a Laptop Screen"/>
        </div>
    </div>
    <div id="modernCont" class="flex lg:flex-row flex-col-reverse w-full justify-end items-center px-6 gap-6">
        <div class="flex flex-1 w-full justify-end items-end">
            <div class="text-[30px] md:text-[38px] lg:text-[30px] 2xl:text-[42px] md:w-2/3 text-end">
                MODERN FRONTEND FRAMEWORKS AND SCALABLE BACKEND SOLUTIONS&nbsp;— <br> DYNAMIC APPLICATIONS, INTUITIVE INTERFACES, AND ROBUST INFRASTRUCTURE. SPANNING REACT, NEXT.JS, SVELTE, NODE.JS, AND GRAPHQL.
            </div>
        </div>
    </div>
    <div id="everyDigitalCont" class="flex flex-1 w-full justify-end lg:justify-start px-6 bg-black" style="background-color: rgba(0, 0, 0, {$bgOpacity / 100});">
        <div class={lgTextCont +" h-screen items-end flex"}>
            <div class={lgTextClass + " text-end lg:text-start text-white"}>
                EVERY DIGITAL EXPERIENCE SHOULD BE BEAUTIFUL AND FUNCTIONAL.
            </div>
        </div>
    </div>
</div>