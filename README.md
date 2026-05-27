# MyPortfolio

A professional, production-ready portfolio template for Full-Stack Developers.

## Features
- **Modern UI**: Minimal blue-gray theme with white cards and soft shadows.
- **Sectioned Layout**: Optimized for Home, About, Skills, Projects, Experience, and Contact.
- **AI Tool**: Built-in "AI Project Copywriter" using Genkit and Gemini to help you write project descriptions.
- **Responsive**: Mobile-first design.
- **Mock Data Layer**: Easy to swap out with real data in `src/lib/data.ts`.

## Tech Stack
- **Frontend**: Next.js 15 (App Router), React 19, Tailwind CSS.
- **Icons**: Lucide React.
- **AI**: Genkit (Google AI Plugin).

## Getting Started

### Prerequisites
- Node.js 18+
- A Google AI (Gemini) API Key (for the AI features)

### Frontend Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and add your Google API Key:
   ```bash
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Customization
1. **Personal Info**: Open `src/lib/data.ts` and update the `USER_INFO` constant.
2. **Projects**: Add your own projects to the `PROJECTS` array in `src/lib/data.ts`.
3. **Experience**: Update the `EXPERIENCES` array with your professional history.
4. **Skills**: Categorize and list your technical stack in the `SKILLS` array.

### Deployment (Next.js)
The easiest way to deploy is using **Vercel**:
1. Push your code to GitHub.
2. Connect your repo to Vercel.
3. Add your `GOOGLE_GENAI_API_KEY` to the Environment Variables.
4. Deploy.

## AI Content Assistant
The section demonstrates your ability to integrate LLMs into production apps. It uses Genkit flows located in `src/ai/flows`.
