<section className="mx-auto max-w-2xl px-8 py-12 sm:px-6 sm:py-16 md:max-w-4xl lg:max-w-7xl">
	<ul className="my-8 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		<li>
			<article>
				<div className="min-h-80 hover:bg-slate-10 h-80 overflow-hidden rounded-md border bg-slate-50">
					<img
						width={320}
						height={480}
						alt={"image"}
						src="https://picsum.photos/320/480?1"
						className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
					/>
				</div>
				<div className="mt-2 flex justify-between">
					<div>
						<h3 className="text-sm font-semibold text-gray-700">Produkt</h3>
						<p className="text-sm text-gray-500">Kategoria</p>
					</div>
					<p className="text-sm font-medium text-gray-900">125$</p>
				</div>
			</article>
		</li>
	</ul>
</section>;
