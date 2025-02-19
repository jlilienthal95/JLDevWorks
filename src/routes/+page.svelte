<script>
    const lgTextCont = "md:w-2/3 w-full"
    const lgTextClass = "text-[50px] md:text-[75px] xl:text-[100px]"
    const smTextClass = "text-[18px] sm:text-[32px] md:text-[38px] lg:text-[30px] xl:text-[38px]"

    let expanded = false;
</script>

<div class="flex flex-col flex-1 h-full w-full justify-center items-center mt-4 gap-10">
    <div id="headlineFormat" class="flex md:flex-row flex-col w-full justify-start items-center">
        <div id="headlineCont" class="flex flex-1 w-full">
            <div class={lgTextCont}>
                <div id="headline" class={lgTextClass}>
                    BEAUTIFUL, RESPONSIVE WEB AND MOBILE APPLICATIONS.
                </div>
            </div>
            <!-- <div class='flex flex-col md:gap-y-8 gap-y-2 text-2xl'>
                <div class="text-4xl italic font-jost">
                    Beautiful, responsive web & mobile applications.
                </div>
                <div>Need a skilled developer to bring your idea to life? Whether it’s a dynamic website, a high-performance mobile app, or a custom software solution, I can help.
                    <br/><br/>
                    I’m Joshua, a Full Stack Software Engineer specializing in modern, accessible web and application development. I build sleek, responsive frontends using React, Next.js, and Svelte, and craft scalable, high-performance backends with Node.js and Express. From intuitive user interfaces to rock-solid backend architecture, I ensure seamless, efficient, and reliable experiences across all platforms.
                    <br/><br/>
                    If you need a website that stands out, a mobile app that engages users, or a custom software solution tailored to your business, I’m here to help.
                    <br/><br/>
                    Let’s bring your vision to life. Reach out today!
                </div>
            </div> -->
        </div>
    </div>
    <div id="joshuaCont" class="flex lg:flex-row flex-col w-full md:justify-between sm:items-end items-center gap-20">
        <div class="flex sm:text-start text-end sm:text-[100px] text-[60px] underline">
            JOSHUA<br>LILIENTHAL
        </div>
        <div id="joshuaPhotoContainer" class="flex">
            <img class="object-contain rounded-4xl max-h-120" src="/images/profile pic.jpeg" alt="Joshua Lilienthal | Fullstack Engineer"/>
        </div>
    </div>
    <div id="intersectionCont" class="flex flex-1 lg:flex-row flex-col w-full gap-4">        
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
    </div>
    <div id="unnamedCont" class="flex lg:flex-row flex-col w-full md:h-[750px] h-[450px] justify-center lg:items-center gap-20">
        <div
            id="photoContainer"
            class="relative overflow-hidden w-full transition-all duration-500 ease-in-out"
            class:h-[200px]={!expanded}
            class:h-[400px]={expanded}
            class:md:h-[300px]={!expanded}
            class:md:h-[700px]={expanded}
            role="img"
            aria-label="Image of Joshua Lilienthal | Fullstack Engineer"
            on:mouseenter={() => expanded = true}
            on:mouseleave={() => expanded = false}
            on:touchstart={() => expanded = true}
            on:touchend={() => expanded = false}
        >
            <img
                class="object-cover rounded-4xl w-full h-full"
                src="/images/phoneFall.jpg"
                alt="Joshua Lilienthal | Fullstack Engineer"
                style="transform: scale(0.9);"
            />
      </div>
      <div>
        Content underneath animated photo
      </div>
    </div>
</div>

<style>
    .image-wrapper {
      transition: height 0.4s ease-in-out;
    }
  </style>