import { useAppDispatch } from "../../redux/hooks/hooksRedux";
import { orderByName, filterByType } from "../../redux/products/actions";
interface Props {
	setCurrentPage: (e: number) => void;
	setOrder: (e: string) => void;
}

const ProductsToolbar = ({ setCurrentPage, setOrder }: Props): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		if (e.target.value === "A-z" || e.target.value === "Z-a") {
			dispatch(orderByName(e.target.value));
			setOrder(e.target.value);
			setCurrentPage(1);
		}
	};

	const handleFilter = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		dispatch(filterByType(e.target.value));
		setCurrentPage(1);
	};

	return (
		<div className="flex items-center justify-center w-full ">
			<div className="flex flex-col w-full lg:flex-row justify-around bg-toolbar text-lg lg:w-1/2 lg:h-fit p-2 rounded-3xl mb-4">
				<div className="text-center">
					<span>Ordenar por</span>
					<select
						className="bg-gray-50
						 text-center  text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500  w-full"
						onChange={(e) => {
							handleChange(e);
						}}
						defaultValue="Order By:"
					>
						<option value="none" selected disabled>
							Ordenar por:
						</option>
						<option value="A-z">A-z</option>
						<option value="Z-a">Z-a</option>
					</select>
				</div>

				<div className="text-center">
					<span>Filtrar por:</span>
					<select
						onChange={(e) => {
							handleFilter(e);
						}}
						className="bg-gray-50
						 text-center border-gray-300 text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500  w-full"
					>
						<option value="EmptyFilters">Sin filtros</option>
						<option value="hairProduct">Productos</option>
						<option value="hairAccessory">Accesorios</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default ProductsToolbar;
