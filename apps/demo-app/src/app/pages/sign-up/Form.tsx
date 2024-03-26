import { useTranslation } from "react-i18next";

import { Button, Form } from "@ui/components";

export const SignUpForm: React.FC = () => {
	const { t } = useTranslation();

	return (
		<div className="flex justify-center items-center w-full">
			<div className="w-full md:w-96">
				<Form.Root title={t("form_page.form.title")}>
					<Form.Field name="firstName">
						<Form.Label>{t("form_page.first_name.label")}</Form.Label>
						<Form.Input placeholder={t("form_page.first_name.placeholder")} />
					</Form.Field>
					<Form.Field name="lastName">
						<Form.Label>{t("form_page.last_name.label")}</Form.Label>
						<Form.Input placeholder={t("form_page.last_name.placeholder")} />
					</Form.Field>
					<Form.Field name="email">
						<Form.Label>{t("form_page.email.label")}</Form.Label>
						<Form.Input
							type="email"
							placeholder={t("form_page.email.placeholder")}
						/>
					</Form.Field>
					<Button.Secondary type="submit">Submit</Button.Secondary>
				</Form.Root>
			</div>
		</div>
	);
};
