<template>
	<div>
		<Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar"/>
		
		<div class="layout_container">
			<div class="layout_content">
				<Content class="title" slot-key="title"/>
			</div>
		</div>
		<div class="content_container">
			<Content/>
		</div>
	</div>
</template>

<script>
	import {resolveSidebarItems} from "../util";
	import Navbar from "../components/Navbar";
	export default {
		name: "TestLayout",
		components: {Navbar},
		data () {
			return {
			
			}
		},
		mounted(){
			console.log(this.$page)
		},
		computed: {
			
			shouldShowNavbar () {
				const { themeConfig } = this.$site
				const { frontmatter } = this.$page
				if (
					frontmatter.navbar === false
					|| themeConfig.navbar === false) {
					return false
				}
				return (
					this.$title
					|| themeConfig.logo
					|| themeConfig.repo
					|| themeConfig.nav
					|| this.$themeLocaleConfig.nav
				)
			},
			
			shouldShowSidebar () {
				const { frontmatter } = this.$page
				return (
					!frontmatter.home
					&& frontmatter.sidebar !== false
					&& this.sidebarItems.length
				)
			},
			
			sidebarItems () {
				return resolveSidebarItems(
					this.$page,
					this.$page.regularPath,
					this.$site,
					this.$localePath
				)
			},
			
			pageClasses () {
				const userPageClass = this.$page.frontmatter.pageClass
				return [
					{
						'no-navbar': !this.shouldShowNavbar,
						'sidebar-open': this.isSidebarOpen,
						'no-sidebar': !this.shouldShowSidebar
					},
					userPageClass
				]
			}
		},
		methods:{
			toggleSidebar (to) {
				this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen
				this.$emit('toggle-sidebar', this.isSidebarOpen)
			},
		}
	}
</script>

<style scoped lang="stylus">
	.layout_container
		width 100%
		height 100%
		display flex
		align-items center
		justify-content center
		.layout_content
			width 100%
			height: 600px
			background url("../public/information.svg") no-repeat center center
			background-size cover
			display flex
			align-items center
			justify-content center
	.title
		font-size 50px
		color #fff
	.content_container{
		max-width 1200px
		margin 0 auto
		padding-bottom 60px
	}
</style>
