import {
	DirectionsBoundary,
	RouterBoundary,
	TranslationsBoundary,
} from "./boundaries";

export function App() {
	return (
		<TranslationsBoundary>
			<DirectionsBoundary>
				<RouterBoundary />
			</DirectionsBoundary>
		</TranslationsBoundary>
	);
}

export default App;
