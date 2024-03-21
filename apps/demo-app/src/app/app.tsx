import { TranslationsBoundary, RouterBoundary } from "./boundaries";

export function App() {
	return (
		<TranslationsBoundary>
			<RouterBoundary />
		</TranslationsBoundary>
	);
}

export default App;
