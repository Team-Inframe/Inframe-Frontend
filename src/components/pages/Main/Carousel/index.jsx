import { useCallback, useEffect, useState } from "react";

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [touchStarX, setTouchStartX] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const extendedItems = [items[items.lenth - 1], ...items, items[0]];

  const goToPrevious = useCallback(() => {
    if (isTransitioning) return;
    setTransition(true);
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
  }, [isTransitioning]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setTransition(true);
    setIsTransitioning(true);
    setCurrentIndex((preIndex) => preIndex + 1);
  }, [isTransitioning]);
};
export default Carousel;
