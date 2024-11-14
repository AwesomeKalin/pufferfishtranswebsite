<script lang="ts">
	//@ts-expect-error
	import routemap from '$lib/images/2024/11/routemap.2.png?enhanced&w=4968;704;672;544;318';
	//@ts-expect-error
	import pt1 from '$lib/images/2024/11/pt1.2.png?enhanced&w=2158;352;336;272;159';
	//@ts-expect-error
	import hsp1 from '$lib/images/2024/11/hsp1.2.png?enhanced&w=4929;704;672;544;318';
	//@ts-expect-error
	import spawnlink from '$lib/images/2024/11/spawnlink.png?enhanced&w=4100;704;672;544;318';
</script>

<enhanced:img
	src={routemap}
	alt="Route Map"
	sizes="(min-width: 1024px) 704px, (min-width: 780px) 661px, (min-width: 680px) 544px, calc(94.44vw - 79px)"
></enhanced:img>
<a href={routemap.img.src} class="text-sm text-green-500 underline" target="_blank">View Original</a
>
<br />
<h2 class="mb-4 text-center text-3xl font-bold">Operational routes:</h2>
<h3 class="mb-3 text-2xl font-semibold">PT1:</h3>
<ul class="mb-6 list-disc pl-6">
	<li>Type: Bus</li>
	<li>From: Atlantis Racecourse</li>
	<li>To: Bayswater</li>
	<li>Via: Avantra Pines</li>
	<li>Vehicle on Route: Yutong U12</li>
</ul>
<enhanced:img
	src={pt1}
	alt="PT1 Map"
	class="w-1/2"
	sizes="(min-width: 1024px) 352px, (min-width: 780px) 330px, (min-width: 680px) 272px, calc(47.22vw - 40px)"
></enhanced:img>
<a href={pt1.img.src} class="text-sm text-green-500 underline" target="_blank">View Original</a>
<br />
<h3 class="mb-3 text-2xl font-semibold">HSP1:</h3>
<ul class="mb-6 list-disc pl-6">
	<li>Type: High Speed Rail</li>
	<li>From: Spawn HSR Terminal</li>
	<li>To: Purple Nature Park</li>
	<li>Via: N/A</li>
	<li>Vehicle on Route: Class 802</li>
</ul>
<enhanced:img
	src={hsp1}
	alt="HSP1 Map"
	sizes="(min-width: 1024px) 704px, (min-width: 780px) 661px, (min-width: 680px) 544px, calc(94.44vw - 79px)"
></enhanced:img>
<a href={hsp1.img.src} class="text-sm text-green-500 underline" target="_blank">View Original</a>
<br />
<h3 class="mb-3 text-2xl font-semibold">SpawnLink:</h3>
<ul class="mb-6 list-disc pl-6">
	<li>Type: Cable Car</li>
	<li>From: Spawn</li>
	<li>To: Spawn West</li>
	<li>Via: N/A</li>
	<li>Vehicle on Route: NGong Ping 360</li>
</ul>
<enhanced:img
	src={spawnlink}
	alt="SpawnLink Map"
	sizes="(min-width: 1024px) 704px, (min-width: 780px) 661px, (min-width: 680px) 544px, calc(94.44vw - 79px)"
></enhanced:img>
<a href={spawnlink.img.src} class="text-sm text-green-500 underline" target="_blank"
	>View Original</a
>
<br />
<h2 class="mb-4 text-center text-3xl font-bold">Routes in Construction:</h2>
<h3 class="mb-3 text-2xl font-semibold">PT2:</h3>
<ul class="mb-6 list-disc pl-6">
	<li>Type: Bus</li>
	<li>From: Atlantis Racecourse</li>
	<li>To: Spawn</li>
	<li>Via: Atlantis, Belmont Bay</li>
	<li>Vehicle on Route: None currently!</li>
</ul>
