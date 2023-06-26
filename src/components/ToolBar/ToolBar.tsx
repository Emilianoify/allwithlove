import { useAppDispatch } from "../../redux/hooks/hooksRedux";
import { orderByName } from "../../redux/products/actions";

interface Props {
	setCurrentPage: (e: number) => void;
	setOrder: (e: string) => void;
}

const ToolBar = ({ setCurrentPage, setOrder }: Props): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		if (e.target.value === "A-z" || e.target.value === "Z-a") {
			dispatch(orderByName(e.target.value));
			setOrder(e.target.value);
			setCurrentPage(1);
		}
	};

	const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		//dispatch(filterByGenre(e.target.value));
		setCurrentPage(1);
	};

	return (
		<div className="flex items-center justify-center w-full text-white">
			<div className="flex flex-col lg:flex-row justify-around bg-toolbar text-lg lg:w-1/2 lg:h-fit p-2 rounded-3xl mb-4">
				<div>
					<span>Ordenar por</span>
					<select
						className="bg-gray-50 text-center border-gray-300 text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500  w-full"
						onChange={(e) => {
							handleChange(e);
						}}
						defaultValue="Order By:"
					>
						<option value="A-z">A-z</option>
						<option value="Z-a">Z-a</option>
					</select>
				</div>

				<div className="filterContainer">
					<span className="mr-4">Filtrar por:</span>
					<select
						onChange={(e) => {
							handleFilter(e);
						}}
						className="bg-gray-50 text-center border-gray-300 text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500  w-full"
					>
						<option value="EmptyFilters">Sin filtros</option>
						<option value="balzamo">Balzamo</option>
						<option value="banioCrema">Baños de Crema</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default ToolBar;
