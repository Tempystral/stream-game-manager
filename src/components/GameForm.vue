<script setup lang="ts">
import { computed, ref } from "vue";
import data from "../assets/json/data.json";
import { Multiselect } from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.css";

const searchResponse: GiantBombResponse<GiantBombGamesList> = data;
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
	<div>
		<p v-if="selected">{{ selected?.name }} | {{ selected?.guid }} | {{ selected?.original_release_date || "Unknown" }} </p>
		<p v-else>No game selected</p>
		<Multiselect v-model="selected"
			:options="searchResponse.results"
			:custom-label="formatSearchResult"
			:allow-empty="false"
			placeholder="Search for games..."
			label="game-selector"
			track-by="guid"
		/>
	</div>
</template>

<style lang="scss"></style>
