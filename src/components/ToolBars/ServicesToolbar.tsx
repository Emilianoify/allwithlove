import { useAppDispatch } from "../../redux/hooks/hooksRedux";
import { orderByName } from "../../redux/services/actions";
interface Props {
	setCurrentPage: (e: number) => void;
	setOrder: (e: string) => void;
}

const ServicesToolbar = ({ setCurrentPage, setOrder }: Props): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
		if (e.target.value === "A-z" || e.target.value === "Z-a") {
			dispatch(orderByName(e.target.value));
			setOrder(e.target.value);
			setCurrentPage(1);
		}
	};

	return (
		<div className="flex items-center justify-center w-full">
			<div className="flex flex-col lg:flex-row justify-around bg-toolbar text-lg lg:w-1/2 lg:h-fit p-2 rounded-3xl mb-4 text-center">
				<div>
					<span>Ordenar por</span>
					<select
						className="bg-gray-100 text-center border-gray-300 text-gray-900 rounded-lg  focus:ring-blue-500 focus:border-blue-500  w-full"
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
			</div>
		</div>
	);
};

export default ServicesToolbar;
