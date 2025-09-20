import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import BasicCard from "../../components/BasicCard";
import { DndContext } from "@dnd-kit/core";
import DraggableCard from "../../components/DragnDropComponents/DraggableCard";
import Slot from "../../components/DragnDropComponents/DroppableSlot";
import Canvas from "../../components/DragnDropComponents/Canvas";
import { dragnDropStyles } from "./DragnDropStyles";
import CardPool from "../../components/CardPoolComponents/CardPool";

function DragNDrop() {
  const [pool, setPool] = useState([
    { id: "card-1", content: "Card 1" },
    { id: "card-2", content: "Card 2" },
    { id: "card-3", content: "Card 3" },
    { id: "card-4", content: "Card 4" },
    { id: "card-5", content: "Card 5" },
    { id: "card-6", content: "Card 6" },
    { id: "card-7", content: "Card 7" },
    { id: "card-8", content: "Card 8" },
    { id: "card-9", content: "Card 9" },
    { id: "card-10", content: "Card 10" },
    { id: "card-11", content: "Card 11" },
    { id: "card-12", content: "Card 12" },
    { id: "card-13", content: "Card 13" },
  ]);

  const [canvasCards, setCanvasCards] = useState([]);

  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (!over) return;

    if (over.id === "canvas") {
      // Compute drop position relative to canvas using the translated rect
      const canvasEl = document.getElementById("canvas-box");
      if (!canvasEl) return;
      const canvasRect = canvasEl.getBoundingClientRect();
      const translatedRect = active?.rect?.current?.translated;
      if (!translatedRect) return;

      const newX = translatedRect.left - canvasRect.left;
      const newY = translatedRect.top - canvasRect.top;

      // If dragging an existing canvas card, move it
      const isExistingCanvasCard = canvasCards.some((c) => c.id === active.id);
      if (isExistingCanvasCard) {
        setCanvasCards((prev) =>
          prev.map((c) => (c.id === active.id ? { ...c, x: newX, y: newY } : c))
        );
        return;
      }

      // Otherwise, dragging from pool: create a new instance with unique id
      const baseId = active.id;
      const poolCard = pool.find((c) => c.id === baseId);
      const content = poolCard?.content || baseId;
      const uniqueId = `${baseId}-${Date.now()}-${Math.floor(Math.random() * 100000)}`;

      setCanvasCards((prev) => [
        ...prev,
        { id: uniqueId, content, x: newX, y: newY },
      ]);
    }
  };

  /*
    TODO: height is more of a problem than width, probably go left/right
    if i want to do body selection then make that a tab you switch to.  seesm like a fun *challenge*
  */
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Box 
        data-testid="drag-drop-main-container"
        sx={dragnDropStyles.mainContainer}
      >
        <Box 
          data-testid="canvas-section"
          sx={dragnDropStyles.canvasSection}
        >
          <Canvas sx={{ flex: 1 }}>
            {canvasCards.map((card) => (
              <DraggableCard
                key={card.id}
                id={card.id}
                content={card.content}
                x={card.x}
                y={card.y}
                isOnCanvas
              />
            ))}
          </Canvas>
        </Box>
        <CardPool 
          pool={pool}
        />
      </Box>
    </DndContext>
  );
}

export default DragNDrop;