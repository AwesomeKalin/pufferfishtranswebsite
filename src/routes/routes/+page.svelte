<script lang="ts">
	//@ts-expect-error
	import routemap from '$lib/images/2024/11/routemap.2.png?enhanced&w=704;672;544;318';
	//@ts-expect-error
	import pt1 from '$lib/images/2024/11/pt1.2.png?enhanced&w=352;336;272;159';
	//@ts-expect-error
	import hsp1 from '$lib/images/2024/11/hsp1.2.png?enhanced&w=704;672;544;318';
</script>

<enhanced:img
	src={routemap}
	alt="Route Map"
	sizes="(min-width: 780px) 661px, (min-width: 680px) 544px, calc(94.44vw - 79px)"
></enhanced:img>
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
	sizes="(min-width: 780px) 330px, (min-width: 680px) 272px, calc(47.22vw - 40px)"
></enhanced:img>
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
	sizes="(min-width: 780px) 661px, (min-width: 680px) 544px, calc(94.44vw - 79px)"
></enhanced:img>
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
<br />
<h3 class="mb-3 text-2xl font-semibold">PTram 1:</h3>
<ul class="mb-6 list-disc pl-6">
	<li>Type: Tram/Light Rail</li>
	<li>From: Shenhua Resort</li>
	<li>To: Shrek's Swamp</li>
	<li>Via: Reddwood Forest, Purple Roofed Hills, Dripstone Tops</li>
	<li>Vehicle on Route: None currently!</li>
</ul>
<br />
<h3 class="mb-3 text-2xl font-semibold">SeaLink Line (Phase 1):</h3>
<ul class="mb-6 list-disc pl-6">
	<li>Type: Rail</li>
	<li>From: Spawn</li>
	<li>To: Deepshore</li>
	<li>Via: Bushlands</li>
	<li>Vehicle on Route: None currently!</li>
</ul>
<br />
<h3 class="mb-3 text-2xl font-semibold">SeaLink Line (Phase 2):</h3>
<ul class="mb-6 list-disc pl-6">
	<li>Type: Rail</li>
	<li>From: Deepshore</li>
	<li>To: TBD</li>
	<li>Via: TBD, TBD</li>
	<li>Vehicle on Route: None currently!</li>
</ul>
<br />
<h3 class="mb-3 text-2xl font-semibold">SeaLink Line (Phase 3):</h3>
<ul class="mb-6 list-disc pl-6">
	<li>Type: Rail</li>
	<li>From: TBD</li>
	<li>To: Greenery</li>
	<li>Via: TBD</li>
	<li>Vehicle on Route: None currently!</li>
</ul>