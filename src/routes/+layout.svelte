<script lang="ts">
	import '../app.css';
	import { onMount } from "svelte";
	import { derived } from "svelte/store";
	import { scrollY, scrollThreshold, toggleHeader, bgDim } from '../store'; // Store scroll position
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';

	let { children } = $props();

	const liClass = "animate-in fade-in duration-2000"

	//variables and state for header and scroll tracking
  	const maxHeight = 200; // Max header height
  	const minHeight = 60;  // Min header height

	const shrinkRate = 0.6
	// Reactive height calculation
	const headerHeight = derived(scrollY, ($scrollY) => Math.max(minHeight, maxHeight - $scrollY * shrinkRate));
	const headerThreshold = maxHeight - minHeight / shrinkRate;

	//get currentPath to check if header should appear
	let currentPath = derived(page, ($page) =>  $page.url.pathname);

	//disables contextmenues on images
	function disableLongPress(event: TouchEvent | MouseEvent) {
        event.preventDefault();
    }

	onMount(() => {
		const handleScroll = () => {
			scrollY.set(window.scrollY)
			// Adjust threshold based on screen width
			console.log('innerWidth:', window.innerWidth, "scrollY:", window.scrollY);
			console.log('currentPath:', currentPath);
			if (window.innerWidth < 768) {
        		scrollThreshold.set(150); // Lower threshold for mobile
      		} else {
        		scrollThreshold.set(300); // Default threshold
      		}
			if($scrollY + window.innerHeight >= document.documentElement.scrollHeight && $currentPath === "/"){
				console.log('no header')
				toggleHeader.set(false);
			} else{
				toggleHeader.set(true);
			}
		};
		window.addEventListener('scroll', handleScroll);
		window.addEventListener("resize", handleScroll); // Recalculate on resize
		return () => {
				window.removeEventListener('scroll', handleScroll); // Cleanup func
			};
  		}
	);

</script>

<div class="relative min-h-screen h-auto w-full bg-cover font-bold duration-500"
	class:bg-blue-50={!$bgDim}
	class:bg-slate-500={$bgDim}>
	{#if $toggleHeader && $currentPath !== "/contact"}
		<div id="header" class="flex flex-row fixed w-full md:h-42 h-30 justify-between items-center lg:px-40 pr-4 z-100 bg-gradient-to-b to-transparent from-black/30 backdrop-blur-sm" style="height: {$headerHeight}px;">
			<div id="logo" class="relative h-full overflow-hidden justify-center">
				<a href="/" class="hover:opacity-60">
					<!-- <img class="h-full max-h-full object-contain animate-in slide-in-from-left duration-1000 delay-500" class:hidden={$scrollY >= 1}
						src='/JLDevWorksLogo.png'
						alt="JL DevWorks"
						oncontextmenu={disableLongPress}
						ontouchstart={disableLongPress}/> -->
					<img class="h-full max-h-full md:max-w-xs max-w-45 object-contain animate-in slide-in-from-bottom duration-1000"
						src='/JLDevWorksSimple.png'
						alt="JL DevWorks"
						oncontextmenu={disableLongPress}
						ontouchstart={disableLongPress}/>
				</a>
			</div>
			<ul in:fade={{ delay: 700 }} class="flex flex-row md:gap-4 gap-2 md:text-xl text-md items-center" id="links">
				<li class={liClass}>
					<div class={"animate-in slide-in-from-bottom duration-1500"} id="recentWork">
						<div class="animate-wiggle-hover">
							<a href="/work">
								Work
							</a>
						</div>
					</div>
				</li>
				<li class={liClass}>
					|
				</li>
				<li class={liClass}>
					<div class={"animate-in slide-in-from-bottom duration-2000"} id="contact">
						<div class="animate-wiggle-hover">
							<a href="/contact">
								Contact
							</a>
						</div>
					</div>
				</li>
				<li class={liClass}>
					|
				</li>
				<li class={liClass}>
					<div class="relative animate-in slide-in-from-bottom duration-2500 grayscale-60" id="socials">
						<div class=" relative flex flex-row h-fit w-fit items-center">
							<a href="https://www.linkedin.com/in/joshlilienthal/" target="_blank" aria-label="My LinkedIn" class="animate-wiggle-hover">
								<img src="./linkedin.png" alt="LinkedIn Logo" class="object-contain max-w-10"/>
							</a>
							<a href="https://github.com/jlilienthal95/" target="_blank" aria-label="My GitHub" class="animate-wiggle-hover">
								<img src="./github.png" alt="Github Logo" class="object-contain max-w-8"/>
							</a>
						</div>
					</div>
				</li>
			</ul>
			<!-- <div id= "contactInfo" class="md:flex flex-col hidden">
				<a href="tel:999999apps" class={linkClass}>
					<div id="phone">
						999-999-APPS
					</div>
				</a>
				<a href="mailto:JLDevWorks@gmail.com" class={linkClass}>
					<div id="email">
						JLDevWorks@gmail.com
					</div>
				</a>
			</div> -->
		</div>
	{/if}
	<div class="relative flex flex-col justify-center items-center pt-60 flex-1">
		{@render children()}
	</div>
</div>

<style>
	@font-face {
		font-family: 'Jost';
		src: url('/fonts/Jost-VariableFont_wght.ttf') format('truetype');
		font-weight: 300;
		font-style: normal;
  	}
	
</style>