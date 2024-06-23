import Gemini from "gemini-ai";

export default class GeminiService {
  constructor() {
    this.gemini = new Gemini(process.env.GEMINI_API_KEY);
  }
  async ask(message) {
    return await this.gemini.ask(message);
  }
}
