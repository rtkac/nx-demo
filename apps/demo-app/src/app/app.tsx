import {
	DirectionsBoundary,
	RouterBoundary,
	TranslationsBoundary,
} from "./boundaries";

export function App() {
	return (
		<DirectionsBoundary>
			<TranslationsBoundary>
				<RouterBoundary />
			</TranslationsBoundary>
		</DirectionsBoundary>
	);
}

export default App;
