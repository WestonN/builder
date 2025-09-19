import React, { useState } from "react";
import {
  DndContext,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { Card, CardContent, Typography, Box, Grid } from "@mui/material";

export default function Canvas({ children }) {
    const { setNodeRef } = useDroppable({ id: "canvas" });
    return (
      <Box
        ref={setNodeRef}
        id="canvas-box"
        sx={{
          border: "10px solid gray",
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#f5f5f5",
          borderRadius: '25px'
        }}
      >
        {children}
      </Box>
    );
  }
