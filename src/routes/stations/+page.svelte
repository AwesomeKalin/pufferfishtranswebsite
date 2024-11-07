<script>
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';
	import atlantisracecourse1 from '$lib/images/2024/11/2024-11-07_18.23.08.png?enhanced';
	import atlantisracecourse2 from '$lib/images/2024/11/2024-11-07_18.23.19.png?enhanced';
	import atlantisracecourse3 from '$lib/images/2024/11/2024-11-07_18.23.48.png?enhanced';
	import avantrapines1 from '$lib/images/2024/11/2024-11-07_18.59.21.png?enhanced';
	import avantrapines2 from '$lib/images/2024/11/2024-11-07_18.59.46.png?enhanced';
	import avantrapines3 from '$lib/images/2024/11/2024-11-07_19.00.29.png?enhanced';
	import newbayswater1 from '$lib/images/2024/11/2024-11-07_19.01.18.png?enhanced';
	import newbayswater2 from '$lib/images/2024/11/2024-11-07_19.01.21.png?enhanced';
	import newbayswater3 from '$lib/images/2024/11/2024-11-07_19.02.13.png?enhanced';
	import newbayswater4 from '$lib/images/2024/11/2024-11-07_19.02.25.png?enhanced';
	import spawnhsrterminal1 from '$lib/images/2024/11/2024-11-07_19.07.04.png?enhanced';
	import spawnhsrterminal2 from '$lib/images/2024/11/2024-11-07_19.07.12.png?enhanced';
	import spawnhsrterminal3 from '$lib/images/2024/11/2024-11-07_19.07.23.png?enhanced';
	import purplenaturereserve1 from '$lib/images/2024/11/2024-11-07_19.10.13.png?enhanced';
	import purplenaturereserve2 from '$lib/images/2024/11/2024-11-07_19.10.24.png?enhanced';
	import purplenaturereserve3 from '$lib/images/2024/11/2024-11-07_19.11.19.png?enhanced';
	import purplenaturereserve4 from '$lib/images/2024/11/2024-11-07_19.11.39.png?enhanced';
	import purplenaturereserve5 from '$lib/images/2024/11/2024-11-07_19.11.44.png?enhanced';

	onMount(() => {
		let atlantisracecourse = new PhotoSwipeLightbox({
			gallery: '#atlantisracecourse',
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		atlantisracecourse.init();

		let avantrapines = new PhotoSwipeLightbox({
			gallery: '#avantrapines',
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		avantrapines.init();

		let newbayswater = new PhotoSwipeLightbox({
			gallery: '#newbayswater',
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		newbayswater.init();

		let spawnhsrterminal = new PhotoSwipeLightbox({
			gallery: '#spawnhsrterminal',
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		spawnhsrterminal.init();

		let purplenaturereserve = new PhotoSwipeLightbox({
			gallery: '#purplenaturereserve',
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		purplenaturereserve.init();
	});
</script>

<h2 class="mb-4 text-center text-3xl font-bold">Our Stations</h2>
<p class="mb-6 text-center">A list of all stations that we serve!</p>
<br />

<h3 class="mb-3 text-2xl font-semibold">Atlantis Racecourse</h3>
<div class="pswp-gallery flex space-x-3" id="atlantisracecourse">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={atlantisracecourse1.img.src}
		data-pswp-width={atlantisracecourse1.img.w}
		data-pswp-height={atlantisracecourse1.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={atlantisracecourse1} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={atlantisracecourse3.img.src}
		data-pswp-width={atlantisracecourse3.img.w}
		data-pswp-height={atlantisracecourse3.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={atlantisracecourse3} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={atlantisracecourse2.img.src}
		data-pswp-width={atlantisracecourse2.img.w}
		data-pswp-height={atlantisracecourse2.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={atlantisracecourse2} />
	</a>
</div>
<br />
<h3 class="mb-3 text-2xl font-semibold">Avantra Pines</h3>
<div class="pswp-gallery flex space-x-3" id="avantrapines">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={avantrapines1.img.src}
		data-pswp-width={avantrapines1.img.w}
		data-pswp-height={avantrapines1.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={avantrapines1} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={avantrapines2.img.src}
		data-pswp-width={avantrapines2.img.w}
		data-pswp-height={avantrapines2.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={avantrapines2} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={avantrapines3.img.src}
		data-pswp-width={avantrapines3.img.w}
		data-pswp-height={avantrapines3.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={avantrapines3} />
	</a>
</div>
<br />
<h3 class="mb-3 text-2xl font-semibold">New Bayswater</h3>
<div class="pswp-gallery flex space-x-3" id="newbayswater">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={newbayswater1.img.src}
		data-pswp-width={newbayswater1.img.w}
		data-pswp-height={newbayswater1.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={newbayswater1} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={newbayswater2.img.src}
		data-pswp-width={newbayswater2.img.w}
		data-pswp-height={newbayswater2.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={newbayswater2} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={newbayswater3.img.src}
		data-pswp-width={newbayswater3.img.w}
		data-pswp-height={newbayswater3.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={newbayswater3} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={newbayswater4.img.src}
		data-pswp-width={newbayswater4.img.w}
		data-pswp-height={newbayswater4.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={newbayswater4} />
	</a>
</div>
<br />
<h3 class="mb-3 text-2xl font-semibold">Purple Nature Reserve</h3>
<div class="pswp-gallery flex space-x-3" id="purplenaturereserve">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve1.img.src}
		data-pswp-width={purplenaturereserve1.img.w}
		data-pswp-height={purplenaturereserve1.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={purplenaturereserve1} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve2.img.src}
		data-pswp-width={purplenaturereserve2.img.w}
		data-pswp-height={purplenaturereserve2.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={purplenaturereserve2} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve3.img.src}
		data-pswp-width={purplenaturereserve3.img.w}
		data-pswp-height={purplenaturereserve3.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={purplenaturereserve3} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve4.img.src}
		data-pswp-width={purplenaturereserve4.img.w}
		data-pswp-height={purplenaturereserve4.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={purplenaturereserve4} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve5.img.src}
		data-pswp-width={purplenaturereserve5.img.w}
		data-pswp-height={purplenaturereserve5.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={purplenaturereserve5} />
	</a>
</div>
<br />
<h3 class="mb-3 text-2xl font-semibold">Spawn HSR Terminal</h3>
<div class="pswp-gallery flex space-x-3" id="spawnhsrterminal">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={spawnhsrterminal1.img.src}
		data-pswp-width={spawnhsrterminal1.img.w}
		data-pswp-height={spawnhsrterminal1.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={spawnhsrterminal1} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={spawnhsrterminal2.img.src}
		data-pswp-width={spawnhsrterminal2.img.w}
		data-pswp-height={spawnhsrterminal2.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={spawnhsrterminal2} />
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={spawnhsrterminal3.img.src}
		data-pswp-width={spawnhsrterminal3.img.w}
		data-pswp-height={spawnhsrterminal3.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img src={spawnhsrterminal3} />
	</a>
</div>
