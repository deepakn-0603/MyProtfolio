'use server';
/**
 * @fileOverview An AI assistant flow for generating or refining project descriptions for a portfolio.
 *
 * - aiGenerateProjectDescription - A function that handles the generation/refinement of project descriptions.
 * - AIGenerateProjectDescriptionInput - The input type for the aiGenerateProjectDescription function.
 * - AIGenerateProjectDescriptionOutput - The return type for the aiGenerateProjectDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIGenerateProjectDescriptionInputSchema = z.object({
  projectTitle: z.string().describe('The title of the project.'),
  technologies: z.array(z.string()).describe('A list of technologies used in the project, e.g., ["React", "Django", "PostgreSQL"]').min(1),
  projectGoals: z.string().describe('The main goals or purpose of the project.'),
  existingDescription: z.string().optional().describe('An optional existing project description to refine.'),
});
export type AIGenerateProjectDescriptionInput = z.infer<typeof AIGenerateProjectDescriptionInputSchema>;

const AIGenerateProjectDescriptionOutputSchema = z.object({
  generatedDescription: z.string().describe('The generated or refined compelling and concise project description.'),
});
export type AIGenerateProjectDescriptionOutput = z.infer<typeof AIGenerateProjectDescriptionOutputSchema>;

export async function aiGenerateProjectDescription(input: AIGenerateProjectDescriptionInput): Promise<AIGenerateProjectDescriptionOutput> {
  return aiGenerateProjectDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProjectDescriptionPrompt',
  input: {schema: AIGenerateProjectDescriptionInputSchema},
  output: {schema: AIGenerateProjectDescriptionOutputSchema},
  prompt: `You are an expert AI assistant tasked with generating or refining compelling and concise project descriptions for a developer's portfolio.

Here is the project information:
Project Title: {{{projectTitle}}}
Technologies Used: {{#each technologies}}- {{{this}}}\n{{/each}}
Project Goals: {{{projectGoals}}}

{{#if existingDescription}}
Refine the following existing description to make it more impactful and concise, focusing on achievements and benefits:
Existing Description: {{{existingDescription}}}
{{else}}
Generate a compelling and concise project description based on the provided information, focusing on the project's purpose, the technologies used, and its key features or outcomes.
{{/if}}

The description should be professional, engaging, and suitable for a developer with 1+ years of experience. Aim for 3-5 sentences.`,
});

const aiGenerateProjectDescriptionFlow = ai.defineFlow(
  {
    name: 'aiGenerateProjectDescriptionFlow',
    inputSchema: AIGenerateProjectDescriptionInputSchema,
    outputSchema: AIGenerateProjectDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
