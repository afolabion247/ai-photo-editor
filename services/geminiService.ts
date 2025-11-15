
import { GoogleGenAI, Modality, Part } from "@google/genai";

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

export const editImageWithPrompt = async (imagePart: Part, prompt: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash-exp',
      contents: {
        parts: [
          imagePart,
          {
            text: prompt,
          },
        ],
      },
      config: {
        responseModalities: [Modality.IMAGE],
      },
    });

    const firstCandidate = response.candidates?.[0];
    if (!firstCandidate) {
      throw new Error("No candidates returned from the API.");
    }

    const imageOutputPart = firstCandidate.content.parts.find(
      (part) => !!part.inlineData
    );

    if (!imageOutputPart || !imageOutputPart.inlineData) {
      const textPart = firstCandidate.content.parts.find(part => !!part.text);
      if(textPart?.text) {
        throw new Error(`API returned text instead of an image: ${textPart.text}`);
      }
      throw new Error("No image data found in the API response.");
    }
    
    const { mimeType, data } = imageOutputPart.inlineData;
    return `data:${mimeType};base64,${data}`;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};
