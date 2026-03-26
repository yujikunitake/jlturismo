import { useMemo, useRef, useState } from "react";
import { ScrollView, View } from "react-native";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Destinations from "../components/Destinos";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  const scrollRef = useRef(null);
  const [destinationsY, setDestinationsY] = useState(0);
  const [footerY, setFooterY] = useState(0);

  const scrollToY = (y) => {
    if (typeof y !== "number") return;
    scrollRef.current?.scrollTo({ y, animated: true });
  };

  // Evita re-criar handlers em toda renderização.
  const handlers = useMemo(
    () => ({
      onPressHome: () => scrollToY(0),
      onPressDestinations: () => scrollToY(destinationsY),
      onPressContact: () => scrollToY(footerY),
    }),
    [destinationsY, footerY]
  );

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Header {...handlers} />
        <Hero onPressPackage={handlers.onPressDestinations} />

        <View onLayout={(e) => setDestinationsY(e.nativeEvent.layout.y)}>
          <Destinations />
        </View>

        <View onLayout={(e) => setFooterY(e.nativeEvent.layout.y)}>
          <Footer />
        </View>
      </ScrollView>

      <WhatsAppButton />
    </View>
  );
}
