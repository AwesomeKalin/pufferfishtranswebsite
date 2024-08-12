<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	let pufferfish: any;

	onMount(() => {
		const handleMouseMove = (e: { clientX: number; clientY: number }) => {
			const x = e.clientX / window.innerWidth;
			const y = e.clientY / window.innerHeight;

			if (pufferfish) {
				pufferfish.style.transform = `translate(${x * 20}px, ${y * 20}px) scale(${1 + y * 0.2})`;
			}
		};

		document.body.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.body.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<div class="ocean-bg relative min-h-screen font-sans text-gray-100">
	<div class="absolute left-0 top-0 z-0 h-full w-full bg-blue-900 bg-opacity-50"></div>

	<div class="relative z-10">
		<header class="bg-yellow-500 py-6">
			<div class="container mx-auto px-4">
				<div class="flex items-center justify-center">
					<div class="mr-4 flex h-20 w-20 items-center justify-center rounded-full bg-teal-400">
						<svg class="h-16 w-16" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
							<circle cx="50" cy="50" r="45" fill="#FFA500"></circle>
							<circle cx="35" cy="40" r="5" fill="#000000"></circle>
							<path d="M 60 40 A 5 5 0 0 1 70 40" stroke="#000000" stroke-width="2" fill="none"
							></path>
							<path d="M 30 60 Q 50 70 70 60" stroke="#000000" stroke-width="2" fill="none"></path>
						</svg>
					</div>
					<h1 class="text-5xl font-bold text-blue-900">Pufferfish Transport</h1>
				</div>
			</div>
		</header>

		<nav class="bg-teal-400 py-4">
			<div class="container mx-auto px-4">
				<ul class="flex justify-center space-x-6">
					<li>
						<a href="/" class="text-white transition-colors duration-300 hover:text-yellow-500">Home</a>
					</li>
					<li>
						<a
							href="/routes"
							class="text-white transition-colors duration-300 hover:text-yellow-500">Routes</a
						>
					</li>
					<li>
						<a
							href="/tickets"
							class="text-white transition-colors duration-300 hover:text-yellow-500">Tickets</a
						>
					</li>
					<li>
						<a
							href="/about"
							class="text-white transition-colors duration-300 hover:text-yellow-500">About Us</a
						>
					</li>
					<li>
						<a
							href="/contact"
							class="text-white transition-colors duration-300 hover:text-yellow-500">Contact</a
						>
					</li>
				</ul>
			</div>
		</nav>

		<main class="container mx-auto px-4 py-8">
			<div class="mx-auto max-w-3xl rounded-lg bg-blue-900 bg-opacity-90 p-8 shadow-lg"><slot></slot></div>
		</main>
	</div>

	<div class="float-animation fixed bottom-5 right-5 z-20 h-24 w-24">
		<svg class="h-full w-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
			<circle cx="50" cy="50" r="45" fill="#FFA500"></circle>
			<circle cx="35" cy="40" r="5" fill="#000000"></circle>
			<path d="M 60 40 A 5 5 0 0 1 70 40" stroke="#000000" stroke-width="2" fill="none"></path>
			<path d="M 30 60 Q 50 70 70 60" stroke="#000000" stroke-width="2" fill="none"></path>
			<circle
				cx="50"
				cy="50"
				r="40"
				fill="transparent"
				stroke="#8B4513"
				stroke-width="2"
				stroke-dasharray="5,5"
			></circle>
		</svg>
	</div>
</div>
