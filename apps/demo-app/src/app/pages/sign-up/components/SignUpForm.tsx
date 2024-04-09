import React, { FormEvent } from "react";
import { useTranslation } from "react-i18next";

import { Button, Form } from "@ui/components";

interface SignUpFormProps {
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit }) => {
	const { t } = useTranslation();

	return (
		<Form.Root title={t("form_page.form.title")} onSubmit={onSubmit}>
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
	);
};
