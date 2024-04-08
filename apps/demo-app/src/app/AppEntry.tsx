import {
	DirectionsBoundary,
	OutageBoundary,
	ReduxBoundary,
	RouterBoundary,
	TranslationsBoundary,
} from "./boundaries";

export function AppEntry() {
	return (
		<TranslationsBoundary>
			<DirectionsBoundary>
				<ReduxBoundary>
					<OutageBoundary>
						<RouterBoundary />
					</OutageBoundary>
				</ReduxBoundary>
			</DirectionsBoundary>
		</TranslationsBoundary>
	);
}

export default AppEntry;
