import { useCallback, useEffect, useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [touchStarX, setTouchStartX] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedItems = [items[items.lenth - 1], ...items, items[0]];
};
