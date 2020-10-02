<template>
	<div id="app">
		<div id="wrapper">
			<div class="preloader">
				<div class="cssload-speeding-wheel"></div>
			</div>

			<Navbar />

			<Sidebar />

			<router-view/>

		
		
		</div>
	
	</div>
</template>

<script>
import '../assets/js/custom.js'
import '../assets/css/style.css'

import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
//import RightSidebar from '@/components/RightSidebar'
//import commonmodal from "@/components/commonmodal.vue";
//import commonfooter from "@/components/footer.vue";

import axios from 'axios'


export default {
	name: 'app',
	data() {
		return {
		
		}
	},
	methods: {
	
	},
	mounted() {

		    
		
		$('.slimscrollright').slimScroll({
				height: '100%',
				position: 'right',
				size: "5px",
				color: '#dcdcdc',
				
		});
		$('.scroll-sidebar').slimScroll({
				position: 'right',
				size: "5px",
				height: '100%',
				color: '#dcdcdc',
		});
		$('.slimscrollsidebar').slimScroll({
				height: '100%',
				position: 'right',
				size: "5px",
				color: '#dcdcdc',
		});
		$('.chat-list').slimScroll({
				height: '100%',
				position: 'right',
				size: "5px",
				color: '#dcdcdc',
		});
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