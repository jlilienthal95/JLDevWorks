<script>
	import { onDestroy, onMount } from "svelte";
	import { toggleHeader } from "../../store";
	import { fade, fly, slide } from "svelte/transition";
	import { circIn } from "svelte/easing";

    onMount(() => {
        toggleHeader.set(false);
    })
    
    onDestroy(() => {
        toggleHeader.set(true);
    })

    const lgTextClass = "text-[35px] sm:text-[60px] md:text-[70px] xl:text-[92px]"
    const splitTextClass = "text-[55px] sm:text-[70px]"
</script>

<div id="bgCont" class="w-full h-screen absolute top-0 bg-black text-white" transition:slide={{ duration: 1000, easing: circIn}}>
    <div id="contentCont" class="flex flex-col w-full h-screen justify-between" transition:fade={{ delay: 1000, duration: 1000}}>
        <div id="uiRowCont" class="flex flex-row w-full justify-end ">
            <div id="xCont" class="lg:pr-6 pt-10">
                <a href="/" aria-label="home">
                    <svg class="lg:h-[15vh] md:h-[12vh] h-[8vh]" xmlns="http://www.w3.org/2000/svg" width="20vh" height="20vh" viewBox="0 0 512 512" {...$$props}><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416a208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-81-337c-9.4 9.4-9.4 24.6 0 33.9l47 47l-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47l47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47l-47-47c-9.4-9.4-24.6-9.4-33.9 0"/></svg>
                </a>
            </div>
        </div>
        <div class="flex h-full justify-center xl:justify-start xl:items-end items-center">
            <div id="contactCont" class="flex flex-col w-min md:px-16 px-10 h-min gap-10">
                <div id="scenariosCont" class="flex flex-row justify-around text-xl">
                    <div>
                        Collaborate
                    </div>
                    <div>
                        Chat
                    </div>
                    <div>
                        Hire me
                    </div>
                </div>
                <div id="emailCont" class="mb-10">
                    <a href="mailto:JLDevWorks@gmail.com">
                        <div id="email" class={lgTextClass + " hidden lg:flex underline underline-offset-10 hover:no-underline"}>
                            JLDEVWORKS@GMAIL.COM
                        </div>
                        <div id="emailSplitCont" class="lg:hidden flex flex-col items-center underline underline-offset-10">
                            <div class={splitTextClass}>
                                JLDEVWORKS
                            </div>
                            <!-- <div class={splitTextClass}>
                                WORKS
                            </div> -->
                            <div class={splitTextClass}>
                                @GMAIL.COM
                            </div>
                            <!-- <div class={splitTextClass}>
                                .COM
                            </div> -->
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>