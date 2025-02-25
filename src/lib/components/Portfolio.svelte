<script lang="ts">
    import { bgDim } from "../../store"

    export let contClass:string = ""
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

<div class={contClass + " relative flex flex-col w-min justify-center"}>
    <div class="relative overflow-hidden w-full duration-500 rounded-xl"
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
        <img class={imgClass + "object-cover w-full h-full"} src={imgSrc} alt={imgAlt}/>
    </div>
    <div id="title" class={titleClass + " flex items-center justify-center"}>
        {titleContent}
    </div>
    <div id="Description" class={descriptClass + " flex items-center justify-center text-center px-3 pb-3 duration-500"} >
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
