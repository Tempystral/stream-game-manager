<script setup lang="ts">
import { ref } from "vue";
import data from "../assets/json/data.json";
import { Multiselect } from 'vue-multiselect';
import "vue-multiselect/dist/vue-multiselect.css";

const searchResponse: GiantBombResponse<GiantBombGamesList> = data;
const selected = ref({} as GiantBombGamesList);

const singleResponse = [{ value: "a", text: "a text" }];
const selectedSingle = ref("");

function formatSearchResult(result: GiantBombGamesList) {
	return `${result.name} - ${result?.aliases}`;
}
</script>

<template>
	<div>
		<p>{{ selected.name }} | {{ selected.guid }} | {{ selected.original_release_date || "Unknown" }} </p>
		<Multiselect v-model="selected"
			:options="searchResponse.results"
			:custom-label="formatSearchResult"
			:allow-empty="false"
			placeholder="Search for games..."
			label="game-selector"
			track-by="guid"
		/>

								 
		<!-- <ModelListSelect v-slot="slotProps" v-model="selected" :list="searchResponse.results" option-value="guid"
										 :custom-text="formatSearchResult" placeholder="Search">
			{{ slotProps.option.name }} - index: {{ slotProps.idx }}
		</ModelListSelect>

		<ModelSelect v-slot="slotProps" v-model="selectedSingle" :options="singleResponse">
			{{ slotProps.option.value }} - index: {{ slotProps.option.text }}
		</ModelSelect> -->
	</div>
</template>

<style lang="scss"></style>
