import mongoose from "mongoose";
import { OCModels } from "@failean/shared-types";
import { ocDB } from "../../../dbConnection";

const invalidPromptModel = new mongoose.Schema(
  {
    openAICallReqUUID: {
      type: String,
      required: true,
    },
    prompt: {
      type: String,
      required: true,
    },
    result: {
      type: String,
      required: true,
    },
    promptName: {
      type: String,
      required: true,
    },
    ideaID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export function getInvalidPromptModel() {
  if (!ocDB) {
    throw new Error("Database not initialized");
  }
  return ocDB.model<OCModels.Data.Prompts.InvalidPrompt>(
    "invalidPrompt",
    invalidPromptModel
  );
}
