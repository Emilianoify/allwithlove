interface Props {
	currentPage: number;
	totalPages: number;
	paginate: (e: number) => void;
	setCurrentPage: (currentPage: number) => void;
}

const Paginate: React.FC<Props> = ({
	currentPage,
	paginate,
	totalPages,
	setCurrentPage,
}) => {
	const pageNumbers = [];

	for (let i = 0; i < totalPages; i++) {
		pageNumbers.push(i + 1);
	}

	const nextPage = (): void => {
		setCurrentPage(currentPage + 1);
	};

	const prevPage = (): void => {
		setCurrentPage(currentPage - 1);
	};

	return (
		<div className={"flex justify-center py-2 w-full"}>
			<button
				type="button"
				className="relative block rounded-full bg-transparent mx-2 py-1.5 text-sm text-neutral-500 transition-all duration-300"
				disabled={currentPage <= 1}
				onClick={prevPage}
			>
				Anterior
			</button>
			{pageNumbers.map((e) => {
				return (
					<button
						className={
							e === currentPage
								? "rounded-lg bg-home-2 px-3 text-center bg-opacity-60"
								: "relative block rounded-full bg-primary-100 py-1.5 px-3 text-sm font-medium text-primary-700 transition-all duration-300"
						}
						key={e}
						type="button"
						onClick={() => {
							paginate(e);
						}}
					>
						{e}
					</button>
				);
			})}
			<button
				type="button"
				className="relative block rounded-full bg-transparent cursor-pointer mx-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 "
				disabled={currentPage >= totalPages}
				onClick={nextPage}
			>
				Siguiente
			</button>
		</div>
	);
};

export default Paginate;
