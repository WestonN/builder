import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import BasicCard from "../components/BasicCard";
import { DndContext } from "@dnd-kit/core";
import { Grid } from "@mui/material";
import DraggableCard from "../components/DraggableCard";
import Slot from "../components/DroppableSlot";

function DragNDrop() {
    const [cards, setCards] = useState([
        { id: "card-1", content: "Card 1" },
        { id: "card-2", content: "Card 2" },
        { id: "card-3", content: "Card 3" },
      ]);
    
      const [slots, setSlots] = useState({
        slot1: null,
        slot2: null,
        slot3: null,
      });
    
      const handleDragEnd = (event) => {
        const { over, active } = event;
        // if (!over && Object.values(slots).includes(active.id)) {
        //     setSlots((prev) => {
        //         const updated = { ...prev };
        //         updated[Object.keys(slots).find(slot => slots[slot] === active.id)] = null;
        //         return updated;
        //     });
        //     return;
        // }
        if (!over) return;
    
        const cardId = active.id;
        const targetSlot = over.id;
    
        // Check if card is already in a slot
        const currentSlot = Object.keys(slots).find(
          (slot) => slots[slot] === cardId
        );
    
        setSlots((prev) => {
          const updated = { ...prev };
    
          if (prev[targetSlot] === null) {
            // ✅ Empty slot: move card in
            updated[targetSlot] = cardId;
          } else {
            // 🔄 Occupied slot: swap
            const displacedCard = prev[targetSlot];
            updated[targetSlot] = cardId;
            if (currentSlot) {
              updated[currentSlot] = displacedCard;
            } else {
              // if from "pool", return displaced card to cards
              setCards((c) => [...c, { id: displacedCard, content: displacedCard }]);
            }
          }
    
          return updated;
        });
    
        // Remove from pool if moved into slots
        setCards((prev) => prev.filter((c) => c.id !== cardId));
      };
    
      return (
        <DndContext onDragEnd={handleDragEnd}>
            Want to make cards swappable and removeable<br/>
            - bottom area searchable with pills or search bar<br/>
            - drag and drop the exercises you want
          <Grid container spacing={2} sx={{ p: 4 }}>
            {/* Card Pool */}
            <Grid item xs={12}>
              <Typography variant="h6">Cards</Typography>
              {cards.map((card) => (
                <DraggableCard key={card.id} id={card.id} content={card.content} />
              ))}
            </Grid>
    
            {/* Slots */}
            {Object.keys(slots).map((slotId) => (
              <Grid item xs={4} key={slotId}>
                <Slot id={slotId}>
                  {slots[slotId] && (
                    <DraggableCard
                      id={slots[slotId]}
                      content={slots[slotId]}
                    />
                  )}
                </Slot>
              </Grid>
            ))}
          </Grid>
        </DndContext>
      );
}

export default DragNDrop;