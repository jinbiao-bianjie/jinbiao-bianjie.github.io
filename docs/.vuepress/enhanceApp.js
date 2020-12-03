import swiper  from "vue-awesome-swiper"
export default ({
	Vue,
	options,
	router,
	siteData
}) => {
	console.log(process,"环境")
	Vue.use(swiper)
	Vue.mixin({
		 mounted(){
			 import('vue-awesome-swiper').then( module => {
				 Vue.use(module)
			 }).catch(e => {
				 console.log(e)
			 })
		 }
	})
}
