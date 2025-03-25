<script>
    import Portfolio from "$lib/components/Portfolio.svelte";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";
    import { slide } from 'svelte/transition';

    let delayDone = [false, false, false, false]; // Array to track each letter's delay
    
    const minDelay = 700
    const delays = [minDelay, minDelay + 500, minDelay + 1000, minDelay + 1500]; // Custom delay times for each letter

    onMount(() => {
        delays.forEach((d, i) => {
            setTimeout(() => {
                delayDone[i] = true;
            }, d);
        });
    });
</script>

<div class="flex lg:flex-row flex-col w-full items-start" in:fade={{ duration: 500 }} out:slide={{ duration: 1500 }} >
    <div id="headline" class="flex w-full h-max justify-center items-center pb-6 overflow-hidden">
        <div class="hidden lg:flex flex-row lg:flex-col text-[50px] sm:text-[60px] md:text-[72px] xl:text-[92px] h-[55px] lg:h-fit items-center justify-center overflow-hidden">
            {#each ['W', 'O', 'R', 'K'] as letter, i}
                <div 
                    class="animate-in slide-in-left duration-1000" 
                    class:block={delayDone[i]} 
                    class:hidden={!delayDone[i]}>
                    {letter}
                </div>
            {/each}
        </div>
        <div out:fade={{ duration: 100}} class="flex lg:hidden flex-row text-[50px] sm:text-[60px] md:text-[72px] h-[55px] items-center justify-center overflow-hidden animate-in slide-in-bottom duration-1000">
            WORK
        </div>
    </div>
    <div id="portfolioContainer" class="flex flex-1 justify-center items-center w-full h-full xl:mt-[12vh] lg:mt-[6vh] lg:mb-0 mb-20 ">
        <div class="flex flex-col lg:flex-row lg:gap-24 gap-10 w-[90vw] h-full overflow-x-scroll overflow-y-visible justify-center lg:items-start items-center scroll-container">
            <Portfolio imgSrc="/portfolio/PortfolioGallery.png" imgAlt="PortfolioGallery" titleClass="text-black text-2xl" titleContent="Portfolio Gallery" descriptContent="This one is for the artists. Works are showcased through a stylish looping gallery, allowing users to scroll endlessly. Upload your own pics in this demo!" url="https://portfolio-gallery-rho.vercel.app/"/>
            <Portfolio imgSrc="/portfolio/JBTravel.png" imgAlt="JB Travel" titleClass="text-black text-2xl" titleContent="JB Travel" descriptContent="Featuring a beautiful looping video, full screen scroll-snapping UI frames, and a robust single-page design utilizing Next.js and React." url="https://www.jbtravel.co"/>
            <Portfolio imgSrc="/portfolio/SvariaHome.png" imgAlt="SvARIA" titleClass="text-black text-2xl" titleContent="SvARIA" descriptContent="More than just a website—it’s a mission to enhance the development of accessible apps through a powerful, ARIA-compliant component library for Svelte, built for speed and inclusivity." url="https://www.svaria.org"/>
        </div>
    </div>
</div>

<style>
    /* Hide scrollbar for Chrome, Safari, and Edge */
    .scroll-container::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for Firefox */
    .scroll-container {
        scrollbar-width: none;
        -ms-overflow-style: none; /* IE/Edge */
    }

    .slide-in-left {
        --tw-enter-translate-x: -160%;
    }

    .slide-in-bottom {
        --tw-enter-translate-y: -160%;
    }
</style>