<script>
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import { onMount } from 'svelte';
	//@ts-expect-error
	import atlantisracecourse1 from '$lib/images/2024/11/2024-11-07_18.23.08.png?enhanced&w=227;216;160;98';
	import atlantisracecourse1no from '$lib/images/2024/11/2024-11-07_18.23.08.png?enhanced';
	//@ts-expect-error
	import atlantisracecourse2 from '$lib/images/2024/11/2024-11-07_18.23.19.png?enhanced&w=227;216;160;98';
	import atlantisracecourse2no from '$lib/images/2024/11/2024-11-07_18.23.19.png?enhanced';
	//@ts-expect-error
	import atlantisracecourse3 from '$lib/images/2024/11/2024-11-07_18.23.48.png?enhanced&w=227;216;160;98';
	import atlantisracecourse3no from '$lib/images/2024/11/2024-11-07_18.23.48.png?enhanced';
	//@ts-expect-error
	import avantrapines1 from '$lib/images/2024/11/2024-11-07_18.59.21.png?enhanced&w=227;216;160;98';
	import avantrapines1no from '$lib/images/2024/11/2024-11-07_18.59.21.png?enhanced';
	//@ts-expect-error
	import avantrapines2 from '$lib/images/2024/11/2024-11-07_18.59.46.png?enhanced&w=227;216;160;98';
	import avantrapines2no from '$lib/images/2024/11/2024-11-07_18.59.46.png?enhanced';
	//@ts-expect-error
	import avantrapines3 from '$lib/images/2024/11/2024-11-07_19.00.29.png?enhanced&w=227;216;160;98';
	import avantrapines3no from '$lib/images/2024/11/2024-11-07_19.00.29.png?enhanced';
	//@ts-expect-error
	import newbayswater1 from '$lib/images/2024/11/2024-11-07_19.01.18.png?enhanced&w=167;159;117;71';
	import newbayswater1no from '$lib/images/2024/11/2024-11-07_19.01.18.png?enhanced';
	//@ts-expect-error
	import newbayswater2 from '$lib/images/2024/11/2024-11-07_19.01.21.png?enhanced&w=167;159;117;71';
	import newbayswater2no from '$lib/images/2024/11/2024-11-07_19.01.21.png?enhanced';
	//@ts-expect-error
	import newbayswater3 from '$lib/images/2024/11/2024-11-07_19.02.13.png?enhanced&w=167;159;117;71';
	import newbayswater3no from '$lib/images/2024/11/2024-11-07_19.02.13.png?enhanced';
	//@ts-expect-error
	import newbayswater4 from '$lib/images/2024/11/2024-11-07_19.02.25.png?enhanced&w=167;159;117;71';
	import newbayswater4no from '$lib/images/2024/11/2024-11-07_19.02.25.png?enhanced';
	//@ts-expect-error
	import spawnhsrterminal1 from '$lib/images/2024/11/2024-11-07_19.07.04.png?enhanced&w=227;216;160;98';
	import spawnhsrterminal1no from '$lib/images/2024/11/2024-11-07_19.07.04.png?enhanced';
	//@ts-expect-error
	import spawnhsrterminal2 from '$lib/images/2024/11/2024-11-07_19.07.12.png?enhanced&w=227;216;160;98';
	import spawnhsrterminal2no from '$lib/images/2024/11/2024-11-07_19.07.12.png?enhanced';
	//@ts-expect-error
	import spawnhsrterminal3 from '$lib/images/2024/11/2024-11-07_19.07.23.png?enhanced&w=227;216;160;98';
	import spawnhsrterminal3no from '$lib/images/2024/11/2024-11-07_19.07.23.png?enhanced';
	//@ts-expect-error
	import purplenaturereserve1 from '$lib/images/2024/11/2024-11-07_19.10.13.png?enhanced&w=132;125;92;54';
	import purplenaturereserve1no from '$lib/images/2024/11/2024-11-07_19.10.13.png?enhanced';
	//@ts-expect-error
	import purplenaturereserve2 from '$lib/images/2024/11/2024-11-07_19.10.24.png?enhanced&w=132;125;92;54';
	import purplenaturereserve2no from '$lib/images/2024/11/2024-11-07_19.10.24.png?enhanced';
	//@ts-expect-error
	import purplenaturereserve3 from '$lib/images/2024/11/2024-11-07_19.11.19.png?enhanced&w=132;125;92;54';
	import purplenaturereserve3no from '$lib/images/2024/11/2024-11-07_19.11.19.png?enhanced';
	//@ts-expect-error
	import purplenaturereserve4 from '$lib/images/2024/11/2024-11-07_19.11.39.png?enhanced&w=132;125;92;54';
	import purplenaturereserve4no from '$lib/images/2024/11/2024-11-07_19.11.39.png?enhanced';
	//@ts-expect-error
	import purplenaturereserve5 from '$lib/images/2024/11/2024-11-07_19.11.44.png?enhanced&w=132;125;92;54';
	import purplenaturereserve5no from '$lib/images/2024/11/2024-11-07_19.11.44.png?enhanced';
	//@ts-expect-error
	import spawnwest2 from '$lib/images/2024/11/2024-11-15_20.33.07.png?enhanced&w=227;216;160;98';
	import spawnwest2no from '$lib/images/2024/11/2024-11-15_20.33.07.png?enhanced';
	//@ts-expect-error
	import spawnwest4 from '$lib/images/2024/11/2024-11-15_20.33.34.png?enhanced&w=227;216;160;98';
	import spawnwest4no from '$lib/images/2024/11/2024-11-15_20.33.34.png?enhanced';
	//@ts-expect-error
	import spawnwest5 from '$lib/images/2024/11/2024-11-15_20.33.51.png?enhanced&w=227;216;160;98';
	import spawnwest5no from '$lib/images/2024/11/2024-11-15_20.33.51.png?enhanced';

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

		let spawnwest = new PhotoSwipeLightbox({
			gallery: '#spawnwest',
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		spawnwest.init();
	});
</script>

<h2 class="mb-4 text-center text-3xl font-bold">Our Stations</h2>
<p class="mb-6 text-center">A list of all stations that we serve!</p>
<br />

<h3 class="mb-3 text-2xl font-semibold">Atlantis Racecourse</h3>
<div class="pswp-gallery flex space-x-3" id="atlantisracecourse">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={atlantisracecourse1no.img.src}
		data-pswp-width={atlantisracecourse1no.img.w}
		data-pswp-height={atlantisracecourse1no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={atlantisracecourse1}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={atlantisracecourse3no.img.src}
		data-pswp-width={atlantisracecourse3no.img.w}
		data-pswp-height={atlantisracecourse3no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={atlantisracecourse3}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={atlantisracecourse2no.img.src}
		data-pswp-width={atlantisracecourse2no.img.w}
		data-pswp-height={atlantisracecourse2no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={atlantisracecourse2}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		/>
	</a>
</div>
<br />
<h3 class="mb-3 text-2xl font-semibold">Avantra Pines</h3>
<div class="pswp-gallery flex space-x-3" id="avantrapines">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={avantrapines1no.img.src}
		data-pswp-width={avantrapines1no.img.w}
		data-pswp-height={avantrapines1no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={avantrapines1}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={avantrapines2no.img.src}
		data-pswp-width={avantrapines2no.img.w}
		data-pswp-height={avantrapines2no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={avantrapines2}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={avantrapines3no.img.src}
		data-pswp-width={avantrapines3no.img.w}
		data-pswp-height={avantrapines3no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={avantrapines3}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		/>
	</a>
</div>
<br />
<h3 class="mb-3 text-2xl font-semibold">New Bayswater</h3>
<div class="pswp-gallery flex space-x-3" id="newbayswater">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={newbayswater1no.img.src}
		data-pswp-width={newbayswater1no.img.w}
		data-pswp-height={newbayswater1no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={newbayswater1}
			sizes="(min-width: 780px) 156px, (min-width: 680px) 127px, calc(23.61vw - 29px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={newbayswater2no.img.src}
		data-pswp-width={newbayswater2no.img.w}
		data-pswp-height={newbayswater2no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={newbayswater2}
			sizes="(min-width: 780px) 156px, (min-width: 680px) 127px, calc(23.61vw - 29px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={newbayswater3no.img.src}
		data-pswp-width={newbayswater3no.img.w}
		data-pswp-height={newbayswater3no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={newbayswater3}
			sizes="(min-width: 780px) 156px, (min-width: 680px) 127px, calc(23.61vw - 29px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={newbayswater4no.img.src}
		data-pswp-width={newbayswater4no.img.w}
		data-pswp-height={newbayswater4no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={newbayswater4}
			sizes="(min-width: 780px) 156px, (min-width: 680px) 127px, calc(23.61vw - 29px)"
		/>
	</a>
</div>
<br />
<h3 class="mb-3 text-2xl font-semibold">Purple Nature Reserve</h3>
<div class="pswp-gallery flex space-x-3" id="purplenaturereserve">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve1no.img.src}
		data-pswp-width={purplenaturereserve1no.img.w}
		data-pswp-height={purplenaturereserve1no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={purplenaturereserve1}
			sizes="(min-width: 780px) 123px, (min-width: 680px) 99px, calc(18.89vw - 26px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve2no.img.src}
		data-pswp-width={purplenaturereserve2no.img.w}
		data-pswp-height={purplenaturereserve2no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={purplenaturereserve2}
			sizes="(min-width: 780px) 123px, (min-width: 680px) 99px, calc(18.89vw - 26px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve3no.img.src}
		data-pswp-width={purplenaturereserve3no.img.w}
		data-pswp-height={purplenaturereserve3no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={purplenaturereserve3}
			sizes="(min-width: 780px) 123px, (min-width: 680px) 99px, calc(18.89vw - 26px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve4no.img.src}
		data-pswp-width={purplenaturereserve4no.img.w}
		data-pswp-height={purplenaturereserve4no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={purplenaturereserve4}
			sizes="(min-width: 780px) 123px, (min-width: 680px) 99px, calc(18.89vw - 26px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={purplenaturereserve5no.img.src}
		data-pswp-width={purplenaturereserve5no.img.w}
		data-pswp-height={purplenaturereserve5no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={purplenaturereserve5}
			sizes="(min-width: 780px) 123px, (min-width: 680px) 99px, calc(18.89vw - 26px)"
		/>
	</a>
</div>
<br />
<h3 class="mb-3 text-2xl font-semibold">Spawn</h3>
<div class="pswp-gallery flex space-x-3" id="spawnwest">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={spawnwest2no.img.src}
		data-pswp-width={spawnwest2no.img.w}
		data-pswp-height={spawnwest2no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={spawnwest2}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		></enhanced:img>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={spawnwest4no.img.src}
		data-pswp-width={spawnwest4no.img.w}
		data-pswp-height={spawnwest4no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={spawnwest4}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		></enhanced:img>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={spawnwest5no.img.src}
		data-pswp-width={spawnwest5no.img.w}
		data-pswp-height={spawnwest5no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={spawnwest5}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		></enhanced:img>
	</a>
</div>
<br />
<h3 class="mb-3 text-2xl font-semibold">Spawn HSR Terminal</h3>
<div class="pswp-gallery flex space-x-3" id="spawnhsrterminal">
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={spawnhsrterminal1no.img.src}
		data-pswp-width={spawnhsrterminal1no.img.w}
		data-pswp-height={spawnhsrterminal1no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={spawnhsrterminal1}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={spawnhsrterminal2no.img.src}
		data-pswp-width={spawnhsrterminal2no.img.w}
		data-pswp-height={spawnhsrterminal2no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={spawnhsrterminal2}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		/>
	</a>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a
		href={spawnhsrterminal3no.img.src}
		data-pswp-width={spawnhsrterminal3no.img.w}
		data-pswp-height={spawnhsrterminal3no.img.h}
		target="_blank"
		rel="noreferrer"
	>
		<enhanced:img
			src={spawnhsrterminal3}
			sizes="(min-width: 780px) 212px, (min-width: 680px) 173px, calc(31.39vw - 34px)"
		/>
	</a>
</div>