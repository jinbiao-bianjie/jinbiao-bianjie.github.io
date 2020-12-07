export default ({
	Vue,
	options,
	router,
	siteData,
	isServer,
}) => {
	if(!isServer){
		import('vue-awesome-swiper').then( module => {
			Vue.use(module.default)
		}).catch(e => {
			console.log()
		})
	}
}
