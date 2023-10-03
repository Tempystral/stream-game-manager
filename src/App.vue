<script setup lang="ts">
import localforage from 'localforage';
import { getLocalForageSafe } from './ts/util';

// Ensure localforage is set up before anything else
localforage.config({
	name: localstoreTitle,
	storeName: localstoreName
});

// Use Pinia Store
// const store = useStore()

// Load data
getLocalForageSafe("duties").then(res => {
	if (res.success == true) {
		const data = res.value;
		// Do something
	}
	else {
		console.log(res.error)
	}
});

// Subscribe to state changes app-wide
/* store.$subscribe((_, state) => {
	localforage.setItem("duties", JSON.stringify(state));
}); */

</script>

<template lang="pug">
Navbar(@openModal="toggleModal")

//- Renders the contents returned by the vue router
router-view
</template>

<style lang="scss">
@use "/assets/sass/style.scss" as *;
</style>
