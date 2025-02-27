<script>

	import { fade, fly, slide } from "svelte/transition";
	import { circIn } from "svelte/easing";

    // onMount(() => {
    //     toggleHeader.set(false);
    // })
    
    // onDestroy(() => {
    //     toggleHeader.set(true);
    // })

    const lgTextClass = "text-[35px] sm:text-[60px] md:text-[70px] xl:text-[92px]"
    const splitTextClass = "text-[55px] sm:text-[70px]"
    const underlineTransition = " after:absolute after:left-5 after:bottom-0 after:w-0 after:h-[5px] after:bg-current after:transition-all after:duration-300 hover:after:w-[98.5%] "
</script>

<div id="bgCont" class="w-full h-screen absolute top-0 bg-black text-slate-200" transition:slide={{ duration: 800, easing: circIn}}>
    <div id="contentCont" class="flex flex-col w-full h-screen justify-between" transition:fade={{ duration: 500 }}>
        <div id="uiRowCont" class="flex flex-row w-full justify-end">
            <div id="xCont" class="pt-10">
                <a href="/" aria-label="home">
                    <svg class="lg:h-[12vh] md:h-[10vh] h-[7vh]" xmlns="http://www.w3.org/2000/svg" width="20vh" height="20vh" viewBox="0 0 512 512" {...$$props}><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416a208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-81-337c-9.4 9.4-9.4 24.6 0 33.9l47 47l-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47l47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47l-47-47c-9.4-9.4-24.6-9.4-33.9 0"/></svg>
                </a>
            </div>
        </div>
        <div class="flex h-full justify-center xl:justify-start xl:items-end items-center">
            <div id="contactCont" class="flex flex-col w-min md:px-16 h-min gap-10">
                <div id="emailCont" class="">
                    <a href="mailto:JLDevWorks@gmail.com">
                        <div id="email" class={lgTextClass + underlineTransition + " hidden lg:flex relative text-4xl font-bold"}>
                            JLDEVWORKS@GMAIL.COM
                        </div>
                        <div id="emailSplitCont" class={"lg:hidden flex flex-col items-center relative animate-wiggleSm-hover"}>
                            <div class={splitTextClass}>
                                JLDEVWORKS
                            </div>
                            <div class={splitTextClass}>
                                @GMAIL.COM
                            </div>
                        </div>
                    </a>
                </div>
                <div id="scenariosCont" class="flex flex-row justify-around text-xl mb-10">
                    <div in:slide={{ delay: 1500, duration: 1000, axis: 'y' }}>
                        Collaborate
                    </div>
                    <div in:fade={{ delay: 1000, duration: 500 }}>
                        |
                    </div>
                    <div in:slide={{ delay: 1000, duration: 1000 }}>
                        Chat
                    </div>
                    <div in:fade={{ delay: 1000, duration: 500 }}>
                        |
                    </div>
                    <div in:slide={{ delay: 2000, duration: 1000 }}>
                        Hire me
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>