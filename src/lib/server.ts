import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import pg from "pg"

dotenv.config({ path: ".env.local" })

const { Pool } = pg
const app = express()
app.use(express.json())
app.use(cors())

// Configure PostgreSQL connection
const pool = new Pool({
	connectionString: process.env.DATABASE_URL
})

// Test the PostgreSQL connection
pool
	.connect()
	.then((client) => {
		console.log("Connected to PostgreSQL")
		client.release() // Release the client back to the pool
	})
	.catch((error) => {
		console.error("PostgreSQL connection error:", error.message)
	})

// Define a test route
app.get("/hello", async (req, res) => {
	try {
		const result = await pool.query("SELECT 'Hello from PostgreSQL!' AS message")
		res.json({ message: result.rows[0].message })
	} catch (error) {
		console.error("Database query failed:", error)
		res.status(500).json({ error: "Database query failed" })
	}
})

// Start the server
app.listen(process.env.PORT, () => {
	console.log(`Server running on port ${process.env.PORT}`)
})
