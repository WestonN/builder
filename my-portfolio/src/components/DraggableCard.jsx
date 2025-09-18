import React, { useState } from "react";
import {
  useDraggable,
} from "@dnd-kit/core";
import { Card, CardContent, Typography } from "@mui/material";

export default function DraggableCard({ id, content }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
    cursor: "grab",
    marginBottom: "8px",
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Card sx={{ width: 120, height: 120 }}>
        <CardContent>
          <Typography align="center">{content}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}