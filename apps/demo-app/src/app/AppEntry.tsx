import {
	DirectionsBoundary,
	RouterBoundary,
	TranslationsBoundary,
} from "./boundaries";

export function AppEntry() {
	return (
		<TranslationsBoundary>
			<DirectionsBoundary>
				<RouterBoundary />
			</DirectionsBoundary>
		</TranslationsBoundary>
	);
}

export default AppEntry;
