import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProjectsService } from "./projectsService";
import type { Projects } from "@/lib/types";

export const fetchProjects = createAsyncThunk<Projects>(
  "projects/fetchProjects",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getProjectsService();
      return data;
    } catch (error: unknown) {
      let message = "Projeler alınamadı";
      if (error instanceof Error) {
        message = error.message;
      }
      return rejectWithValue(message);
    }
  }
);
