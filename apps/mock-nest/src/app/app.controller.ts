import { Controller, Get } from "@nestjs/common";

// biome-ignore lint/style/useImportType: <explanation>
import { AppService } from "./app.service";

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	getData() {
		return this.appService.getData();
	}
}
