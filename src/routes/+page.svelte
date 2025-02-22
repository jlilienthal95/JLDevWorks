<script lang='ts'>
    import { onDestroy, onMount } from 'svelte';
    import { scrollY, scrollThreshold, wiggle } from "../store.js";
	import { fade } from 'svelte/transition';
	import { page } from '$app/stores';

    //styling classes
    const lgTextCont = "md:w-2/3 w-full"
    const lgTextClass = "text-[50px] sm:text-[60px] md:text-[75px] xl:text-[100px]"
    const smTextClass = "text-[30px] md:text-[38px] lg:text-[30px] xl:text-[38px]"

    //current state of expanding image
    let expanded = false;

    //navigation variable
    let currentPath = $page.url.pathname;
    
    function disableLongPress(event: TouchEvent | MouseEvent) {
        event.preventDefault();
    }
    
    // Toggle the wiggle every 10 seconds
    const interval = setInterval(() => {
        // Start the wiggle animation
        wiggle.set(true);

        // Stop the animation after 1 second (animation duration)
        setTimeout(() => {
            wiggle.set(false);
        }, 1000); // animation duration
    }, 10000); // 10 seconds interval

    // Clear the interval when the component is destroyed to avoid memory leaks
    onDestroy(() => {
        clearInterval(interval);
    });

    onMount(() => {
        console.log('currentPath:', currentPath);
    })
</script>

{#if currentPath === "/"}
    <div class="flex flex-col flex-1 h-full w-full justify-center items-center mt-4 lg:gap-40 gap-14" transition:fade>
        <div id="beautifulCont" class="pt-16 flex md:flex-row flex-col w-full justify-start items-center">
            <div class="flex flex-1 w-full ">
                <div class={lgTextCont}>
                    <div id="headline" class={lgTextClass}>
                        BEAUTIFUL, RESPONSIVE WEB AND MOBILE APPLICATIONS.
                    </div>
                </div>
            </div>
        </div>
        <div id="joshuaCont" class="flex lg:flex-row flex-col w-full md:justify-between sm:items-end lg:items-center items-center gap-20 overflow-hidden">
            <div id="nameCont" class="flex flex-col w-full h-[180px] sm:h-[310px] justify-center">
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
            <div id="firstPhotoCont" class="flex">
                <img class="object-contain rounded-4xl max-h-160 {$wiggle ? "animate-spring" : ""}" src="/images/keyboard-wide.jpg" alt="Joshua Lilienthal | Fullstack Engineer"/>
            </div>
        </div>
        <!-- <div id="intersectionCont" class="flex flex-1 lg:flex-row flex-col w-full gap-14">        
            <div class="flex flex-1 md:justify-start">
                <div class={lgTextClass + " text-neutral-600"} id="gallery">
                    AT THE INTERSECTION OF TECHNOLOGY AND CREATIVITY&nbsp;—
                </div>
            </div>
            <div id="buildingIntCont" class="xl:w-1/3 lg:w-1/3 text-end">
                <div id="buildingInt" class={smTextClass}>
                    BUILDING INTUITIVE, ACCESSIBLE, AND HIGH-PERFORMANCE APPLICATIONS. WHETHER IT’S CRAFTING SLEEK UIS OR ARCHITECTING SCALABLE BACKENDS, I FOCUS ON CREATING SEAMLESS USER EXPERIENCES.
                </div>
            </div>
        </div> -->
        <div id="modernCont" class="flex lg:flex-row flex-col-reverse w-full justify-end items-center gap-6">
            <div class="flex flex-1 w-full justify-end items-end">
                <div class="text-[30px] md:text-[38px] lg:text-[30px] 2xl:text-[42px] md:w-2/3 text-end">
                    MODERN FRONTEND FRAMEWORKS AND SCALABLE BACKEND SOLUTIONS&nbsp;— <br> DYNAMIC APPLICATIONS, INTUITIVE INTERFACES, AND ROBUST INFRASTRUCTURE. SPANNING REACT, NEXT.JS, SVELTE, NODE.JS, AND GRAPHQL.
                </div>
            </div>
            <!-- <div id="secondPhotoCont" class="relative flex lg:flex-2 md:h-[700px] h-[400px] items-center w-full">
                <div class="absolute lg:top-10 top-4 lg:left-10 left-4">
                    <div class="flex flex-row + {lgTextClass} items-center">
                        WELCOME
                        <svg class="" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 21 21" {...$$props}><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m6.5 13.499l4 4.001l4-4.001m-4 4.001v-13"/></svg>
                    </div>
                </div>
                <div
                    id="stretchContainer"
                    class="relative overflow-hidden w-full transition-all duration-500 ease-in-out"
                    class:h-[200px]={!expanded}
                    class:h-[400px]={expanded}
                        class:md:h-[350px]={!expanded}
                    class:md:h-[700px]={expanded}
                    role="img"
                    aria-label="Image of Joshua Lilienthal | Fullstack Engineer"
                    on:mouseenter={() => expanded = true}
                    on:mouseleave={() => expanded = false}
                    on:touchstart={() => expanded = true}
                    on:touchend={() => expanded = false}
                    on:contextmenu={disableLongPress}
                    on:touchstart={disableLongPress}
                >
                    <img
                        class="object-cover rounded-4xl w-full h-full"
                        src="/images/phoneFall.jpg"
                        alt="Joshua Lilienthal | Fullstack Engineer"
                    />
                </div>
            </div> -->
        </div>
        <div id="everyDigitalCont" class="flex flex-1 w-full justify-end lg:justify-start">
            <div class={lgTextCont}>
                <div class={lgTextClass + " text-end lg:text-start"}>
                    EVERY DIGITAL EXPERIENCE SHOULD BE BEAUTIFUL AND FUNCTIONAL.
                </div>
            </div>
        </div>
    </div>
{/if}
{#if currentPath === "/about"}
    <div>
        About
    </div>
{/if}
