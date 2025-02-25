<script lang="ts">
    import { bgDim } from "../../store"

    export let contClass:string = ""
    export let url:string = ""
    export let imgSrc:string = ""  
    export let imgAlt:string = ""
    export let imgClass:string = ""
    export let titleClass:string = ""
    export let titleContent:string = ""
    export let descriptClass:string = ""
    export let descriptContent:string = ""

    function disableLongPress(event: TouchEvent | MouseEvent) {
        event.preventDefault();
    }

    let expanded = false;
</script>

<div class={contClass + " relative flex flex-col w-min justify-center rounded-3xl m-2 pb-2"} class:bg-slate-300={expanded}>
    <div class="relative overflow-hidden w-full duration-500 rounded-3xl"
        class:notExpanded={!expanded}
        class:expanded={expanded}
        role="img"
        on:mouseenter={() => {
            expanded = true;
            bgDim.set(true);
        }}
        on:mouseleave={() => {
            expanded = false;
            bgDim.set(false);
            }}
        on:touchstart={() => {
            expanded = true;
            bgDim.set(true);
        }}
        on:touchend={() => {
            expanded = false;
            bgDim.set(false);
        }}
        on:contextmenu={disableLongPress}
        on:touchstart={disableLongPress} >
        <a href={url}>
            <img class={imgClass + "object-cover w-full h-full"} src={imgSrc} alt={imgAlt}/>
        </a>
    </div>
    <div id="title" class={titleClass + " flex items-center justify-center duration-500"} >
        {titleContent}
    </div>
    <div id="Description" class={descriptClass + " flex items-center justify-center text-center duration-500 px-2"} >
        {descriptContent}
    </div>
</div>

<style>
    .notExpanded {
        height: 200px;
        width: 333px;
    }

    .expanded {
        height: 300px;
        width: 600px;
    }

    @media (max-width: 768px) {
        .notExpanded {
            height: 150px;
            width: 250px;
        }

        .expanded {
            height: 220px;
            width: 90vw;
        }
    }
</style>
