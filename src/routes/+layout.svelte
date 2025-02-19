<script lang="ts">
	import '../app.css';
	let { children } = $props();

	const linkClass = "hover:opacity-60"
	const liClass = "lg:after:content-['|'] md:after:ml-4 last:after:content-none"
</script>

<div class="relative min-h-screen h-auto w-full bg-cover bg-blue-50 font-bold">
	<div id="header" class="flex flex-row fixed w-full md:h-42 h-30 justify-between items-center lg:px-40 pr-12 z-100 bg-gradient-to-b to-transparent from-black/30 backdrop-blur-xs">
		<div id="logo" class="h-full">
			<img class="h-full max-h-full object-contain" src='/JLDevWorksLogo.png' alt="JL DevWorks"/>
		</div>
		<ul class="flex lg:flex-row flex-col md:gap-4" id="links">
			<li class={liClass} id="about">
				About
			</li>
			<li class={liClass} id="recentWork">
				Recent Products
			</li>
			<li class={liClass} id="contact">
				Contact
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
	<div class="relative flex flex-col justify-center items-center pt-60 flex-1 px-6">
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