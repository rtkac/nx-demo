/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { CommonModule } from "./common/common.module";

async function bootstrap() {
	const commonApp = await NestFactory.create(CommonModule);
	commonApp.enableCors();
	commonApp.setGlobalPrefix("api/common");
	await commonApp.listen(3000);
	Logger.log(`Common mock app is running on: ${await commonApp.getUrl()}`);
}

bootstrap();
