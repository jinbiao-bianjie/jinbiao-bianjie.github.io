export default async ({
	Vue,
	options,
	router,
	siteData,
	isServer,
}) => {
	if(!isServer){
		await import('vue-awesome-swiper').then( module => {
			Vue.use(module.default)
		}).catch(e => {
			console.log()
		})
	}
}
