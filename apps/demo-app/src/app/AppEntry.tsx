import {
	DirectionsBoundary,
	ReduxBoundary,
	RouterBoundary,
	TranslationsBoundary,
} from "./boundaries";

export function AppEntry() {
	return (
		<TranslationsBoundary>
			<DirectionsBoundary>
				<ReduxBoundary>
					<RouterBoundary />
				</ReduxBoundary>
			</DirectionsBoundary>
		</TranslationsBoundary>
	);
}

export default AppEntry;
