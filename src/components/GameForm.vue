<script setup lang="ts">
import { computed, ref } from "vue";
import data from "../assets/json/data.json";
import { Multiselect } from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.css";
import { GiantBombGamesList, GiantBombSearchResponse } from "../ts/types/giantbomb";

const searchResponse: GiantBombSearchResponse = data;
const selected = ref<GiantBombGamesList | null>(null);
const uniqueNames = computed(() => new Set(searchResponse.results?.map(r => r.name)));

function formatSearchResult(result: GiantBombGamesList) {
	return `${result.name}${formatAliases(result)} [${getPlatforms(result, 2)}] (${result.original_release_date || "???"})`;
}

function getPlatforms(option: GiantBombGamesList, limit: number): string[] | undefined {
	return option.platforms?.slice(0, limit).map(p => p.name);
}

function formatAliases(option: GiantBombGamesList) {
	if (option.aliases && option.name in uniqueNames.value) {
		return ` - (${option.aliases?.replaceAll("\n", ", ")})`; 
	} else {
		return ""; 
	}
}
</script>

<template>
	<div id="game-form" class="container">
		<div class="field">
			<label v-if="selected" class="label">{{ selected?.name }} | {{ selected?.guid }} | {{ selected?.original_release_date || "Unknown" }} </label>
			<label v-else class="label">No game selected</label>
			<div class="control">
				<Multiselect v-model="selected"
					:options="searchResponse.results"
					:custom-label="formatSearchResult"
					:allow-empty="false"
					placeholder="Search for games..."
					label="game-selector"
					track-by="guid"
				/>
			</div>
		</div>
	</div>

	<!-- 
					Game											(use games api)
			 description
		picture					platform 				(get from releases api also, sort by release date)
		picture 				release date 		(use releases api, filter by game ID)
		picture 				genre
		picture 				publisher

	 -->
</template>

<style lang="scss">
@import "node_modules/bulma/bulma.sass";

#game-form {
	background-color: lightslategrey;
}

</style>
