# Pop Choice 🍿

Pop Choice is a movie recommendation application that helps users find movies based on their preferences using AI-generated embeddings.

## Features
- Add movies with titles, descriptions, and AI-generated embeddings.
- Get movie recommendations based on user input.
- Uses PostgreSQL with pgvector for similarity searches.
- Built with Next.js, TypeScript, and TailwindCSS.

## Installation

### Prerequisites
- Node.js (>= 16.x)
- PostgreSQL (with pgvector extension)
- OpenAI API key (for embedding generation)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/pop-choice.git
   cd pop-choice
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file and add:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   OPENAI_API_KEY=your_openai_api_key
   ```
4. Run database migrations:
   ```sh
   npm run migrate
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## API Endpoints

### Add a Movie
**POST** `/api/add-movie`
#### Request Body:
```json
{
  "title": "Inception",
  "description": "A mind-bending thriller about dreams within dreams."
}
```
#### Response:
```json
{
  "id": 1,
  "title": "Inception",
  "description": "A mind-bending thriller about dreams within dreams."
}
```

### Get a Movie Recommendation
**POST** `/api/recommend`
#### Request Body:
```json
{
  "userResponse": "I want a sci-fi movie with deep philosophical themes."
}
```
#### Response:
```json
{
  "title": "The Matrix",
  "description": "A hacker discovers the truth about reality."
}
```

## Technologies Used
- **Frontend:** Next.js, React, TypeScript, TailwindCSS
- **Backend:** Node.js, Express
- **Database:** PostgreSQL with pgvector
- **AI:** OpenAI embeddings for movie similarity

## Contributing
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-branch`
5. Submit a pull request

## License
This project is licensed under the MIT License.

---

🚀 Happy coding with Pop Choice!
