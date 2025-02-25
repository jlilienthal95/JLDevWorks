<script>
    import Portfolio from "$lib/components/Portfolio.svelte";
	import { fade } from "svelte/transition";
</script>

<div class="flex lg:flex-row flex-col w-full items-start" transition:fade>
    <div id="headline" class="flex w-full h-max justify-center items-center">
        <div class="text-[50px] sm:text-[60px] md:text-[72px] xl:text-[92px] vertical-rl" style="text-orientation: upright;">
            WORK
        </div>
    </div>
    <div id="portfolioContainer" class="flex flex-1 justify-center items-center w-full h-full xl:mt-[12vh] lg:mt-[6vh] lg:mb-0 mb-20">
        <div class="flex flex-col lg:flex-row lg:gap-24 gap-10 w-[90vw] h-full overflow-x-scroll overflow-y-visible justify-center lg:items-start items-center scroll-container">
            <Portfolio imgSrc="/portfolio/SvariaHome.png" imgAlt="SvARIA" titleClass="text-black text-2xl" titleContent="SvARIA" descriptContent="SvARIA is more than just a website - it's a mission to enhance development of accessible apps built on the fastest growing front-end framework in 2025: Svelte."/>
            <Portfolio imgSrc="/portfolio/JBTravel.png" imgAlt="JB Travel" titleClass="text-black text-2xl" titleContent="JB Travel" descriptContent="JB Travel showcases a beautiful looping video, full screen scroll-snapping UI frames, and a robust SPA design utilizing Next.js and React."/>
        </div>
    </div>
</div>

<style>
    .vertical-rl {
        writing-mode: horizontal-tb;
    }

    @media (min-width: 1024px) { /* lg breakpoint */
        .vertical-rl {
            writing-mode: vertical-rl;
        }
    }

    /* Hide scrollbar for Chrome, Safari, and Edge */
    .scroll-container::-webkit-scrollbar {
        display: none;
    }

    /* Hide scrollbar for Firefox */
    .scroll-container {
        scrollbar-width: none;
        -ms-overflow-style: none; /* IE/Edge */
    }
</style>