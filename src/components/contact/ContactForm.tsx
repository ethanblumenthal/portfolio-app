import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { AlertCircle, CheckCircle } from "lucide-react";
import { useId, useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SOCIAL_LINKS } from "@/lib/constants";

// Define schema locally since we removed api import
const createContactSchema = z.object({
	firstName: z.string().min(1, "First name is required"),
	lastName: z.string().min(1, "Last name is required"),
	email: z.string().email("Invalid email address"),
	notes: z.string(),
	source: z.string(),
});

type CreateContact = z.infer<typeof createContactSchema>;

export default function ContactForm() {
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [subject, setSubject] = useState("");
	const formId = useId();
	const firstNameId = `${formId}-firstName`;
	const lastNameId = `${formId}-lastName`;
	const emailId = `${formId}-email`;
	const subjectId = `${formId}-subject`;
	const notesId = `${formId}-notes`;

	const createContact = useMutation({
		mutationFn: async (data: CreateContact & { notes: string }) => {
			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));
			console.log("Form submitted:", data);
			return { success: true };
		},
		onSuccess: () => {
			setIsSubmitted(true);
			form.reset();
		},
	});

	const form = useForm({
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			notes: "",
			source: "website",
		},
		validators: {
			onChange: createContactSchema,
		},
		onSubmit: async ({ value }) => {
			try {
				const notesWithSubject = subject
					? `Subject: ${subject}\n\n${value.notes || ""}`
					: value.notes || "";
				await createContact.mutateAsync({
					...value,
					notes: notesWithSubject,
				});
			} catch (error) {
				console.error("Form submission error:", error);
			}
		},
	});

	if (isSubmitted) {
		return (
			<section className="py-12">
				<div className="max-w-2xl mx-auto text-center">
					<div className="rounded-lg border border-green-200 bg-green-50 p-8 dark:border-green-800 dark:bg-green-950">
						<CheckCircle className="mx-auto h-12 w-12 text-green-600 dark:text-green-400 mb-4" />
						<h2 className="text-2xl font-bold text-green-900 dark:text-green-100 mb-4">
							Thank You!
						</h2>
						<p className="text-green-700 dark:text-green-300 mb-6">
							Your inquiry has been submitted successfully. I'll get back to you
							within 24 hours.
						</p>
						<Button
							onClick={() => setIsSubmitted(false)}
							variant="outline"
							className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
						>
							Submit Another Inquiry
						</Button>
					</div>
				</div>
			</section>
		);
	}

	return (
		<section className="py-12">
			<div className="grid md:grid-cols-[2fr_1fr] gap-12">
				<div className="space-y-8">
					<div className="perplexity-card">
						<h2 className="text-2xl font-bold text-white mb-6">
							Let's Connect
						</h2>

						{createContact.isError && (
							<div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
								<div className="flex items-center">
									<AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
									<p className="text-red-700 dark:text-red-300">
										Something went wrong. Please try again.
									</p>
								</div>
							</div>
						)}

						<form
							onSubmit={(e) => {
								e.preventDefault();
								e.stopPropagation();
								form.handleSubmit();
							}}
							className="space-y-6"
						>
							<div className="grid md:grid-cols-2 gap-4">
								<form.Field name="firstName">
									{(field) => (
										<div>
											<Label
												htmlFor={firstNameId}
												className="text-white mb-2 block"
											>
												First Name *
											</Label>
											<Input
												id={firstNameId}
												placeholder="John"
												className="bg-primary/10 text-white border-0 ring-1 ring-inset ring-primary/30 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-primary/50"
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
											/>
											{field.state.meta.errors ? (
												<p className="text-red-500 text-sm mt-1">
													{field.state.meta.errors.join(", ")}
												</p>
											) : null}
										</div>
									)}
								</form.Field>

								<form.Field name="lastName">
									{(field) => (
										<div>
											<Label
												htmlFor={lastNameId}
												className="text-white mb-2 block"
											>
												Last Name *
											</Label>
											<Input
												id={lastNameId}
												placeholder="Doe"
												className="bg-primary/10 text-white border-0 ring-1 ring-inset ring-primary/30 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-primary/50"
												name={field.name}
												value={field.state.value}
												onBlur={field.handleBlur}
												onChange={(e) => field.handleChange(e.target.value)}
											/>
											{field.state.meta.errors ? (
												<p className="text-red-500 text-sm mt-1">
													{field.state.meta.errors.join(", ")}
												</p>
											) : null}
										</div>
									)}
								</form.Field>
							</div>

							<form.Field name="email">
								{(field) => (
									<div>
										<Label htmlFor={emailId} className="text-white mb-2 block">
											Email *
										</Label>
										<Input
											id={emailId}
											type="email"
											placeholder="john@example.com"
											className="bg-primary/10 text-white border-0 ring-1 ring-inset ring-primary/30 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-primary/50"
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
										/>
										{field.state.meta.errors ? (
											<p className="text-red-500 text-sm mt-1">
												{field.state.meta.errors.join(", ")}
											</p>
										) : null}
									</div>
								)}
							</form.Field>

							<div>
								<Label htmlFor={subjectId} className="text-white mb-2 block">
									Subject
								</Label>
								<Input
									id={subjectId}
									placeholder="What's this about?"
									className="bg-primary/10 text-white border-0 ring-1 ring-inset ring-primary/30 backdrop-blur-sm placeholder:text-gray-400 focus:ring-2 focus:ring-primary/50"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
								/>
							</div>

							<form.Field name="notes">
								{(field) => (
									<div>
										<Label htmlFor={notesId} className="text-white mb-2 block">
											Message
										</Label>
										<Textarea
											id={notesId}
											placeholder="Tell me about your project or investment interests..."
											className="bg-primary/10 text-white border-0 ring-1 ring-inset ring-primary/30 backdrop-blur-sm min-h-[120px] placeholder:text-gray-400 focus:ring-2 focus:ring-primary/50"
											name={field.name}
											value={field.state.value}
											onBlur={field.handleBlur}
											onChange={(e) => field.handleChange(e.target.value)}
										/>
										{field.state.meta.errors ? (
											<p className="text-red-500 text-sm mt-1">
												{field.state.meta.errors.join(", ")}
											</p>
										) : null}
									</div>
								)}
							</form.Field>

							<form.Subscribe
								selector={(state) => [state.canSubmit, state.isSubmitting]}
							>
								{([canSubmit, isSubmitting]) => (
									<Button
										type="submit"
										disabled={!canSubmit}
										className="w-full bg-primary text-white hover:bg-primary/90 disabled:opacity-50"
									>
										{isSubmitting ? "Submitting..." : "Send Inquiry"}
									</Button>
								)}
							</form.Subscribe>
						</form>
					</div>
				</div>

				<div className="space-y-8">
					<div className="perplexity-card">
						<h2 className="text-2xl font-bold text-white mb-6">Follow Me</h2>
						<div className="grid grid-cols-3 gap-3">
							<a
								href={SOCIAL_LINKS.TWITTER}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-primary/10 ring-1 ring-inset ring-primary/30 backdrop-blur-sm hover:bg-primary/20 transition-colors"
							>
								<img
									src="/icons/x.svg"
									alt="X"
									className="brightness-0 invert w-7 h-7"
								/>
								<span className="text-sm font-medium text-white">X</span>
							</a>
							<a
								href={SOCIAL_LINKS.LINKEDIN}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-primary/10 ring-1 ring-inset ring-primary/30 backdrop-blur-sm hover:bg-primary/20 transition-colors"
							>
								<img
									src="/icons/linkedin.svg"
									alt="LinkedIn"
									className="brightness-0 invert w-7 h-7"
								/>
								<span className="text-sm font-medium text-white">LinkedIn</span>
							</a>
							<a
								href={SOCIAL_LINKS.GITHUB}
								target="_blank"
								rel="noopener noreferrer"
								className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-primary/10 ring-1 ring-inset ring-primary/30 backdrop-blur-sm hover:bg-primary/20 transition-colors"
							>
								<img
									src="/icons/github.svg"
									alt="GitHub"
									className="brightness-0 invert w-7 h-7"
								/>
								<span className="text-sm font-medium text-white">GitHub</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
