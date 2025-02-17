<script lang="ts">
  import type { Feature } from "geojson"
  import { Store, UIEventSource } from "../../Logic/UIEventSource"
  import LayerConfig from "../../Models/ThemeConfig/LayerConfig"
  import type { SpecialVisualizationState } from "../SpecialVisualization"
  import TagRenderingAnswer from "../Popup/TagRendering/TagRenderingAnswer.svelte"
  import Translations from "../i18n/Translations"
  import Tr from "../Base/Tr.svelte"
  import { XCircleIcon } from "@rgossiaux/svelte-heroicons/solid"
  import { ariaLabel } from "../../Utils/ariaLabel"

  export let state: SpecialVisualizationState
  export let layer: LayerConfig
  export let selectedElement: Feature
  let tags: UIEventSource<Record<string, string>> = state.featureProperties.getStore(
    selectedElement.properties.id,
  )
  $: {
    tags = state.featureProperties.getStore(selectedElement.properties.id)
  }

  let metatags: Store<Record<string, string>> = state.userRelatedState.preferencesAsTags
</script>

{#if $tags._deleted === "yes"}
  <Tr t={Translations.t.delete.isDeleted} />
{:else}
  <div class="low-interaction border-b-2 border-black px-3 drop-shadow-md flex">
    <div class="h-fit overflow-auto w-full sm:p-2" style="max-height: 20vh;">
      <div class="flex flex-col flex-grow w-full h-full ">
        <!-- Title element and  title icons-->
        <h3 class="m-0">
          <a href={`#${$tags.id}`}>
            <TagRenderingAnswer config={layer.title} {selectedElement} {state} {tags} {layer} />
          </a>
        </h3>

        <div
          class="no-weblate title-icons links-as-button mr-2 flex flex-row flex-wrap items-center gap-x-0.5 pt-0.5 sm:pt-1"
        >
          {#each layer.titleIcons as titleIconConfig}
            {#if (titleIconConfig.condition?.matchesProperties($tags) ?? true) && (titleIconConfig.metacondition?.matchesProperties({ ...$metatags, ...$tags }) ?? true) && titleIconConfig.IsKnown($tags)}
              <div class={titleIconConfig.renderIconClass ?? "flex h-8 w-8 items-center"}>
                <TagRenderingAnswer
                  config={titleIconConfig}
                  {tags}
                  {selectedElement}
                  {state}
                  {layer}
                  extraClasses="h-full justify-center"
                />
              </div>
            {/if}
          {/each}
        </div>
      </div>
    </div>

    <button
      on:click={() => state.selectedElement.setData(undefined)}
      use:ariaLabel={Translations.t.general.backToMap}
      class="rounded-full border-none p-0 shrink-0 h-fit mt-2"
      style="border: 0 !important; padding: 0 !important;"
    >
      <XCircleIcon aria-hidden={true} class="h-8 w-8" />
    </button>

  </div>
{/if}

<style>
    :global(.title-icons a) {
        display: block !important;
    }
</style>
