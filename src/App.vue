<template>
	<div id="app">
	
		
			<Navbar />

			<Sidebar />

			<router-view/>


		</div>
	

</template>
<script>
import $ from 'jquery'
import './assets/js/custom.js'
import './assets/css/style.css'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
//import RightSidebar from '@/components/RightSidebar'
//import commonmodal from "@/components/commonmodal.vue";
//import commonfooter from "@/components/footer.vue";

//import axios from 'axios'


export default {
	name: 'app',
	data() {
		return {
		
		}
	},
	methods: {
	
	},
	mounted() {

		  
	},
	created() {

		
	},
	components: {
		Navbar,
		Sidebar,
		//RightSidebar,
		//commonmodal,
		//commonfooter
	}
}
</script>

<style lang="scss">

</style>